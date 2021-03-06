import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { withRouter } from 'react-router-native';
import LoginForm from './Form/LoginForm';
import { Constants, SecureStore } from 'expo';
import { connect } from 'react-redux';

class Login extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  };

  checkIfLoggedIn() {
    const { deviceInfo: { user_id }, history: { push } } = this.props;
    if (user_id) {
      push('/home');
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <LoginForm />
        </View>
      </TouchableWithoutFeedback>
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

function mapStateToProps({ deviceInfo }) {
  return {
    deviceInfo
  }
};

export default withRouter(connect(mapStateToProps, null)(Login));
