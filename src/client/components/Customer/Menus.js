import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentItem: 'burgers'})}
            >
              <Image
                source={{uri: 'http://www.pattyburger.com/wp-content/uploads/2016/03/pic-burger.png'}}
                style={styles.image}
              />
              <Text style={styles.buttonText}>Burgers</Text>
          </TouchableOpacity>
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
    marginBottom: 10,
    height: 60,
    backgroundColor: '#f7fff7'
  },
  buttonText: {
    lineHeight: 60,
    marginLeft: 10
  },
  summaryButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  image: {
    width: 100,
    height: 60,
    position: 'absolute',
    right: 0
  }
});

export default Menus;
