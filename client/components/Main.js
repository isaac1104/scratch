import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Login from './Login';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </View>
      </NativeRouter>
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

export default Main;
