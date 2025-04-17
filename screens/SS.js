// screens/SuccessScreen.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons'; // Example using icons


const COLORS = {
  primary: '#2E7D32',
  accent: '#FF8F00',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  textPrimary: '#212121',
  white: '#FFFFFF',
};

const SS = ({ navigation, route }) => {
  // Determine where to go next (could be DonorHome or NeederHome)
  // You might pass a parameter in route.params from the confirmation screen
  // to decide the navigation target.
  const navigateToHome = () => {
     
     // if (route.params?.userType === 'needer') {
     //   navigation.navigate('NeederHome');
     // } else {
       navigation.navigate('NeederHome'); // Defaulting to NeederHome for now
     // }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" duration={1200} style={styles.iconContainer}>
         {/* If using react-native-vector-icons */}
         <Icon name="checkmark-circle" size={100} color={COLORS.primary} />
         {/* If not using icons, use a Text or keep it empty */}
         {/* <Text style={styles.iconPlaceholder}>✓</Text> */}
      </Animatable.View>

      <Animatable.Text animation="fadeInUp" delay={300} style={styles.successText}>
        Success! Thank you!
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" delay={500} style={styles.messageText}>
        Your submission has been received.
      </Animatable.Text>

      <Animatable.View animation="fadeInUp" delay={700} style={styles.buttonWrapper}>
        <Pressable
           style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
           ]}
          onPress={navigateToHome}
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
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
  iconContainer: {
    marginBottom: 30,
    // Style for the icon or placeholder
  },
  iconPlaceholder: { // Style if using Text instead of Icon
      fontSize: 100,
      color: COLORS.primary,
      fontWeight: 'bold',
  },
  successText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  messageText: {
      fontSize: 16,
      color: COLORS.textSecondary,
      textAlign: 'center',
      marginBottom: 40,
  },
   buttonWrapper: {
    width: '100%', // Ensure button wrapper takes width for centering Pressable
    alignItems: 'center', // Center Pressable within the wrapper
  },
  button: {
    backgroundColor: COLORS.accent,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    minWidth: '80%', // Give the button a good width
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
   buttonPressed: {
    opacity: 0.8,
  },
});

export default SS;