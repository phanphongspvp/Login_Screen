import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
