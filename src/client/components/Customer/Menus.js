import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

class Menus extends Component {
  state = {
    currentItem: ''
  };

  render() {
    return (
      <Fragment>
        <View style={styles.sidebar}>
          <Button
            style={styles.button}
            mode='contained'
            onPress={() => this.setState({ currentItem: 'burgers'})}
          >
            <Text style={styles.buttonText}>Burgers</Text>
          </Button>
          <Button
            style={styles.button}
            mode='contained'
            onPress={() => this.setState({ currentItem: 'starters'})}
          >
            <Text style={styles.buttonText}>Starters</Text>
          </Button>
          <Button
            style={styles.button}
            mode='contained'
            onPress={() => this.setState({ currentItem: 'combos'})}
          >
            <Text style={styles.buttonText}>Combos</Text>
          </Button>
          <Button
            style={styles.button}
            mode='contained'
            onPress={() => this.setState({ currentItem: 'boxes'})}
          >
            <Text style={styles.buttonText}>Boxes</Text>
          </Button>
          <Button
            style={styles.summaryButton}
            mode='contained'
          >
            <Text>Order Summary</Text>
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
  buttonText: {
    lineHeight: 30
  },
  summaryButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});

export default Menus;