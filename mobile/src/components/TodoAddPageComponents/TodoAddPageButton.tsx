import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StyleVariable } from '../StyleVariables';
import React from 'react';

interface IButton {
  title: string;
  submit: () => void;
  [x: string]: any;
}

const TodoAddPageButton = ({ title, submit }: IButton) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.button} onPress={submit} >
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoAddPageButton;


const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '60%',
    backgroundColor: StyleVariable.color6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },

});
