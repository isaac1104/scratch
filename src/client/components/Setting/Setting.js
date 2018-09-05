import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const Setting = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.button}>Update Account Info</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button}>Add Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button}>View Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button}>Log Out</Text>
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
});

export default Setting;
