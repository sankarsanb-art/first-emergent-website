#!/usr/bin/env python3

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend .env
BACKEND_URL = "https://builder-spec.preview.emergentagent.com/api"

def test_root_endpoint():
    """Test GET /api/ endpoint"""
    print("Testing root endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "Sankarsan.com API" in data["message"]:
                print("✅ Root endpoint working correctly")
                return True
            else:
                print("❌ Root endpoint response format incorrect")
                return False
        else:
            print("❌ Root endpoint failed")
            return False
    except Exception as e:
        print(f"❌ Root endpoint error: {str(e)}")
        return False

def test_contact_submission():
    """Test POST /api/contact endpoint with realistic IT governance data"""
    print("\nTesting contact form submission...")
    
    # Test with valid data
    valid_contact = {
        "full_name": "Rajesh Sharma",
        "organization": "Emirates National Bank",
        "designation": "Chief Information Officer",
        "email": "rajesh.sharma@enb.ae",
        "contact_number": "+971-4-2345678",
        "area_of_interest": "Governance",
        "message": "We are looking to implement COBIT 2019 framework across our IT operations. Need consultation on governance structure and risk assessment methodologies for banking sector compliance."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=valid_contact)
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "id" in data:
                print("✅ Contact submission working correctly")
                return True, data.get("id")
            else:
                print("❌ Contact submission response format incorrect")
                return False, None
        else:
            print("❌ Contact submission failed")
            return False, None
    except Exception as e:
        print(f"❌ Contact submission error: {str(e)}")
        return False, None

def test_contact_validation():
    """Test contact form validation"""
    print("\nTesting contact form validation...")
    
    # Test missing required field
    invalid_contact = {
        "full_name": "Test User",
        "organization": "Test Org",
        # missing designation
        "email": "test@example.com",
        "contact_number": "+1234567890",
        "area_of_interest": "Risk",
        "message": "Test message"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=invalid_contact)
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 422:  # FastAPI validation error
            print("✅ Contact form validation working correctly")
            return True
        else:
            print("❌ Contact form validation not working as expected")
            return False
    except Exception as e:
        print(f"❌ Contact validation error: {str(e)}")
        return False

    # Test invalid email format
    invalid_email_contact = {
        "full_name": "Test User",
        "organization": "Test Org",
        "designation": "CTO",
        "email": "invalid-email",
        "contact_number": "+1234567890",
        "area_of_interest": "Digital Trust",
        "message": "Test message"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=invalid_email_contact)
        print(f"Email validation - Status: {response.status_code}")
        print(f"Email validation - Response: {response.json()}")
        
        if response.status_code == 422:
            print("✅ Email format validation working correctly")
            return True
        else:
            print("❌ Email format validation not working")
            return False
    except Exception as e:
        print(f"❌ Email validation error: {str(e)}")
        return False

def test_contact_retrieval():
    """Test GET /api/contact endpoint"""
    print("\nTesting contact submissions retrieval...")
    try:
        response = requests.get(f"{BACKEND_URL}/contact")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "submissions" in data:
                submissions = data["submissions"]
                if isinstance(submissions, list):
                    print(f"✅ Contact retrieval working correctly - Found {len(submissions)} submissions")
                    
                    # Check if submissions are sorted by created_at descending
                    if len(submissions) > 1:
                        for i in range(len(submissions) - 1):
                            if submissions[i]["created_at"] < submissions[i + 1]["created_at"]:
                                print("❌ Submissions not sorted by created_at descending")
                                return False
                        print("✅ Submissions properly sorted by created_at descending")
                    
                    return True
                else:
                    print("❌ Submissions not in list format")
                    return False
            else:
                print("❌ Contact retrieval response format incorrect")
                return False
        else:
            print("❌ Contact retrieval failed")
            return False
    except Exception as e:
        print(f"❌ Contact retrieval error: {str(e)}")
        return False

def test_thought_leadership_creation():
    """Test POST /api/thought-leadership endpoint"""
    print("\nTesting thought leadership article creation...")
    
    article = {
        "title": "COBIT 2019 Implementation: A Strategic Approach for GCC Financial Institutions",
        "excerpt": "Comprehensive guide to implementing COBIT 2019 framework in Gulf Cooperation Council banking and financial sectors with focus on regulatory compliance.",
        "content": "The implementation of COBIT 2019 in GCC financial institutions requires a strategic approach that addresses regional regulatory requirements, cultural considerations, and international compliance standards. This article explores the key components of successful COBIT 2019 deployment including governance structure design, risk assessment frameworks, and performance measurement systems tailored for the Middle Eastern banking sector.",
        "category": "Governance",
        "image_base64": None
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/thought-leadership", json=article)
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "id" in data:
                print("✅ Article creation working correctly")
                return True, data.get("id")
            else:
                print("❌ Article creation response format incorrect")
                return False, None
        else:
            print("❌ Article creation failed")
            return False, None
    except Exception as e:
        print(f"❌ Article creation error: {str(e)}")
        return False, None

def test_thought_leadership_retrieval():
    """Test GET /api/thought-leadership endpoint"""
    print("\nTesting thought leadership articles retrieval...")
    try:
        response = requests.get(f"{BACKEND_URL}/thought-leadership")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "articles" in data:
                articles = data["articles"]
                if isinstance(articles, list):
                    print(f"✅ Articles retrieval working correctly - Found {len(articles)} articles")
                    
                    # Check if articles are sorted by published_date descending
                    if len(articles) > 1:
                        for i in range(len(articles) - 1):
                            if articles[i]["published_date"] < articles[i + 1]["published_date"]:
                                print("❌ Articles not sorted by published_date descending")
                                return False
                        print("✅ Articles properly sorted by published_date descending")
                    
                    return True
                else:
                    print("❌ Articles not in list format")
                    return False
            else:
                print("❌ Articles retrieval response format incorrect")
                return False
        else:
            print("❌ Articles retrieval failed")
            return False
    except Exception as e:
        print(f"❌ Articles retrieval error: {str(e)}")
        return False

def test_single_article_retrieval(article_id):
    """Test GET /api/thought-leadership/{id} endpoint"""
    print(f"\nTesting single article retrieval with ID: {article_id}...")
    try:
        response = requests.get(f"{BACKEND_URL}/thought-leadership/{article_id}")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "article" in data:
                article = data["article"]
                if article.get("id") == article_id:
                    print("✅ Single article retrieval working correctly")
                    return True
                else:
                    print("❌ Retrieved article ID doesn't match requested ID")
                    return False
            else:
                print("❌ Single article response format incorrect")
                return False
        else:
            print("❌ Single article retrieval failed")
            return False
    except Exception as e:
        print(f"❌ Single article retrieval error: {str(e)}")
        return False

def test_article_edge_cases():
    """Test edge cases for article retrieval"""
    print("\nTesting article edge cases...")
    
    # Test invalid article ID
    try:
        response = requests.get(f"{BACKEND_URL}/thought-leadership/invalid-id")
        print(f"Invalid ID - Status: {response.status_code}")
        print(f"Invalid ID - Response: {response.json()}")
        
        if response.status_code == 400:
            print("✅ Invalid ID handling working correctly")
        else:
            print("❌ Invalid ID not handled properly")
            return False
    except Exception as e:
        print(f"❌ Invalid ID test error: {str(e)}")
        return False
    
    # Test non-existent article ID (valid format but doesn't exist)
    try:
        response = requests.get(f"{BACKEND_URL}/thought-leadership/507f1f77bcf86cd799439011")
        print(f"Non-existent ID - Status: {response.status_code}")
        print(f"Non-existent ID - Response: {response.json()}")
        
        if response.status_code == 404:
            print("✅ Non-existent ID handling working correctly")
            return True
        else:
            print("❌ Non-existent ID not handled properly")
            return False
    except Exception as e:
        print(f"❌ Non-existent ID test error: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("=== Starting Backend API Testing for Sankarsan.com IT Governance Website ===\n")
    print(f"Backend URL: {BACKEND_URL}\n")
    
    results = {}
    
    # Test 1: Root endpoint
    results['root'] = test_root_endpoint()
    
    # Test 2: Contact form submission
    results['contact_submit'], contact_id = test_contact_submission()
    
    # Test 3: Contact form validation
    results['contact_validation'] = test_contact_validation()
    
    # Test 4: Contact retrieval
    results['contact_retrieval'] = test_contact_retrieval()
    
    # Test 5: Thought leadership creation
    results['article_creation'], article_id = test_thought_leadership_creation()
    
    # Test 6: Thought leadership retrieval
    results['article_retrieval'] = test_thought_leadership_retrieval()
    
    # Test 7: Single article retrieval (only if we have an article)
    if article_id:
        results['single_article'] = test_single_article_retrieval(article_id)
    else:
        results['single_article'] = False
        print("\n❌ Skipping single article test - no article ID available")
    
    # Test 8: Edge cases
    results['edge_cases'] = test_article_edge_cases()
    
    # Summary
    print("\n" + "="*60)
    print("BACKEND TEST SUMMARY")
    print("="*60)
    
    passed = sum(results.values())
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed!")
        return True
    else:
        print("⚠️  Some tests failed - check logs above")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)