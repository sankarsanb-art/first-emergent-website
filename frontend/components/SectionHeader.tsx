import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
}) => {
  return (
    <View style={[styles.container, align === 'center' && styles.centerAlign]}>
      <View style={styles.divider} />
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  centerAlign: {
    alignItems: 'center',
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: Colors.accent,
    marginBottom: 16,
  },
  title: {
    ...Typography.h2,
    color: Colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textSecondary,
    marginTop: 8,
  },
});
