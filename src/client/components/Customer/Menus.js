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
              <Text style={styles.buttonText}>BURGERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentItem: 'starters'})}
            >
              <Image
                source={{uri: 'https://content.freddysusa.com/wp-content/uploads/2016/02/onion-rings.png'}}
                style={styles.image}
              />
              <Text style={styles.buttonText}>STARTERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentItem: 'combos'})}
            >
              <Image
                source={{uri: 'https://burgerbroiler.com/images/Combo1.png'}}
                style={styles.image}
              />
              <Text style={styles.buttonText}>COMBOS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentItem: 'boxes'})}
            >
              <Image
                source={{uri: 'https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png'}}
                style={styles.image}
              />
              <Text style={styles.buttonText}>BOXES</Text>
          </TouchableOpacity>
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
    backgroundColor: '#36393f',
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
    width: '100%',
    backgroundColor: '#ff4f00'
  },
  image: {
    width: 100,
    height: 60,
    position: 'absolute',
    right: 0
  }
});

export default Menus;
