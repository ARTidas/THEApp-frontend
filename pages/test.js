import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from '../App.style.js';

export const TestPage = ({ navigation, route }) => {
  const [user_email, setUserEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="E-mail cím"
        onChangeText={(user_email) => setUserEmail(user_email)}
      />
      <TouchableOpacity style={styles.buttonInput}>
        <Text>Jelszóemlékeztető küldése</Text>
      </TouchableOpacity>
    </View>
  );
};
