import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { signout } from '../../actions';

class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          mode='contained'
          icon='update'
          >
          <Text style={styles.text}>Update Account Info</Text>
        </Button>
        <Button
          style={styles.button}
          mode='contained'
          icon='add'
          >
          <Text style={styles.text}>Add Menu</Text>
        </Button>
        <Button
          style={styles.button}
          mode='contained'
          icon='view-list'
          >
          <Text style={styles.text}>View Orders</Text>
        </Button>
        <Button
          onPress={this.props.signout()}
          style={styles.button}
          mode='contained'
          icon='clear'
          >
          <Text style={styles.text}>Log Out</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 400,
    height: 60,
    marginTop: 5
  },
  text: {
    lineHeight: 40
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});

export default connect(null, { signout })(Setting);
