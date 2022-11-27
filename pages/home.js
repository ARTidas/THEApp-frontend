import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../App.style.js';

export const HomePage = ({ navigation }) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        title="Bejelentkezés"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Bejelentkezés')
        }
      >
        <Text style={styles.navigation}>Bejelentkezés</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Regisztráció"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Regisztráció')
        }
      >
        <Text style={styles.navigation}>Regisztráció</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Elfelejtett jelszó"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Elfelejtett jelszó')
        }
      >
        <Text style={styles.navigation}>Elfelejtett jelszó</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Profil"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Profil')
        }
      >
        <Text style={styles.navigation}>Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Teszt"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Teszt')
        }
      >
        <Text style={styles.navigation}>Teszt</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};
