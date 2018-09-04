import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View>
      <View style={styles.navbar}>
        <Text>Scratch</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.button}>Kitchen View</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button}>Customer View</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4ecdc4',
    color: 'white',
    height: 60,
    lineHeight: 60,
    marginTop: 10,
    textAlign: 'center',
    width: 300
  },
  navbar: {
    backgroundColor: '#eeeeee',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  }
});

export default Home;
