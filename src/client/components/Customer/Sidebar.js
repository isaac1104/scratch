import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Sidebar extends Component {
  render() {
    const style = {
      sidebar: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: this.props.isOpen ? '20%' : 0,
        backgroundColor: '#eeeeee'
      }
    };

    return (
      <View style={style.sidebar}>
        <Text>Sidebar</Text>
      </View>
    );
  }
};

export default Sidebar;
