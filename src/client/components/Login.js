import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from './Form/LoginForm';
import Expo from 'expo';

class Login extends Component {
  render() {
    return (
      <View>
        <LoginForm />
      </View>
    );
  }
}

export default Login;
