import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Menus from './Menus';
import Sidebar from './Sidebar';
import { FAB } from 'react-native-paper';
import { connect } from 'react-redux';

class CustomerView extends Component {
  state = {
    isOpen: false
  };

  render() {
    console.log(this.props.deviceInfo);
    const style = {
      button: {
        position: 'absolute',
        zIndex: 100,
        right: 0,
        top: 275,
        marginRight: this.state.isOpen ? 180 : 0
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
  }
});

function mapStateToProps({ deviceInfo }) {
  return {
    deviceInfo
  }
};

export default connect(mapStateToProps, null)(CustomerView);
