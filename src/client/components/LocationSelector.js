import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from 'react-redux';
import { saveLocationId } from '../actions';

class LocationSelector extends Component {
  render() {
    const { location_id } = this.props.deviceInfo;
    console.log('device info: ', this.props.deviceInfo);
    return (
      <ModalDropdown
        options={['Orange', 'Aliso Viejo']}
        defaultValue={location_id === '0' ? 'Orange' : 'Aliso Viejo'}
        defaultIndex={location_id === '0' ? 0 : 1}
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
