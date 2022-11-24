import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from '../App.style.js';

export const RegisterPage = ({ navigation, route }) => {
  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Név"
        onChangeText={(user_name) => setUserName(user_name)}
      />
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
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        enablesReturnKeyAutomatically
        placeholder="Jelszó újra"
        autoComplete="password"
        onChangeText={(user_password_again) => setUserPasswordAgain(user_password_again)}
      />
      <TouchableOpacity style={styles.buttonInput}>
        <Text>Regisztráció</Text>
      </TouchableOpacity>
    </View>
  );
};
