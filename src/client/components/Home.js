import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
      <View style={styles.container}>
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
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 600,
    height: 100,
    marginTop: 30
  },
  text: {
    lineHeight: 80,
    fontSize: 18
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home;
