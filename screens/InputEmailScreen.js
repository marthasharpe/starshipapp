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

const InputEmailScreen = ({route, navigation}) => {
  const {firstName, lastName} = route.params;
  const [email, setEmail] = useState('');

  const handleNext = () => {
    navigation.navigate('Password', {firstName, lastName, email});
  };

  const handleConfirmEmail = () => {
    Alert.alert('Confirm your email', `${email}`, [
      {text: 'Change', style: 'cancel'},
      {text: 'Looks Good', onPress: handleNext},
    ]);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Email</Title>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <FAB mode="contained" style={styles.FAB} onPress={handleConfirmEmail}>
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

export default InputEmailScreen;
