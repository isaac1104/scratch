import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { Button } from 'react-native-paper';
import { signin } from '../../actions';

class LoginForm extends Component {
  formSubmit = values => {
    const obj = {
      ...values,
      uuid: this.props.device_uuid
    };
    this.props.signin(obj, () => {
      this.props.history.push('/home');
    });
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
        <Field
          name='password'
          component={FormField}
          label='Password'
          secure={true}
        />
        <Button
          icon='check-circle'
          mode='contained'
          style={styles.button}
          onPress={handleSubmit(this.formSubmit)}
          >
          Login
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
  if (!value.password) {
    errors.password = 'Password Required!'
  }
  return errors;
};

function mapStateToProps({ device_uuid }) {
  return {
    device_uuid
  }
};

export default withRouter(
  reduxForm({
    validate,
    form: 'value'
})(connect(mapStateToProps, { signin })(LoginForm)));
