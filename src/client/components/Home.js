import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';
import { Button } from 'react-native-paper';

class Home extends Component {
  render() {
    const { push } = this.props.history;

    return (
      <View>
        <Button
          onPress={() => push('/kitchen')}
          style={styles.button}
          mode='contained'
          >
          <Text style={styles.text}>Kitchen View</Text>
        </Button>
        <Button
          onPress={() => push('/customer')}
          style={styles.button}
          mode='contained'
          >
          <Text style={styles.text}>Customer View</Text>
        </Button>
        <Button
          onPress={() => push('/setting')}
          style={styles.button}
          mode='contained'
          >
          <Text style={styles.text}>Setting</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 500,
    height: 60,
    marginTop: 10
  },
  text: {
    lineHeight: 40
  }
});

export default withRouter(Home);
