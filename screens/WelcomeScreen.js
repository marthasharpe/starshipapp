import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {Button, Title} from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {
  const handleLoginPress = () => {
    Alert.alert(
      'Dummy Button',
      "This button doesn't do anything. Try the other one!",
    );
  };

  const handleRegisterPress = () => {
    navigation.navigate('Registration');
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Welcome!</Title>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleRegisterPress}>
            Sign Up
          </Button>
          <Button
            mode="outlined"
            style={styles.button}
            onPress={handleLoginPress}>
            Log In
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: 60, paddingTop: 60},
  button: {
    borderRadius: 50,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 6,
  },
  buttonContainer: {bottom: 0},
});

export default WelcomeScreen;
