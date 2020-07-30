
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import SignIn from './app/screens/SignIn';
import SignUp from './app/screens/SignUp';

export default function App() {
  const Stack = createStackNavigator();
  const config = {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    resDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        headerMode="float"
        animation="fade">
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