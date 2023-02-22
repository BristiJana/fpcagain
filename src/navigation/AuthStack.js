import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import ForgotPassword from '../screen/Auth/ForgotPassword';
import Register from '../screen/Auth/Register';
import Login from '../screen/Auth/Login';

const Stack = createStackNavigator();
const AuthStack = ({navigation}) => {
  // console.log("navigation --->",JSON.stringify(navigation,null,2))
  // console.log("navigation --->",navigation.navigate)
  const navigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen component={Login} name="Login" navigation={navigation} />
      <Stack.Screen
        component={Register}
        options={{headerShown: true, title: 'Registration Form'}}
        name="Register"
      />
      <Stack.Screen
        component={ForgotPassword}
        options={{headerShown: true}}
        name="ForgotPassword"
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
