import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {FAB, TextInput, Title} from 'react-native-paper';

const InputNameScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    navigation.navigate('Email', {firstName, lastName});
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Name</Title>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            label="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <FAB mode="contained" style={styles.FAB} onPress={handleNext}>
            Sign Up
          </FAB>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {flex: 1},
  titleContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: 60, paddingTop: 60},
  FAB: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {bottom: 0},
});

export default InputNameScreen;
