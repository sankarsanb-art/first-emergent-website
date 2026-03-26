import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Linking,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import axios from 'axios';

const EXPO_PUBLIC_BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    organization: '',
    designation: '',
    email: '',
    contact_number: '',
    area_of_interest: 'Governance',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !formData.full_name ||
      !formData.organization ||
      !formData.designation ||
      !formData.email ||
      !formData.contact_number ||
      !formData.message
    ) {
      Alert.alert('Validation Error', 'Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${EXPO_PUBLIC_BACKEND_URL}/api/contact`, formData);
      
      if (response.data.success) {
        Alert.alert(
          'Success',
          'Thank you for reaching out. We will contact you shortly.',
          [{ text: 'OK', onPress: () => resetForm() }]
        );
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      Alert.alert('Error', 'Failed to submit form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      full_name: '',
      organization: '',
      designation: '',
      email: '',
      contact_number: '',
      area_of_interest: 'Governance',
      message: '',
    });
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:mailme@sankarsan.com');
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/sankarsan');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Contact Us</Text>
            <Text style={styles.headerSubtitle}>
              Let's discuss how we can strengthen your governance architecture
            </Text>
          </View>

          {/* Contact Information */}
          <View style={styles.section}>
            <View style={styles.profileSection}>
              <Image
                source={require('../assets/images/profile.jpg')}
                style={styles.profileImage}
                resizeMode="cover"
              />
            </View>
            <SectionHeader title="Get In Touch" align="center" />
            
            <View style={styles.contactInfoContainer}>
              <View style={styles.contactItem}>
                <Ionicons name="location" size={24} color={Colors.accent} />
                <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>Location</Text>
                  <Text style={styles.contactValue}>Kolkata, India</Text>
                  <Text style={styles.contactNote}>Open to GCC Engagements</Text>
                </View>
              </View>

              <View style={styles.contactItem}>
                <Ionicons name="mail" size={24} color={Colors.accent} />
                <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>Email</Text>
                  <Text style={styles.contactValue} onPress={handleEmailPress}>
                    mailme@sankarsan.com
                  </Text>
                </View>
              </View>

              <View style={styles.contactItem}>
                <Ionicons name="logo-linkedin" size={24} color={Colors.accent} />
                <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>LinkedIn</Text>
                  <Text style={styles.contactValue} onPress={handleLinkedInPress}>
                    linkedin.com/in/sankarsan
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Contact Form */}
          <View style={styles.formSection}>
            <SectionHeader title="Send a Message" align="center" />
            
            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Full Name *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your full name"
                  placeholderTextColor={Colors.textSecondary}
                  value={formData.full_name}
                  onChangeText={(value) => handleInputChange('full_name', value)}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Organization *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your organization"
                  placeholderTextColor={Colors.textSecondary}
                  value={formData.organization}
                  onChangeText={(value) => handleInputChange('organization', value)}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Designation *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your designation"
                  placeholderTextColor={Colors.textSecondary}
                  value={formData.designation}
                  onChangeText={(value) => handleInputChange('designation', value)}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email Address *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="your.email@example.com"
                  placeholderTextColor={Colors.textSecondary}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.email}
                  onChangeText={(value) => handleInputChange('email', value)}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Contact Number *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+1234567890"
                  placeholderTextColor={Colors.textSecondary}
                  keyboardType="phone-pad"
                  value={formData.contact_number}
                  onChangeText={(value) => handleInputChange('contact_number', value)}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Area of Interest *</Text>
                <View style={styles.pickerContainer}>
                  {['Governance', 'Risk', 'Digital Trust', 'AI Governance'].map((option) => (
                    <Text
                      key={option}
                      style={[
                        styles.pickerOption,
                        formData.area_of_interest === option && styles.pickerOptionSelected,
                      ]}
                      onPress={() => handleInputChange('area_of_interest', option)}
                    >
                      {option}
                    </Text>
                  ))}
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Message *</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Tell us about your governance needs..."
                  placeholderTextColor={Colors.textSecondary}
                  multiline
                  numberOfLines={5}
                  textAlignVertical="top"
                  value={formData.message}
                  onChangeText={(value) => handleInputChange('message', value)}
                />
              </View>

              <Button
                title="Submit Inquiry"
                onPress={handleSubmit}
                variant="primary"
                loading={loading}
                disabled={loading}
              />
            </View>
          </View>

          {/* Map Section */}
          <View style={styles.mapSection}>
            <SectionHeader title="Our Location" align="center" />
            <View style={styles.mapContainer}>
              <View style={[styles.map, styles.webMapPlaceholder]}>
                <Ionicons name="location" size={48} color={Colors.accent} />
                <Text style={styles.webMapText}>Kolkata, India</Text>
                <Text style={styles.webMapSubtext}>
                  Open in Maps App for directions
                </Text>
              </View>
            </View>
            <Text style={styles.mapNote}>Available for GCC Onsite Advisory Engagements</Text>
          </View>

          {/* Bottom Spacing */}
          <View style={{ height: 32 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  keyboardView: {
    flex: 1,
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 200,
    height: 267,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: Colors.accent,
  },
  contactInfoContainer: {
    marginTop: 16,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  contactTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  contactLabel: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  contactValue: {
    ...Typography.body,
    color: Colors.primary,
    fontWeight: '600',
  },
  contactNote: {
    ...Typography.caption,
    color: Colors.accent,
    marginTop: 4,
  },
  formSection: {
    backgroundColor: Colors.lightGrey,
    padding: 24,
    paddingVertical: 32,
  },
  form: {
    marginTop: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    ...Typography.bodySmall,
    color: Colors.textPrimary,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  textArea: {
    minHeight: 120,
    paddingTop: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pickerOption: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  pickerOptionSelected: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
    color: Colors.primary,
    fontWeight: '600',
  },
  mapSection: {
    padding: 24,
  },
  mapContainer: {
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 16,
    marginBottom: 12,
  },
  map: {
    flex: 1,
  },
  mapNote: {
    ...Typography.bodySmall,
    color: Colors.accent,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  webMapPlaceholder: {
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webMapText: {
    ...Typography.h3,
    color: Colors.primary,
    marginTop: 16,
  },
  webMapSubtext: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    marginTop: 8,
  },
});
