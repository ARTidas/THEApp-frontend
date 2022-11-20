import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './App.style.js';

import { HomePage } from './pages/home.js';
import { LoginPage } from './pages/login.js';
import { RegisterPage } from './pages/register.js';
import { ForgotPasswordPage } from './pages/forgot_password.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={ HomePage }
          options={{
            title: 'THEApp',
            headerStyle: {
              backgroundColor: '#ccc',
            },
            headerTintColor: '#555',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Bejelentkezés"
          component={ LoginPage }
          options={{
            title: 'Bejelentkezés',
            headerStyle: {
              backgroundColor: '#ccc',
            },
            headerTintColor: '#555',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
