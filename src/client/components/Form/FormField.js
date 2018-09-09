import React from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper'

const FormField = field => {
  const { meta: { touched, error } } = field;
  const style = {
    input: {
      width: 250,
      height: 60
    }
  };

  return (
    <View>
      <TextInput
        {...field.input}
        mode={field.mode || 'outlined'}
        label={field.label}
        style={style.input}
        secureTextEntry={field.secure}
      />
      <Text style={{ color: 'red' }}>{touched ? error : ''}</Text>
    </View>
  );
};

export default FormField;
