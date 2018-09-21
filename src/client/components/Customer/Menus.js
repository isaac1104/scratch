import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import MenuItem from './MenuItem';

class Menus extends Component {
  state = {
    currentItem: 'burgers'
  };

  renderMainMenus() {
    const { currentItem } = this.state;
    if (currentItem === 'burgers') {
      return <MenuItem item='Burgers' />
    } else if (currentItem === 'starters') {
      return <MenuItem item='Starters' />
    } else if (currentItem === 'combos') {
      return <MenuItem item='Combos' />
    } else if (currentItem === 'boxes') {
      return <MenuItem item='Boxes' />
    }
  };

  render() {
    return (
      <Fragment>
        <View style={styles.sidemenu}>
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
          {this.renderMainMenus()}
        </View>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  sidemenu: {
    width: '30%',
    backgroundColor: '#eeeeee',
    paddingLeft: 10,
    paddingRight: 10
  },
  menus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    backgroundColor: '#f7fff7'
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
