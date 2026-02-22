import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  style?: any;
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium', style }) => {
  const dimensions = {
    small: { width: 40, height: 40 },
    medium: { width: 60, height: 60 },
    large: { width: 120, height: 120 },
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
    borderRadius: 50,
  },
});
