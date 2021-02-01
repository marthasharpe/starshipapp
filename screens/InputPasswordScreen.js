import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {FAB, TextInput, Title} from 'react-native-paper';

const InputPasswordScreen = ({route, navigation}) => {
  const {firstName, lastName, email} = route.params;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match!");
      return;
    }
    console.table({firstName, lastName, email, password});
    Alert.alert("You're done!");
    navigation.navigate('Welcome');
  };

  useEffect(() => {
    if (password && confirmPassword) setButtonDisabled(false);
  }, [password, confirmPassword]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Password</Title>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            label="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <FAB
            mode="contained"
            style={styles.FAB}
            onPress={handleSubmit}
            disabled={buttonDisabled}
          />
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

export default InputPasswordScreen;
