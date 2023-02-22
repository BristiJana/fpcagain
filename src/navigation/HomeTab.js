import {View, Text} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screen/Home/Home';
import Profile from '../screen/Home/Profile';
const Stack = createStackNavigator();
const navigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const Tab = createBottomTabNavigator();
const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={navigationOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={30} color={focused ? '#000' : '#ddd'} />
          ),
        }}
        component={Home}
        name="Home"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="account" size={30} color={focused ? '#000' : '#ddd'} />
          ),
        }}
        component={Profile}
        name="Profile"
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
