import React from 'react';
import { View, Text, TextInput } from 'react-native';

const FormField = field => {
  const { meta: { touched, error } } = field;
  const style = {
    input: {
      width: 200,
      height: 30,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: '#eee',
      marginTop: 10
    }
  };

  return (
    <View>
      <Text>{field.label}</Text>
      <TextInput
        {...field.input}
        style={style.input}
        secureTextEntry={field.secure}
      />
      <Text style={{ color: 'red' }}>{touched ? error : ''}</Text>
    </View>
  );
};

export default FormField;