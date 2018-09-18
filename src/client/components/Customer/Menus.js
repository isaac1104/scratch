import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

class Menus extends Component {
  state = {
    currentItem: 'burgers'
  };

  renderMainMenus() {
    const { currentItem } = this.state;
    if (currentItem === 'burgers') {
      return <Text>Burger</Text>
    } else if (currentItem === 'starters') {
      return <Text>Starters</Text>
    } else if (currentItem === 'combos') {
      return <Text>Combos</Text>
    } else if (currentItem === 'boxes') {
      return <Text>Boxes</Text>
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
    backgroundColor: '#eeeeee'
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
