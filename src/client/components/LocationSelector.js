import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from 'react-redux';
import { saveLocationId } from '../actions';

class LocationSelector extends Component {
  render() {
    console.log('device info: ', this.props.deviceInfo);
    return (
      <ModalDropdown
        options={['Orange', 'Aliso Viejo']}
        defaultValue='Orange'
        defaultIndex={0}
        style={{ position: 'absolute', right: 30 }}
        textStyle={{ color: '#fff', textAlign: 'center' }}
        onSelect={index => this.props.saveLocationId(index)}
      />
    );
  }
}

function mapStateToProps({ deviceInfo }) {
  return {
    deviceInfo
  }
}

export default connect(mapStateToProps, { saveLocationId })(LocationSelector);
