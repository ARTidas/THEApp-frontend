import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet, ScrollView, View, Text, Image, TextInput, Button,
  Component, TouchableOpacity
} from 'react-native';
import styles from './App.style.js';
import { LoginPage } from './pages/login.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomePage = ({ navigation }) => {
  return (
    <Button
      style={styles.buttonInput}
      title="Bejelentkezés"
      onPress={() =>
        navigation.navigate('Bejelentkezés', { name: 'Jane' })
      }
    />
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={ HomePage }
          options={{ title: 'THEApp' }}
        />
        <Stack.Screen
          name="Bejelentkezés"
          component={ LoginPage }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
