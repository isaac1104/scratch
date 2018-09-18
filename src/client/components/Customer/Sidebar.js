import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Divider } from 'react-native-paper';

class Sidebar extends Component {
  render() {
    const style = {
      sidebar: {
        position: 'absolute',
        zIndex: 99,
        right: 0,
        top: 0,
        bottom: 0,
        width: this.props.isOpen ? '20%' : 0,
        display: this.props.isOpen ? 'flex' : 'none',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eeeeee'
      }
    };

    return (
      <View style={style.sidebar}>
        <View style={styles.header}>
          <FAB
            small
            style={style.button}
            icon='add'
          />
          <FAB
            small
            style={style.button}
            icon='edit'
          />
          <FAB
            small
            style={style.button}
            icon='clear'
          />
        </View>
        <View style={styles.body}>
          <Text>Burger</Text>
          <Text>Burger</Text>
          <Text>Burger</Text>
          <Text>Burger</Text>
          <Text>Burger</Text>
        </View>
        <View style={styles.footer}>
          <Text>Total: $1,000.00</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    marginTop: 50
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Sidebar;
