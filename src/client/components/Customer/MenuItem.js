import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class MenuItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text>{this.props.item}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#ffffff'
  }
});

export default MenuItem;
