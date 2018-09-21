import React, { Component, Fragment } from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

class MenuItem extends Component {
  render() {
    return (
      <ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 80,
    backgroundColor: '#2f3136',
    marginBottom: 10,
    marginTop: 10
  },
  text: {
    textAlign: 'left',
    marginLeft: 10,
    lineHeight: 30,
    color: '#ffffff'
  }
});

export default MenuItem;
