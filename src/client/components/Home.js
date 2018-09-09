import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Modal } from 'react-native-paper';
import TableNumberForm from './Form/TableNumberForm';

class Home extends Component {
  state = {
    visible: false
  };

  showModal() {
    this.setState({ visible: true });
  };

  hideModal() {
    this.setState({ visible: false });
  };

  render() {
    const { history: { push } } = this.props;

    return (
      <View>
        <Button
          onPress={() => push('/kitchen')}
          style={styles.button}
          mode='contained'
          icon='restaurant'
        >
          <Text style={styles.text}>Kitchen View</Text>
        </Button>
        <Button
          onPress={() => this.showModal()}
          style={styles.button}
          mode='contained'
          icon='person'
        >
          <Text style={styles.text}>Customer View</Text>
        </Button>
        <Button
          onPress={() => push('/setting')}
          style={styles.button}
          mode='contained'
          icon='settings'
        >
          <Text style={styles.text}>Setting</Text>
        </Button>
        <Modal visible={this.state.visible}>
          <View style={styles.container}>
            <TableNumberForm />
            <Button
              onPress={() => this.hideModal()}
              mode='contained'
              icon='clear'
              style={{ marginTop: 10, backgroundColor: 'tomato' }}
            >
              Close
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 400,
    height: 60,
    marginTop: 10
  },
  text: {
    lineHeight: 40
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home;
