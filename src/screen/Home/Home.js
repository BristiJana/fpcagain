import {Text, View} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Home extends Component {
  constructor() {
    super();
    this.getData();
  }

  async getData() {
    await AsyncStorage.getAllKeys().then(keys => console.log(keys));
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
