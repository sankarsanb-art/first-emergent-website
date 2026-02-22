import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

interface ServiceCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  features: string[];
  onPress?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
      disabled={!onPress}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={32} color={Colors.accent} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.feature}>{feature}</Text>
          </View>
        ))}
      </View>
      {onPress && (
        <View style={styles.learnMore}>
          <Text style={styles.learnMoreText}>Learn More</Text>
          <Ionicons name="arrow-forward" size={16} color={Colors.accent} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    borderTopWidth: 3,
    borderTopColor: Colors.accent,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    ...Typography.h3,
    color: Colors.primary,
    marginBottom: 12,
  },
  description: {
    ...Typography.body,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  featuresContainer: {
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    color: Colors.accent,
    marginRight: 8,
    fontSize: 16,
  },
  feature: {
    ...Typography.bodySmall,
    color: Colors.textPrimary,
    flex: 1,
  },
  learnMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  learnMoreText: {
    color: Colors.accent,
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
  },
});
