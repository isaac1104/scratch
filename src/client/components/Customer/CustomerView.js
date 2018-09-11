import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { connect } from 'react-redux';

class CustomerView extends Component {
  render() {
    return (
      <View>
        <Text>CustomerView</Text>
        <Text>Table Number is: {this.props.tableNumber}</Text>
      </View>
    );
  }
};

function mapStateToProps({ tableNumber }) {
  return {
    tableNumber
  }
};

export default connect(mapStateToProps, null)(CustomerView);
