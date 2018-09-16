import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from './Form/LoginForm';
import Expo from 'expo';

class Login extends Component {
  componentDidMount() {
    console.log(Expo.Constants.deviceId);
  };

  render() {
    return (
      <View>
        <LoginForm />
      </View>
    );
  }
}

export default Login;
