import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './Form/LoginForm';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Scratch!</Text>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
