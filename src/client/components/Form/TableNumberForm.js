import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { Button } from 'react-native-paper';

class LoginForm extends Component {
  formSubmit = values => {
    console.log(values);
    // this.props.history.push('/customer');
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <View>
        <Field
          name='tableNumber'
          component={FormField}
          label='Table Number'
          mode='flat'
          secure={false}
          keyboardType='number-pad'
        />
        <Button
          icon='check-circle'
          mode='contained'
          style={styles.button}
          onPress={handleSubmit(this.formSubmit)}
        >
          Confirm
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
});

function validate(value) {
  const errors = {};
  if (!value.tableNumber) {
    errors.tableNumber = 'Table Number Required!'
  }
  return errors;
};

export default reduxForm({
    validate,
    form: 'value'
})(connect()(LoginForm));
