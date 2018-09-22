import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class MenuItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.itemBox}>
        <Text style={styles.text}>{this.props.item.toUpperCase()}</Text>
        <Text style={styles.text}>Description</Text>
        <Image source={{uri: this.props.image}} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemBox: {
    width: 300,
    height: 80,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    marginTop: 10,
    shadowOffset: { width: 6,  height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.7
  },
  text: {
    textAlign: 'left',
    marginLeft: 10,
    lineHeight: 30
  },
  image: {
    width: 100,
    height: 80,
    position: 'absolute',
    right: 0
  }
});

export default MenuItem;
