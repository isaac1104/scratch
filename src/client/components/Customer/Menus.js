import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

class Menus extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.sidebar}>
          <Button
            style={styles.button}
            mode='contained'
          >
            Burgers
          </Button>
          <Button
            style={styles.button}
            mode='contained'
          >
            Starters
          </Button>
          <Button
            style={styles.button}
            mode='contained'
          >
            Combos
          </Button>
          <Button
            style={styles.button}
            mode='contained'
          >
            Boxes
          </Button>
          <Button
            style={styles.summaryButton}
            mode='contained'
          >
            Order Summary
          </Button>
        </View>
        <View style={styles.menus}>
          <Text>Menu</Text>
        </View>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  sidebar: {
    width: '30%',
    backgroundColor: 'powderblue'
  },
  menus: {
    width: '70%',
    backgroundColor: 'tomato'
  },
  button: {
    marginTop: 10,
    height: 50
  },
  summaryButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});

export default Menus;
