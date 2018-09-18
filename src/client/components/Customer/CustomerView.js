import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Menus from './Menus';
import Sidebar from './Sidebar';
import { FAB } from 'react-native-paper';

class CustomerView extends Component {
  state = {
    isOpen: false
  };

  render() {
    const style = {
      button: {
        position: 'absolute',
        right: 0,
        marginRight: this.state.isOpen ? 110 : 0
      }
    };

    return (
      <View style={styles.container}>
        <Menus />
        <View style={styles.buttonContainer}>
          <FAB
            onPress={() => this.setState({ isOpen: !this.state.isOpen })}
            small
            style={style.button}
            icon={this.state.isOpen ? 'chevron-right' : 'chevron-left'}
          />
        </View>
        <Sidebar isOpen={this.state.isOpen} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  }
});

export default CustomerView;
