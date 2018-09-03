import React, { Component } from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Login from './Login';

class Main extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      </NativeRouter>
    );
  }
}

export default Main;
