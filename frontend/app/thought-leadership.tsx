import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { SectionHeader } from '../components/SectionHeader';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export default function ThoughtLeadershipPage() {
  // Placeholder articles
  const articles: Article[] = [
    {
      id: '1',
      title: 'Board-Level IT Governance: Moving Beyond Compliance to Strategic Oversight',
      excerpt:
        'Exploring how boards can transform IT governance from a compliance checkbox into a strategic enabler that drives business value and risk intelligence.',
      category: 'Governance',
      date: 'March 2025',
    },
    {
      id: '2',
      title: 'COBIT 2019 Design Factors: Tailoring Governance to Enterprise Context',
      excerpt:
        'A practical guide to applying COBIT 2019 design factors for creating governance systems that align with enterprise strategy, risk appetite, and regulatory requirements.',
      category: 'COBIT 2019',
      date: 'February 2025',
    },
    {
      id: '3',
      title: 'Digital Trust in the Age of AI: Governance Frameworks for Board Confidence',
      excerpt:
        'How boards can establish governance structures for AI systems that balance innovation with ethical oversight, transparency, and stakeholder trust.',
      category: 'Digital Trust',
      date: 'January 2025',
    },
    {
      id: '4',
      title: 'Operational Resilience Governance: Preparing for the Unexpected',
      excerpt:
        'Building robust operational resilience frameworks that integrate BCP, DR, and crisis management into enterprise governance structures.',
      category: 'Risk Governance',
      date: 'December 2024',
    },
    {
      id: '5',
      title: 'GCC Regulatory Landscape: Navigating IT Governance Requirements',
      excerpt:
        'An overview of IT governance and regulatory compliance requirements specific to GCC regulated enterprises, with practical implementation insights.',
      category: 'Compliance',
      date: 'November 2024',
    },
    {
      id: '6',
      title: 'From Framework to Execution: Making ITIL 4 Work for Governance',
      excerpt:
        'Bridging ITIL 4 service management practices with enterprise governance objectives to create cohesive, value-driven IT operations.',
      category: 'ITIL 4',
      date: 'October 2024',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'governance':
        return 'business';
      case 'cobit 2019':
        return 'layers';
      case 'digital trust':
        return 'shield-checkmark';
      case 'risk governance':
        return 'shield';
      case 'compliance':
        return 'document-text';
      case 'itil 4':
        return 'settings';
      default:
        return 'bulb';
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Thought Leadership</Text>
          <Text style={styles.headerSubtitle}>
            Professional insights on IT governance, digital trust, and emerging technology oversight
          </Text>
        </View>

        {/* Articles Section */}
        <View style={styles.section}>
          <SectionHeader
            title="Latest Insights & Articles"
            subtitle="Perspectives on governance frameworks, regulatory compliance, and board-level oversight"
            align="center"
          />

          {articles.map((article) => (
            <TouchableOpacity
              key={article.id}
              style={styles.articleCard}
              activeOpacity={0.9}
            >
              <View style={styles.articleHeader}>
                <View style={styles.categoryBadge}>
                  <Ionicons
                    name={getCategoryIcon(article.category) as any}
                    size={16}
                    color={Colors.accent}
                  />
                  <Text style={styles.categoryText}>{article.category}</Text>
                </View>
                <Text style={styles.dateText}>{article.date}</Text>
              </View>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleExcerpt}>{article.excerpt}</Text>
              <View style={styles.readMore}>
                <Text style={styles.readMoreText}>Read Full Article</Text>
                <Ionicons name="arrow-forward" size={16} color={Colors.accent} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Categories Overview */}
        <View style={styles.categoriesSection}>
          <SectionHeader title="Topics Covered" align="center" />
          <View style={styles.categoriesGrid}>
            <View style={styles.categoryItem}>
              <Ionicons name="business" size={32} color={Colors.accent} />
              <Text style={styles.categoryItemText}>IT Governance</Text>
            </View>
            <View style={styles.categoryItem}>
              <Ionicons name="shield-checkmark" size={32} color={Colors.accent} />
              <Text style={styles.categoryItemText}>Digital Trust</Text>
            </View>
            <View style={styles.categoryItem}>
              <Ionicons name="layers" size={32} color={Colors.accent} />
              <Text style={styles.categoryItemText}>COBIT 2019</Text>
            </View>
            <View style={styles.categoryItem}>
              <Ionicons name="shield" size={32} color={Colors.accent} />
              <Text style={styles.categoryItemText}>Risk Governance</Text>
            </View>
            <View style={styles.categoryItem}>
              <Ionicons name="pulse" size={32} color={Colors.accent} />
              <Text style={styles.categoryItemText}>AI Governance</Text>
            </View>
            <View style={styles.categoryItem}>
              <Ionicons name="document-text" size={32} color={Colors.accent} />
              <Text style={styles.categoryItemText}>Compliance</Text>
            </View>
          </View>
        </View>

        {/* Executive Brief CTA */}
        <View style={styles.ctaSection}>
          <Ionicons name="mail-open" size={48} color={Colors.accent} />
          <Text style={styles.ctaTitle}>Executive Brief Newsletter</Text>
          <Text style={styles.ctaText}>
            Subscribe to receive quarterly insights on governance frameworks, regulatory updates, and
            strategic oversight practices for board-level leaders.
          </Text>
          <Text style={styles.ctaNote}>(Coming Soon)</Text>
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
  articleCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: Colors.accent,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryText: {
    ...Typography.caption,
    color: Colors.accent,
    marginLeft: 6,
    fontWeight: '600',
  },
  dateText: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  articleTitle: {
    ...Typography.h3,
    color: Colors.primary,
    marginBottom: 12,
  },
  articleExcerpt: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  readMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    color: Colors.accent,
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
  },
  categoriesSection: {
    backgroundColor: Colors.lightGrey,
    padding: 24,
    paddingVertical: 32,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  categoryItem: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 24,
  },
  categoryItemText: {
    ...Typography.bodySmall,
    color: Colors.textPrimary,
    marginTop: 8,
    textAlign: 'center',
  },
  ctaSection: {
    backgroundColor: Colors.white,
    padding: 32,
    alignItems: 'center',
  },
  ctaTitle: {
    ...Typography.h2,
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  ctaText: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  ctaNote: {
    ...Typography.bodySmall,
    color: Colors.accent,
    fontStyle: 'italic',
  },
});
