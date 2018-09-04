import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { withRouter } from 'react-router-native';

class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Scratch</Text>
        <TouchableOpacity onPress={() => this.props.history.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
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
}

export default withRouter(Navbar);
