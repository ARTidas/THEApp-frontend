import { Text } from 'react-native';

export const LoginPage = ({ navigation, route }) => {
  return (
    <Text>Bejelentkezés: {route.params.name} LoginPage</Text>
  );
};
