import { TextInput, View, Text, StyleSheet } from 'react-native';
import { StyleVariable } from '../StyleVariables';
import { useField } from 'formik';
import React from 'react';

interface configTextfield {
  name: string;
  helperText: string;
  [x: string]: any;
  error: boolean;
}

const TextInputWrapper = ({ name, helperText, ...formik }: configTextfield) => {
  const text = formik.error || helperText;
  const [field, meta] = useField(name);

  return (
    <View style={style.inputWrapper}>
      <Text style={style.tittleText}>{text}</Text>
      <TextInput
        multiline
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        value={formik.values[name]}
        style={style.input}
      />
      <Text style={style.errorText}>
        {meta.touched || field.checked ? meta.error : null}
      </Text>
    </View>
  );
};

export default TextInputWrapper;

const style = StyleSheet.create({
  inputWrapper: {
    marginVertical: StyleVariable.margVertical,
    alignItems: 'center',
    width: '100%',
  },
  tittleText: {
    fontSize: StyleVariable.textInputTittle,
    fontWeight: 'bold',
  },
  input: {
    paddingHorizontal: StyleVariable.padding0,
    height: 90,
    borderWidth: StyleVariable.padding0,
    borderRadius: StyleVariable.padding1,
    borderColor: StyleVariable.color4,
    width: '90%',
    backgroundColor: StyleVariable.backgroundColorApp,
  },
  errorText: {
    color: 'rgb(200, 0, 0)',
    fontSize: StyleVariable.fontSize5,
  },
});

