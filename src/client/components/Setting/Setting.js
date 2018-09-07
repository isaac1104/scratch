import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';

class Setting extends Component {
  render() {
    return (
      <View>
        <Button
          style={styles.button}
          mode='contained'
          >
          <Text style={styles.text}>Update Account Info</Text>
        </Button>
        <Button
          style={styles.button}
          mode='contained'
          >
          <Text style={styles.text}>Add Menu</Text>
        </Button>
        <Button
          style={styles.button}
          mode='contained'
          >
          <Text style={styles.text}>View Orders</Text>
        </Button>
        <Button
          style={styles.button}
          mode='contained'
          >
          <Text style={styles.text}>Log Out</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 500,
    height: 60,
    marginTop: 10
  },
  text: {
    lineHeight: 40
  }
});

export default Setting;
