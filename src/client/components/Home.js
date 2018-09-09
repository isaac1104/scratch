import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';
import { Button, Modal, Portal } from 'react-native-paper';

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
    const { push } = this.props.history;

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
        <Portal>
          <Modal
            visible={this.state.visible}
            onDismiss={() => this.hideModal()}
            >
            <Text>Input Keypad here</Text>
            <Text>Touch anywhere to close</Text>
          </Modal>
        </Portal>
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
  }
});

export default withRouter(Home);
