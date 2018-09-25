import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { saveItemType } from '../../actions';

class MenuItemType extends Component {
  state = {
    loading: false
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.saveItemType(this.props.itemType)}
      >
        <Image
          source={{ uri: this.props.image }}
          style={styles.image}
          onLoadStart={() => this.setState({ loading: true })}
          onLoadEnd={() => this.setState({ loading: false })}
        />
        {this.state.loading && <ActivityIndicator size='large' style={styles.image} color='#222222' />}
        <Text style={styles.buttonText}>{this.props.itemType.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 10,
    height: 100,
    backgroundColor: '#f7fff7'
  },
  buttonText: {
    lineHeight: 100,
    marginLeft: 20
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0
  }
});

export default connect(null, { saveItemType })(MenuItemType);
