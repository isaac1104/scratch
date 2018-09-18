import React, { Component, Fragment } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Expo from 'expo';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import KitchenView from './Kitchen/KitchenView';
import CustomerView from './Customer/CustomerView';
import Setting from './Setting/Setting';

Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);

class Main extends Component {
  render() {
    return (
      <NativeRouter>
        <Fragment>
          <StatusBar hidden={true} />
          <Navbar />
          <Switch>
            <Route exact path='/' component={CustomerView} />
            {/* <Route exact path='/' component={Login} /> */}
            <Route exact path='/home' component={Home} />
            <Route exact path='/kitchen' component={KitchenView} />
            {/* <Route exact path='/customer' component={CustomerView} /> */}
            <Route exact path='/setting' component={Setting} />
          </Switch>
        </Fragment>
      </NativeRouter>
    );
  }
}

export default Main;
