import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { setKitchenView } from '../../actions';

class KitchenView extends Component {
  componentDidMount() {
    this.props.setKitchenView(true);
  };

  componentWillUnmount() {
    this.props.setKitchenView(false);
  };

  render() {
    console.log('kitchen view: ', this.props.deviceInfo);
    return (
      <View style={styles.container}>
        <Text>KitchenView</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps({ deviceInfo }) {
  return {
    deviceInfo
  }
};

export default connect(null, { setKitchenView })(KitchenView);
