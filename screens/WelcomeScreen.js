import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {Button} from 'react-native-paper';

const WelcomeScreen = () => {
  const handleLoginPress = () => {
    Alert.alert(
      'Dummy Button',
      "You found a dummy button! It doesn't actually do anything. Try the other one!",
    );
  };

  const handleRegisterPress = () => {
    Alert.alert('Register');
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Button mode="contained" onPress={handleLoginPress}>
          Login
        </Button>
        <Button mode="contained" onPress={handleRegisterPress}>
          Register
        </Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
