import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Scratch</Text>
      </View>
      <View>
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
    width: '100%',
    height: 30
  },
  navbarText: {
    textAlign: 'center',
    lineHeight: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
