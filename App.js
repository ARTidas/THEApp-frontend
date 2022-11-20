import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet, ScrollView, View, Text, Image, TextInput, Button,
  Component, TouchableOpacity
} from 'react-native';
import styles from './App.style.js';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titleText}>THEApp</Text>

      <TextInput
        style={styles.textInput}
        placeholder="E-mail cím"
        onChangeText={(user_email) => setUserEmail(user_email)}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        enablesReturnKeyAutomatically
        placeholder="Jelszó"
        autoComplete="password"
        onChangeText={(user_password) => setUserPassword(user_password)}
      />

      <TouchableOpacity style={styles.buttonInput}>
        <Text>Bejelentkezés</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link}>
        <Text>Elfelejtett jelszó?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Text>Nincs fiókod? Regisztráció</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
