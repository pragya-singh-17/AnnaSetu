// screens/NeederForm.js
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import * as Animatable from 'react-native-animatable';


const COLORS = {
  primary: '#2E7D32',
  accent: '#FF8F00',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  textPrimary: '#212121',
  textSecondary: '#757575',
  white: '#FFFFFF',
  border: '#E0E0E0',
};

const NeederForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const formRef = useRef(null);

  const handleSubmit = () => {
    if (!name || !phone || !address || !foodItem || !quantity) {
      alert('Please fill in all fields.');
       if (formRef.current) {
        formRef.current.shake(800);
      }
      return;
    }
    navigation.navigate('NeederConfirmation', {
      name,
      phone,
      address,
      foodItem,
      quantity,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animatable.View ref={formRef} animation="fadeInUp" duration={800} style={styles.formContainer}>
          <Text style={styles.label}>Your Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={COLORS.textSecondary}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number (for contact)"
            placeholderTextColor={COLORS.textSecondary}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Delivery Address / Location"
            placeholderTextColor={COLORS.textSecondary}
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
          />

          <Text style={styles.label}>Food Needed</Text>
          <TextInput
            style={styles.input}
            placeholder="Food Item(s) Needed (e.g., Rice, Milk, Bread)"
            placeholderTextColor={COLORS.textSecondary}
            value={foodItem}
            onChangeText={setFoodItem}
          />
          <TextInput
            style={styles.input}
            placeholder="Approximate Quantity Needed"
            placeholderTextColor={COLORS.textSecondary}
            value={quantity}
            onChangeText={setQuantity}
          />

          <Pressable
             style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
             ]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit Food Request</Text>
          </Pressable>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
      flex: 1,
      backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 5,
  },
  input: {
    backgroundColor: COLORS.background, // Subtle background for input
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
   multilineInput: {
    height: 80, // Initial height for multiline
    textAlignVertical: 'top', // Align text to top for Android
  },
  button: {
    backgroundColor: COLORS.accent,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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


export default NeederForm;