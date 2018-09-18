import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Menus from './Menus';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';

class CustomerView extends Component {
  state = {
    isOpen: false
  };

  render() {
    const style = {
      sidebar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: this.state.isOpen ? '20%' : 0,
        backgroundColor: '#eeeeee'
      }
    };

    return (
      <View style={styles.container}>
        <Menus />
        <View style={style.sidebar}>
          <Text>Sidebar</Text>
        </View>
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
