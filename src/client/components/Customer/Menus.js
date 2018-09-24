import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';
import MenuItem from './MenuItem';

class Menus extends Component {
  state = {
    currentItem: 'burgers',
    loading: false
  };

  renderMainMenus() {
    const { currentItem } = this.state;
    if (currentItem === 'burgers') {
      return (
        <ScrollView>
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
          <MenuItem item='burgers' image='https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg' />
        </ScrollView>
      );
    } else if (currentItem === 'starters') {
      return (
        <ScrollView>
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
          <MenuItem item='starters' image='http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png' />
        </ScrollView>
      );
    } else if (currentItem === 'combos') {
      return (
        <ScrollView>
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
          <MenuItem item='combos' image='https://burgerbroiler.com/images/Combo1.png' />
        </ScrollView>
      );
    } else if (currentItem === 'boxes') {
      return (
        <ScrollView>
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
          <MenuItem item='boxes' image='https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png' />
        </ScrollView>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <View style={styles.itemCategories}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentItem: 'burgers'})}
          >
            <Image
              source={{uri: 'http://www.pattyburger.com/wp-content/uploads/2016/03/pic-burger.png'}}
              style={styles.image}
              onLoadStart={() => this.setState({ loading: true })}
              onLoadEnd={() => this.setState({ loading: false })}
            />
            {this.state.loading && <ActivityIndicator size='large' style={styles.image} color='#222222' />}
            <Text style={styles.buttonText}>BURGERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentItem: 'starters'})}
          >
            <Image
              source={{uri: 'https://content.freddysusa.com/wp-content/uploads/2016/02/onion-rings.png'}}
              style={styles.image}
              onLoadStart={() => this.setState({ loading: true })}
              onLoadEnd={() => this.setState({ loading: false })}
            />
            {this.state.loading && <ActivityIndicator size='large' style={styles.image} color='#222222' />}
            <Text style={styles.buttonText}>STARTERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentItem: 'combos'})}
          >
            <Image
              source={{uri: 'https://burgerbroiler.com/images/Combo1.png'}}
              style={styles.image}
              onLoadStart={() => this.setState({ loading: true })}
              onLoadEnd={() => this.setState({ loading: false })}
            />
            {this.state.loading && <ActivityIndicator size='large' style={styles.image} color='#222222' />}
            <Text style={styles.buttonText}>COMBOS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentItem: 'boxes'})}
          >
            <Image
              source={{uri: 'https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png'}}
              style={styles.image}
              onLoadStart={() => this.setState({ loading: true })}
              onLoadEnd={() => this.setState({ loading: false })}
            />
            {this.state.loading && <ActivityIndicator size='large' style={styles.image} color='#222222' />}
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
  itemCategories: {
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
    marginTop: 20,
    marginBottom: 10,
    height: 100,
    backgroundColor: '#f7fff7'
  },
  buttonText: {
    lineHeight: 100,
    marginLeft: 20
  },
  summaryButton: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#ff4f00'
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0
  }
});

export default Menus;
