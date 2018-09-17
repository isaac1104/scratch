import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Menus from './Menus';
import { connect } from 'react-redux';

class CustomerView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Menus />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default connect()(CustomerView);
