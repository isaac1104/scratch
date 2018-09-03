import React from 'react';
import { View, Text, TextInput } from 'react-native';

const FormField = field => {
  const { meta: { touched, error } } = field;
  return (
    <View>
      <TextInput
        {...field.input}
        label={field.label}
        type={field.type}
        autoComplete='off'
      />
      <Text style={{ color: 'red' }}>{touched ? error : ''}</Text>
    </View>
  );
};

export default FormField;
