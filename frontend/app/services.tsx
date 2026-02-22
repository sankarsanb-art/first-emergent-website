import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ServiceCard } from '../components/ServiceCard';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { router } from 'expo-router';

export default function ServicesPage() {
  const handleContactUs = () => {
    router.push('/contact');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Advisory Services</Text>
          <Text style={styles.headerSubtitle}>
            Comprehensive IT Governance & Digital Trust solutions for regulated enterprises
          </Text>
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <SectionHeader title="Featured Services" align="center" />

          {/* Service 1: COBIT 2019 */}
          <ServiceCard
            icon="business"
            title="COBIT 2019 Governance System Implementation"
            description="Comprehensive governance framework design aligned with COBIT 2019 principles for board-level oversight and strategic alignment."
            features={[
              'Design Factor Assessment & Context Analysis',
              'Enterprise Objectives Mapping & Goals Cascade',
              'Governance & Management Objectives Definition',
              'KPIs, Metrics & Board-Level Dashboards',
              'Maturity Assessment & Continuous Improvement',
            ]}
          />

          <View style={styles.serviceDetails}>
            <Text style={styles.detailsTitle}>What You Get:</Text>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Customized governance architecture tailored to your enterprise context
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Clear accountability models and role definitions (RACI)
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Board-ready reporting frameworks with strategic KPIs
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Maturity roadmap with measurable milestones
              </Text>
            </View>
          </View>

          {/* Service 2: Operational Resilience */}
          <ServiceCard
            icon="shield"
            title="Operational Resilience & BCP/DR Governance"
            description="Integrated resilience governance frameworks ensuring business continuity and disaster recovery preparedness."
            features={[
              'Resilience Governance Model & Oversight Structures',
              'BCP/DR Strategy & Testing Governance',
              'SLA Management & Third-Party Risk Oversight',
              'Incident Response & Crisis Management Governance',
              'Regulatory Compliance & Audit Coordination',
            ]}
          />

          <View style={styles.serviceDetails}>
            <Text style={styles.detailsTitle}>What You Get:</Text>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Comprehensive resilience framework aligned with regulatory requirements
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Executive dashboards for resilience monitoring
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Third-party risk management and vendor oversight models
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Audit-ready documentation and evidence frameworks
              </Text>
            </View>
          </View>

          {/* Service 3: Digital Trust & AI Governance */}
          <ServiceCard
            icon="pulse"
            title="Digital Trust & AI Governance Advisory"
            description="Future-ready governance frameworks for emerging technologies, AI systems, and digital trust assurance."
            features={[
              'AI Risk Governance Structures & Oversight Models',
              'Ethical AI Frameworks & Accountability Mechanisms',
              'Digital Trust KPIs & Stakeholder Confidence Metrics',
              'ISO 27001 Integration & Information Security Governance',
              'Executive Reporting & Board-Level AI Risk Communication',
            ]}
          />

          <View style={styles.serviceDetails}>
            <Text style={styles.detailsTitle}>What You Get:</Text>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                AI governance frameworks addressing ethical, operational, and regulatory risks
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Digital trust metrics and stakeholder communication strategies
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Integration with existing security and risk frameworks (ISO 27001)
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Board-ready AI risk reporting and oversight mechanisms
              </Text>
            </View>
          </View>

          {/* Service 4: ITSM Transformation */}
          <ServiceCard
            icon="construct"
            title="Enterprise ITSM Transformation & ITIL-Based Service Excellence"
            description="Design, implement, and optimize IT Service Management frameworks aligned with business strategy, governance mandates, and digital transformation objectives. Led by Peoplecert Ambassador & ITIL Master."
            features={[
              'ITIL & ITSM Training Programs (Foundation to Advanced)',
              'ITSM Process Design & Implementation',
              'AI-Enabled ITSM Advisory & Automation',
              'ISO/IEC 20000 Certification Preparation',
              'Service Desk Optimization & Maturity Assessment',
            ]}
          />

          <View style={styles.serviceDetails}>
            <Text style={styles.detailsTitle}>Key Offerings:</Text>
            
            <Text style={styles.offeringCategory}>1. ITIL & ITSM Training Programs</Text>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                ITIL Foundation (Exam & Practitioner-Oriented Tracks)
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Role-Based ITSM Training (Incident, Problem, Change, Service Level, CMDB)
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Advanced ITIL 4 Modules (MP / SL Guidance)
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Executive Awareness Sessions on Governance & Service Strategy
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                ITSM Tool-Based Training (ServiceNow / ManageEngine / Others)
              </Text>
            </View>

            <Text style={[styles.offeringCategory, { marginTop: 16 }]}>2. ITSM Process Design & Implementation</Text>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Current State Assessment (Maturity & Gap Analysis)
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Future-State Operating Model Design
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                SOP Development & RACI Matrix Creation
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Governance Framework Alignment (COBIT, ISO 20000, ISO 27001)
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                KPI & Metrics Design (Operational + Governance-Level)
              </Text>
            </View>

            <Text style={[styles.offeringCategory, { marginTop: 16 }]}>3. AI-Enabled ITSM Advisory</Text>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Intelligent Ticket Classification Strategy
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Predictive Incident & Problem Analysis
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                AI Impact Assessment in ITSM
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Automation Feasibility Studies
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="checkmark-circle" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Governance of AI in Service Operations
              </Text>
            </View>

            <Text style={styles.detailsTitle}>What Clients Get:</Text>
            <View style={styles.detailItem}>
              <Ionicons name="star" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                A structured ITSM roadmap aligned to business objectives
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="star" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Clearly defined processes with measurable KPIs
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="star" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Improved incident resolution time & service reliability
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="star" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Increased ticket logging discipline & governance maturity
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="star" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Reduced operational risk and audit exposure
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="star" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Practical automation opportunities identified
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="star" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Skilled and accountable service teams
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="star" size={18} color={Colors.accent} />
              <Text style={styles.detailText}>
                Sustainable continual improvement model
              </Text>
            </View>
            
            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                Most importantly: A shift from reactive IT support to governed, value-driven service management.
              </Text>
            </View>
          </View>
        </View>

        {/* Why Choose Section */}
        <View style={styles.whyChooseSection}>
          <SectionHeader
            title="Why Choose This Advisory Approach"
            align="center"
          />
          <View style={styles.whyChooseContent}>
            <View style={styles.whyItem}>
              <Ionicons name="star" size={28} color={Colors.accent} />
              <View style={styles.whyTextContainer}>
                <Text style={styles.whyTitle}>Practical Experience</Text>
                <Text style={styles.whyText}>
                  30+ years implementing governance across banking, telecom, and aviation
                </Text>
              </View>
            </View>
            <View style={styles.whyItem}>
              <Ionicons name="trophy" size={28} color={Colors.accent} />
              <View style={styles.whyTextContainer}>
                <Text style={styles.whyTitle}>Framework Mastery</Text>
                <Text style={styles.whyText}>
                  Deep expertise in COBIT 2019, ISO 27001, and ITIL 4 frameworks
                </Text>
              </View>
            </View>
            <View style={styles.whyItem}>
              <Ionicons name="globe" size={28} color={Colors.accent} />
              <View style={styles.whyTextContainer}>
                <Text style={styles.whyTitle}>GCC Regulatory Expertise</Text>
                <Text style={styles.whyText}>
                  Proven experience navigating Middle East and GCC regulatory environments
                </Text>
              </View>
            </View>
            <View style={styles.whyItem}>
              <Ionicons name="analytics" size={28} color={Colors.accent} />
              <View style={styles.whyTextContainer}>
                <Text style={styles.whyTitle}>Board-Level Communication</Text>
                <Text style={styles.whyText}>
                  Translating technical governance into strategic executive insights
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Transform Your Governance?</Text>
          <Text style={styles.ctaText}>
            Let's discuss how these advisory services can strengthen your governance architecture
            and enhance board-level confidence.
          </Text>
          <Button
            title="Request Governance Assessment"
            onPress={handleContactUs}
            variant="primary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    padding: 32,
    paddingTop: 24,
  },
  headerTitle: {
    ...Typography.h1,
    color: Colors.white,
    marginBottom: 12,
  },
  headerSubtitle: {
    ...Typography.body,
    color: Colors.lightGrey,
    lineHeight: 24,
  },
  section: {
    padding: 24,
  },
  serviceDetails: {
    backgroundColor: Colors.lightGrey,
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
  },
  detailsTitle: {
    ...Typography.h4,
    color: Colors.primary,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  detailText: {
    ...Typography.bodySmall,
    color: Colors.textPrimary,
    marginLeft: 12,
    flex: 1,
    lineHeight: 20,
  },
  whyChooseSection: {
    backgroundColor: Colors.lightGrey,
    padding: 24,
    paddingVertical: 32,
  },
  whyChooseContent: {
    marginTop: 16,
  },
  whyItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  whyTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  whyTitle: {
    ...Typography.h4,
    color: Colors.primary,
    marginBottom: 4,
  },
  whyText: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  ctaSection: {
    backgroundColor: Colors.primary,
    padding: 32,
    alignItems: 'center',
  },
  ctaTitle: {
    ...Typography.h2,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaText: {
    ...Typography.body,
    color: Colors.lightGrey,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  offeringCategory: {
    ...Typography.h4,
    color: Colors.primary,
    marginBottom: 12,
    marginTop: 8,
  },
  highlightBox: {
    backgroundColor: Colors.accent,
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  highlightText: {
    ...Typography.body,
    color: Colors.primary,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
});
