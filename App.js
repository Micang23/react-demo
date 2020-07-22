
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import SignIn from './app/screens/SignIn';
import SignUp from './app/screens/SignUp';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{headerShown: false}} />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{headerShown: false}} />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{headerShown: false}} />
        <Stack.Screen
          name="Image"
          component={ViewImageScreen}
          options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}