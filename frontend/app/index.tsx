import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { SectionHeader } from '../components/SectionHeader';
import { TestimonialCard } from '../components/TestimonialCard';
import { Logo } from '../components/Logo';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { router } from 'expo-router';

export default function HomePage() {
  const handleScheduleConsultation = () => {
    router.push('/contact');
  };

  const handleViewServices = () => {
    router.push('/services');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Logo size="large" style={styles.heroLogo} />
          <Text style={styles.heroTitle}>
            Board-Level IT Governance & Digital Trust Leadership
          </Text>
          <View style={styles.divider} />
          <Text style={styles.heroSubtitle}>
            Aligning IT strategy, risk governance, and regulatory accountability with enterprise
            objectives using COBIT 2019, ISO 27001, and ITIL 4
          </Text>
          <Text style={styles.heroStatement}>
            I help Boards and executive leadership teams transform governance frameworks into
            measurable oversight systems that enhance risk visibility, resilience, and digital trust.
          </Text>
          <View style={styles.heroButtons}>
            <Button
              title="Request Executive Consultation"
              onPress={handleScheduleConsultation}
              variant="primary"
            />
            <View style={{ height: 12 }} />
            <Button
              title="View Governance Advisory"
              onPress={handleViewServices}
              variant="secondary"
            />
          </View>
        </View>

        {/* Executive Positioning */}
        <View style={styles.section}>
          <View style={styles.executiveSection}>
            <View style={styles.executiveImageContainer}>
              <Image
                source={require('../assets/images/profile.jpg')}
                style={styles.executiveImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.executiveContent}>
              <SectionHeader
                title="Governance That Drives Confidence, Not Just Compliance"
                align="left"
              />
              <Text style={styles.bodyText}>
                With 30+ years of enterprise IT and governance leadership, I specialize in designing and
                implementing IT governance systems that integrate risk, performance, compliance, and
                resilience into strategic decision-making frameworks.
              </Text>
              <Text style={[styles.bodyText, { marginTop: 16 }]}>
                My experience spans regulated banking, telecom, aviation, and global IT services across
                IBM, HCL, Standard Chartered, ANZ Grindlays, and regional operations in UK, EMEA, Middle
                East, and GCC regions.
              </Text>
            </View>
          </View>
        </View>

        {/* Credibility Strip */}
        <View style={styles.credibilityStrip}>
          <View style={styles.credibilityItem}>
            <Ionicons name="ribbon" size={24} color={Colors.accent} />
            <Text style={styles.credibilityText}>30+ Years of Enterprise IT Leadership</Text>
          </View>
          <View style={styles.credibilityItem}>
            <Ionicons name="shield-checkmark" size={24} color={Colors.accent} />
            <Text style={styles.credibilityText}>COBIT 4.1 Certified | COBIT 2019 Practitioner</Text>
          </View>
          <View style={styles.credibilityItem}>
            <Ionicons name="medal" size={24} color={Colors.accent} />
            <Text style={styles.credibilityText}>ITIL 4 Managing Professional & Strategic Leader</Text>
          </View>
          <View style={styles.credibilityItem}>
            <Ionicons name="document-text" size={24} color={Colors.accent} />
            <Text style={styles.credibilityText}>ISO/IEC 27001 Lead Auditor</Text>
          </View>
          <View style={styles.credibilityItem}>
            <Ionicons name="globe" size={24} color={Colors.accent} />
            <Text style={styles.credibilityText}>GCC & Middle East Regulatory Exposure</Text>
          </View>
        </View>

        {/* Core Advisory Domains */}
        <View style={styles.section}>
          <SectionHeader title="Core Advisory Domains" align="center" />
          
          <ServiceCard
            icon="business"
            title="Enterprise IT Governance Architecture"
            description="COBIT 2019-aligned governance framework design for regulated enterprises"
            features={[
              'Design Factor Assessment & Objectives Mapping',
              'Goals Cascade & KPI Development',
              'Maturity Assessment & Board-Level Reporting',
            ]}
            onPress={handleViewServices}
          />

          <ServiceCard
            icon="shield"
            title="IT Risk Governance & Regulatory Alignment"
            description="Integrated risk governance for audit readiness and compliance"
            features={[
              'Risk Appetite Framework & Regulatory Compliance',
              'Audit Oversight & BCP/DR Governance',
              'Third-Party Risk & Operational Resilience',
            ]}
            onPress={handleViewServices}
          />

          <ServiceCard
            icon="pulse"
            title="Digital Trust & AI Governance Advisory"
            description="Future-ready governance for emerging technologies and AI systems"
            features={[
              'AI Governance Oversight Models',
              'Ethical Technology Frameworks',
              'ISO 27001 Integration & Digital Trust KPIs',
            ]}
            onPress={handleViewServices}
          />

          <ServiceCard
            icon="construct"
            title="Enterprise ITSM Transformation & ITIL-Based Service Excellence"
            description="Transform IT operations into measurable service excellence with ITIL 4 frameworks"
            features={[
              'ITIL & ITSM Training Programs',
              'ITSM Process Design & Implementation',
              'AI-Enabled ITSM Advisory',
            ]}
            onPress={handleViewServices}
          />
        </View>

        {/* Testimonials */}
        <View style={styles.section}>
          <SectionHeader title="Client Testimonials" align="center" />
          
          <TestimonialCard
            quote="Sankarsan's approach to governance transformed how our board views IT risk. His practical frameworks gave us clarity we never had before."
            author="Anonymous"
            position="Chief Information Officer"
            company="Regional Banking Institution (GCC)"
          />

          <TestimonialCard
            quote="The COBIT 2019 implementation brought measurable improvement to our risk visibility and regulatory preparedness. Exceptional guidance throughout."
            author="Anonymous"
            position="Chief Risk Officer"
            company="Telecom Enterprise (Middle East)"
          />
        </View>

        {/* Strategic Differentiator */}
        <View style={styles.section}>
          <SectionHeader
            title="From Framework Adoption to Governance Execution"
            align="center"
          />
          <View style={styles.differentiatorContent}>
            <Text style={styles.differentiatorText}>
              I help organizations move beyond framework adoption to governance execution by:
            </Text>
            <View style={styles.differentiatorList}>
              <View style={styles.differentiatorItem}>
                <Ionicons name="checkmark-circle" size={20} color={Colors.accent} />
                <Text style={styles.differentiatorPoint}>
                  Operationalizing governance into board-ready metrics and oversight models
                </Text>
              </View>
              <View style={styles.differentiatorItem}>
                <Ionicons name="checkmark-circle" size={20} color={Colors.accent} />
                <Text style={styles.differentiatorPoint}>
                  Improving risk transparency and strategic decision-making
                </Text>
              </View>
              <View style={styles.differentiatorItem}>
                <Ionicons name="checkmark-circle" size={20} color={Colors.accent} />
                <Text style={styles.differentiatorPoint}>
                  Strengthening accountability structures across IT and enterprise risk
                </Text>
              </View>
              <View style={styles.differentiatorItem}>
                <Ionicons name="checkmark-circle" size={20} color={Colors.accent} />
                <Text style={styles.differentiatorPoint}>
                  Supporting regulatory defensibility and audit confidence
                </Text>
              </View>
              <View style={styles.differentiatorItem}>
                <Ionicons name="checkmark-circle" size={20} color={Colors.accent} />
                <Text style={styles.differentiatorPoint}>
                  Enabling informed, strategic decisions at the board level
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Final CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Strengthen Your Governance Architecture</Text>
          <Text style={styles.ctaSubtext}>
            Whether you're facing regulatory pressure, digital transformation, AI adoption
            challenges, or need to improve risk maturity, I can help structure governance that
            delivers confidence and strategic clarity.
          </Text>
          <Button
            title="Schedule a Governance Consultation"
            onPress={handleScheduleConsultation}
            variant="primary"
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Logo size="medium" style={styles.footerLogo} />
          <Text style={styles.footerName}>Sankarsan Biswas</Text>
          <Text style={styles.footerTitle}>
            Enterprise IT Governance & Digital Trust Leadership
          </Text>
          <Text style={styles.footerAvailability}>
            Available for GCC Advisory Engagements
          </Text>
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
  hero: {
    backgroundColor: Colors.primary,
    padding: 32,
    paddingTop: 48,
    paddingBottom: 48,
    alignItems: 'center',
  },
  heroLogo: {
    marginBottom: 24,
  },
  heroTitle: {
    ...Typography.h1,
    color: Colors.white,
    marginBottom: 16,
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: Colors.accent,
    marginBottom: 20,
  },
  heroSubtitle: {
    ...Typography.body,
    color: Colors.white,
    marginBottom: 24,
    lineHeight: 24,
  },
  heroStatement: {
    ...Typography.body,
    color: Colors.lightGrey,
    marginBottom: 32,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  heroButtons: {
    marginTop: 8,
  },
  section: {
    padding: 24,
  },
  executiveSection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  executiveImageContainer: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    width: 240,
    height: 320,
    alignSelf: 'center',
  },
  executiveImage: {
    width: '100%',
    height: '100%',
  },
  executiveContent: {
    flex: 1,
  },
  bodyText: {
    ...Typography.body,
    color: Colors.textPrimary,
    lineHeight: 26,
  },
  credibilityStrip: {
    backgroundColor: Colors.secondary,
    padding: 24,
    paddingVertical: 32,
  },
  credibilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  credibilityText: {
    ...Typography.bodySmall,
    color: Colors.white,
    marginLeft: 12,
    flex: 1,
  },
  differentiatorContent: {
    marginTop: 16,
  },
  differentiatorText: {
    ...Typography.body,
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  differentiatorList: {
    marginTop: 8,
  },
  differentiatorItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  differentiatorPoint: {
    ...Typography.bodySmall,
    color: Colors.textPrimary,
    marginLeft: 12,
    flex: 1,
    lineHeight: 22,
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
  ctaSubtext: {
    ...Typography.body,
    color: Colors.lightGrey,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  footer: {
    backgroundColor: Colors.secondary,
    padding: 32,
    alignItems: 'center',
  },
  footerLogo: {
    marginBottom: 16,
  },
  footerName: {
    ...Typography.h3,
    color: Colors.white,
    marginBottom: 8,
  },
  footerTitle: {
    ...Typography.bodySmall,
    color: Colors.accent,
    marginBottom: 8,
    textAlign: 'center',
  },
  footerAvailability: {
    ...Typography.caption,
    color: Colors.lightGrey,
    marginTop: 8,
  },
});
