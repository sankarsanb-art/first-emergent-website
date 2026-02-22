import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  style?: any;
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium', style }) => {
  const dimensions = {
    small: { width: 50, height: 50 },
    medium: { width: 80, height: 80 },
    large: { width: 140, height: 140 },
  };

  // Logo stored locally in assets
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../assets/images/logo.jpg')}
        style={[styles.logo, dimensions[size]]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // No border radius to show full logo
  },
});
