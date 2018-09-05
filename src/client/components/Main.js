import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import KitchenView from './Kitchen/KitchenView';
import CustomerView from './Customer/CustomerView';
import Setting from './Setting/Setting';

class Main extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/kitchen' component={KitchenView} />
            <Route exact path='/customer' component={CustomerView} />
            <Route exact path='/setting' component={Setting} />
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
