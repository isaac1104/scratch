import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';

class Home extends Component {
  render() {
    const { push } = this.props.history;

    return (
      <View>
        <TouchableOpacity onPress={() => push('/kitchen')}>
          <Text style={styles.button}>Kitchen View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => push('/customer')}>
          <Text style={styles.button}>Customer View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => push('/setting')}>
          <Text style={styles.button}>Setting</Text>
        </TouchableOpacity>
      </View>
    );
  }
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

export default withRouter(Home);
