import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen'; 
import DonorForm from '../screens/DonorForm';
import DonorConfirmation from '../screens/DonorConfirmation';
import DonorHome from '../screens/DonorHome';
import NeederForm from '../screens/NeederForm';
import NeederConfirmation from '../screens/NeederConfirmation';
import NeederHome from '../screens/NeederHome';
import SuccessScreen from '../screens/SuccessScreen';
import SS from '../screens/SS';

const Stack = createStackNavigator();

const COLORS = {
  primary: '#2E7D32',
  surface: '#FFFFFF',
  textPrimary: '#212121',
  background: '#F5F5F5',
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.surface, // Or COLORS.primary for a colored header
        elevation: 1, // Subtle shadow for Android
        shadowOpacity: 0.1, // Subtle shadow for iOS
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
      },
      headerTintColor: COLORS.textPrimary, // Color of title and back button
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitleVisible: false, // Hide back button text on iOS
      cardStyle: { backgroundColor: COLORS.background }, // Background for the content area
    }}
  >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ title: 'Welcome' }} />
      <Stack.Screen name="DonorForm" component={DonorForm} options={{ title: 'Donate Food' }} />
      <Stack.Screen name="DonorConfirmation" component={DonorConfirmation} options={{ title: 'Confirm Donation' }} />
      <Stack.Screen name="DonorHome" component={DonorHome} options={{ title: 'Donor Dashboard' }} />
      <Stack.Screen name="NeederForm" component={NeederForm} options={{ title: 'Request Food' }} />
      <Stack.Screen name="NeederConfirmation" component={NeederConfirmation} options={{ title: 'Confirm Request' }} />
      <Stack.Screen name="NeederHome" component={NeederHome} options={{ title: 'Needer Dashboard' }} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SS" component={SS} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;