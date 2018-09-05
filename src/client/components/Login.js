import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './Form/LoginForm';

class Login extends Component {
  render() {
    return (
      <View>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginBottom: 10
  }
});

export default Login;
