import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import InputNameScreen from './screens/InputNameScreen';
import InputEmailScreen from './screens/InputEmailScreen';
import InputPasswordScreen from './screens/InputPasswordScreen';

const AuthStack = createStackNavigator();
const RegistrationStack = createStackNavigator();

const RegistrationNavigator = () => {
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen name="Name" component={InputNameScreen} />
      <RegistrationStack.Screen name="Email" component={InputEmailScreen} />
      <RegistrationStack.Screen
        name="Password"
        component={InputPasswordScreen}
      />
    </RegistrationStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator mode="modal">
        <AuthStack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Registration"
          component={RegistrationNavigator}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
