import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Login from './Login';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          {/* <Route exact path='/' component={Login} /> */}
          <Route exact path='/' component={Home} />
        </Switch>
      </NativeRouter>
    );
  }
}

export default Main;
