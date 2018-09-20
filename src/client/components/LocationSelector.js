import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from 'react-redux';

class LocationSelector extends Component {
  render() {
    return (
      <ModalDropdown
        options={['Orange', 'Aliso Viejo']}
        defaultValue='Orange'
        defaultIndex={0}
        style={{ position: 'absolute', right: 30 }}
        textStyle={{ color: '#fff', textAlign: 'center' }}
        onSelect={(index, value) => console.log(index)}
      />
    );
  }
}

export default connect()(LocationSelector);
