import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class MenuItem extends Component {
  render() {
    return (
      <Fragment>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#2f3136',
    marginBottom: 10
  },
  text: {
    textAlign: 'right',
    lineHeight: 50,
    color: '#ffffff'
  }
});

export default MenuItem;
