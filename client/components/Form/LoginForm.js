import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';

class LoginForm extends Component {
  formSubmit = values => {
    alert(`${values.username} - ${values.password}`);
  };

  render() {
    const { handleSubmit } = this.props;
    const style = {
      button: {
        backgroundColor: '#4ecdc4',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 200
      },
    };

    return (
      <View>
        <Field
          name='username'
          component={FormField}
          label='Username'
        />
        <Field
          name='password'
          component={FormField}
          label='Password'
        />
        <TouchableOpacity onPress={handleSubmit(this.formSubmit)}>
          <Text style={style.button}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.username) {
    errors.username = 'Username Required!'
  }
  if (!value.password) {
    errors.password = 'Password Required!'
  }
  return errors;
};

export default withRouter(
  reduxForm({
    validate,
    form: 'value'
})(connect()(LoginForm)));
