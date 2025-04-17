import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { StatusBar } from 'react-native';

const COLORS = {
  primary: '#2E7D32', // Green
  background: '#F5F5F5',
  
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;