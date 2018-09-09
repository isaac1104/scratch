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
          name='username'
          component={FormField}
          label='Username'
          secure={false}
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
  if (!value.username) {
    errors.username = 'Username Required!'
  }
  return errors;
};

export default reduxForm({
    validate,
    form: 'value'
})(connect()(LoginForm));
