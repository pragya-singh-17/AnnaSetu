// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

// Define or import colors
const COLORS = {
  primary: '#2E7D32',
  accent: '#FF8F00',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  textPrimary: '#212121',
  textSecondary: '#757575',
  white: '#FFFFFF',
};

// Define your logo (make sure the path is correct)
const logo = require('../assets/logo.png');

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={1000} style={styles.header}>
        <Animatable.Image
          source={logo}
          style={styles.logo}
          animation="pulse" // Example animation: pulse
          iterationCount="infinite" // Make it loop indefinitely
          duration={1500} // Duration of one pulse cycle
          
        />
        <Text style={styles.title}>AnnaSetu</Text>
        <Text style={styles.subtitle}>Connecting Donors & Needers</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" duration={1000} delay={300} style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.donorButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate('DonorForm')}
        >
          <Text style={styles.buttonText}>I Want to Donate Food</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.neederButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate('NeederForm')}
        >
          <Text style={styles.buttonText}>I Need Food</Text>
        </Pressable>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 200, // Increased width
    height: 200, // Increased height
    marginBottom: 20, // Space between logo and text
    resizeMode: 'contain', // Or 'cover', 'stretch', etc.
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.textSecondary,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    paddingVertical: 15,
    borderRadius: 25, // More rounded buttons
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  donorButton: {
    backgroundColor: COLORS.primary,
  },
  neederButton: {
    backgroundColor: COLORS.accent,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.8, // Visual feedback on press
  },
});

export default WelcomeScreen;