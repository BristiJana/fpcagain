import React from 'react';
import AuthStack from './AuthStack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeTab from './HomeTab';

const rootTab = createStackNavigator();
const navigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};
const RootTab = ({navigation}) => {
  return (
    <NavigationContainer>
      <rootTab.Navigator
        // initialRouteName={logined ? 'HomeTab' : 'AuthStack'}
        screenOptions={navigationOptions}
        // tabBarOptions={tabBarOptions}
      >
        <rootTab.Screen name="AuthStack" component={AuthStack} navigation={navigation} />
        <rootTab.Screen name="HomeTab" component={HomeTab} navigation={navigation} />
      </rootTab.Navigator>
    </NavigationContainer>
  );
};

export default RootTab;
