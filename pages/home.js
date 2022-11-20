import { Button } from 'react-native';
import styles from '../App.style.js';

export const HomePage = ({ navigation }) => {
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
