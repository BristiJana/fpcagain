import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  async logOut() {
    api
      .logout(await AsyncStorage.getItem('accessToken'))
      .then(async res => {
        console.log('response', res.data);
        await AsyncStorage.getAllKeys()
          .then(keys => AsyncStorage.multiRemove(keys))
          .then(() => console.log('removeAllAsyncData'));
        this.props.navigation.navigate('Login');
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignSelf: 'center',
          margin: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            this.logOut();
          }}>
          <Text style={{fontSize: 20, color: 'red'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
