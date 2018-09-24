import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Card, Title } from 'react-native-paper';

class MenuItem extends Component {
  state = {
    loading: false
  };

  render() {
    return (
      <Card style={styles.itemBox} elevation={5}>
        <Card.Content>
          <Title style={styles.text}>{this.props.item.toUpperCase()}</Title>
          <Text style={styles.text}>Description</Text>
        </Card.Content>
        <Card.Cover
          style={styles.image}
          source={{ uri: this.props.image }}
          onLoadStart={() => this.setState({ loading: true })}
          onLoadEnd={() => this.setState({ loading: false })}
        />
        {this.state.loading && <ActivityIndicator size='large' style={styles.image} color='#222222' />}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  itemBox: {
    width: 300,
    height: 80,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    marginTop: 10
  },
  text: {
    textAlign: 'left',
    marginLeft: 10,
    lineHeight: 30
  },
  image: {
    width: 100,
    height: 80,
    position: 'absolute',
    right: 0,
    backgroundColor: '#ffffff'
  }
});

export default MenuItem;
