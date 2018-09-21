import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class MenuItem extends Component {
  renderItemImage() {
    const { item } = this.props;
    if (item === 'burgers') {
      return <Image source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg'}} style={styles.image} />;
    }
    if (item === 'starters') {
      return <Image source={{uri: 'http://itzzapitzza.pk/wp-content/uploads/2017/12/Wings.png'}} style={styles.image} />;
    }
    if (item === 'combos') {
      return <Image source={{uri: 'https://burgerbroiler.com/images/Combo1.png'}} style={styles.image} />;
    }
    if (item === 'boxes') {
      return <Image source={{uri: 'https://www.burgerim.com/wp-content/uploads/2015/12/Burgerim-Burger-Pack-pack.png'}} style={styles.image} />;
    }

    return <Image source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg'}} style={styles.image} />;
  };

  render() {
    return (
      <TouchableOpacity style={styles.itemBox}>
        <Text style={styles.text}>{this.props.item.toUpperCase()}</Text>
        <Text style={styles.text}>Description</Text>
        {this.renderItemImage()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemBox: {
    width: 300,
    height: 80,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    marginTop: 10,
    shadowOffset: { width: 6,  height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.7
  },
  text: {
    textAlign: 'left',
    marginLeft: 10,
    lineHeight: 30
  },
  image: {
    width: 100,
    height: 80,
    position: 'absolute',
    right: 0
  }
});

export default MenuItem;
