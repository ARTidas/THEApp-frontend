import React, { Component } from 'react';
import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList,
  Alert, Pressable
} from 'react-native';

import styles from '../App.style.js';

export const TestPage = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [user_email, setUserEmail] = useState('');

  function displayAlert () {
    //Alert.alert("Call done: callUserForgotPassword: ");
  }

  return (


    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="E-mail cím"
        onChangeText={(user_email) => setUserEmail(user_email)}
      />
      <TouchableOpacity
        style={styles.buttonInput}
        //onClick={TesztCall.callUserForgotPassword}
        //onPress={() => Alert.alert("Call done: callUserForgotPassword: ")}
        onPress={displayAlert}
      >
        <Text>Jelszóemlékeztető küldése</Text>
      </TouchableOpacity>
    </View>
  );


}



export default class TesztCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.callUserForgotPassword();
  }

  async callUserForgotPassword() {
    try {
      const response = await fetch(`https://theapp.artidas.hu/user/forgot_password`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_email: 'asd'
        })
      });
      const json = await response.json();
      this.setState({ data: json.status });
      Alert.alert("Call done: callUserForgotPassword: ", data.status);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={ data }
            keyExtractor={({ messages }, index) => messages}
            renderItem={({ messages }) => (
              <Text>{ messages }</Text>
            )}
          />
        )}
      </View>
    );
  }
};
