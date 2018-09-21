import React, { Component, Fragment } from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

class MenuItem extends Component {
  render() {
    return (
      <ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
          <Image
            source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg'}}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
          <Image
            source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg'}}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
          <Image
            source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg'}}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
          <Image
            source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg'}}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
          <Image
            source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg'}}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{this.props.item}</Text>
          <Text style={styles.text}>Description</Text>
          <Image
            source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg'}}
            style={styles.image}
          />
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
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0
  }
});

export default MenuItem;
