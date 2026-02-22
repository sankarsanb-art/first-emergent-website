from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Helper to convert ObjectId to string
class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

# Define Models
class ContactSubmission(BaseModel):
    full_name: str
    organization: str
    designation: str
    email: EmailStr
    contact_number: str
    area_of_interest: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {ObjectId: str}

class ContactSubmissionResponse(ContactSubmission):
    id: str

class ThoughtLeadershipArticle(BaseModel):
    title: str
    excerpt: str
    content: str
    category: str
    published_date: datetime = Field(default_factory=datetime.utcnow)
    image_base64: Optional[str] = None

    class Config:
        json_encoders = {ObjectId: str}

class ThoughtLeadershipResponse(ThoughtLeadershipArticle):
    id: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Sankarsan.com API - Enterprise IT Governance & Digital Trust"}

@api_router.post("/contact")
async def submit_contact_form(contact: ContactSubmission):
    try:
        contact_dict = contact.dict()
        result = await db.contact_submissions.insert_one(contact_dict)
        return {
            "success": True,
            "message": "Thank you for reaching out. We will contact you shortly.",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact")
async def get_contact_submissions():
    try:
        submissions = await db.contact_submissions.find().sort("created_at", -1).to_list(100)
        for sub in submissions:
            sub["id"] = str(sub.pop("_id"))
        return {"success": True, "submissions": submissions}
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch submissions")

@api_router.get("/thought-leadership")
async def get_thought_leadership_articles():
    try:
        articles = await db.thought_leadership.find().sort("published_date", -1).to_list(100)
        for article in articles:
            article["id"] = str(article.pop("_id"))
        return {"success": True, "articles": articles}
    except Exception as e:
        logger.error(f"Error fetching articles: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch articles")

@api_router.get("/thought-leadership/{article_id}")
async def get_single_article(article_id: str):
    try:
        if not ObjectId.is_valid(article_id):
            raise HTTPException(status_code=400, detail="Invalid article ID")
        
        article = await db.thought_leadership.find_one({"_id": ObjectId(article_id)})
        if not article:
            raise HTTPException(status_code=404, detail="Article not found")
        
        article["id"] = str(article.pop("_id"))
        return {"success": True, "article": article}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching article: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch article")

@api_router.post("/thought-leadership")
async def create_article(article: ThoughtLeadershipArticle):
    try:
        article_dict = article.dict()
        result = await db.thought_leadership.insert_one(article_dict)
        return {
            "success": True,
            "message": "Article created successfully",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        logger.error(f"Error creating article: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create article")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
