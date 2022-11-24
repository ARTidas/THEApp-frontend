import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './App.style.js';

import { HomePage } from './pages/home.js';
import { LoginPage } from './pages/login.js';
import { RegisterPage } from './pages/register.js';
import { ForgotPasswordPage } from './pages/forgot_password.js';
import { TestPage } from './pages/test.js';

const Stack = createNativeStackNavigator();

const NavigationTheme = {
  dark: false,
  colors: {
    primary: '#ccc',
    background: '#ccc', // Not the actual background...
    card: '#ccc', // Background color of the header
    text: '#333',
    border: '#000',
    notification: '#000',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          //header: () => null,
          contentStyle: { backgroundColor: '#fff' },
        }}
      >
        <Stack.Screen
          name="HomePage"
          component={ HomePage }
          options={{
            title: 'THEApp'
          }}
        />
        <Stack.Screen
          name="Bejelentkezés"
          component={ LoginPage }
          options={{
            title: 'Bejelentkezés'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Regisztráció"
          component={ RegisterPage }
          options={{
            title: 'Regisztráció'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Elfelejtett jelszó"
          component={ ForgotPasswordPage }
          options={{
            title: 'Elfelejtett jelszó'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Teszt"
          component={ TestPage }
          options={{
            title: 'Teszt'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
