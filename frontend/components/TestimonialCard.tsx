import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
}) => {
  return (
    <View style={styles.card}>
      <Ionicons name="quote" size={32} color={Colors.accent} style={styles.quoteIcon} />
      <Text style={styles.quote}>{quote}</Text>
      <View style={styles.authorContainer}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
  },
  quoteIcon: {
    marginBottom: 16,
  },
  quote: {
    ...Typography.body,
    color: Colors.textPrimary,
    fontStyle: 'italic',
    marginBottom: 20,
    lineHeight: 26,
  },
  authorContainer: {
    borderTopWidth: 1,
    borderTopColor: Colors.accent,
    paddingTop: 16,
  },
  author: {
    ...Typography.h4,
    color: Colors.primary,
    marginBottom: 4,
  },
  position: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  company: {
    ...Typography.bodySmall,
    color: Colors.accent,
  },
});
