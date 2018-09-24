import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { withRouter } from 'react-router-native';
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
          onPress={() => this.props.signout(() => {
            this.props.history.push('/')
          })}
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
    width: 600,
    height: 80,
    marginBottom: 30
  },
  text: {
    lineHeight: 60,
    fontSize: 18
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});

export default withRouter(connect(null, { signout })(Setting));
