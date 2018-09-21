import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';
import LoginForm from './Form/LoginForm';
import { Constants, SecureStore } from 'expo';
import { connect } from 'react-redux';

class Login extends Component {
  // componentDidMount() {
  //   this.checkIfLoggedIn();
  // };
  //
  // async checkIfLoggedIn() {
  //   const token = await SecureStore.getItemAsync('token');
  //   if (token) {
  //     this.props.history.push('/home');
  //   }
  // };

  render() {
    console.log(this.props);
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

function mapStateToProps({ deviceInfo, user }) {
  return {
    deviceInfo,
    user
  }
};

export default withRouter(connect(mapStateToProps, null)(Login));
