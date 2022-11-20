import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';
import styles from '../App.style.js';

export const LoginPage = ({ navigation, route }) => {
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');

  return (
    <View style={styles.container}>
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
