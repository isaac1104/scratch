import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './Form/LoginForm';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to Scratch!</Text>
        <LoginForm />
      </View>
    );
  }
}

export default Login;
