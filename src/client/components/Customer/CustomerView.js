import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Menus from './Menus';
import { connect } from 'react-redux';
import { FAB } from 'react-native-paper';

class CustomerView extends Component {
  state = {
    isOpen: false
  };

  render() {
    const style = {
      sidebar: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: this.state.isOpen ? '20%' : 0,
        backgroundColor: '#eeeeee'
      },
      button: {
        position: 'absolute',
        right: 0,
        marginRight: this.state.isOpen ? '20%' : 0
      }
    };

    return (
      <View style={styles.container}>
        <Menus />
        <FAB
          onPress={() => this.setState({ isOpen: !this.state.isOpen })}
          small
          style={style.button}
          icon={this.state.isOpen ? 'chevron-right' : 'chevron-left'}
        />
        <View style={style.sidebar}>
          <Text>Sidebar</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default connect()(CustomerView);
