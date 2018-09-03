import React from 'react';
import { View, Text, TextInput } from 'react-native';

const FormField = field => {
  const { meta: { touched, error } } = field;
  return (
    <View>
      <Text>{field.label}</Text>
      <TextInput
        {...field.input}
        autoComplete='off'
        style={{ backgroundColor: '#eee', width: 200, height: 20 }}
      />
      <Text style={{ color: 'red' }}>{touched ? error : ''}</Text>
    </View>
  );
};

export default FormField;
