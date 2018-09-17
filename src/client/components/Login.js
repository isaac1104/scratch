import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from './Form/LoginForm';
import Expo from 'expo';
import { connect } from 'react-redux';
import { saveDeviceUUID } from '../actions';

class Login extends Component {
  componentDidMount() {
    const UUID = Expo.Constants.deviceId;
    this.props.saveDeviceUUID(UUID);
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(null, { saveDeviceUUID })(Login);
