import TodoPostList from '../components/TodoListPageComponents/TodoPostList';
import { StyleVariable } from '../components/StyleVariables';
import TodoService from '../servise/TodoService';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'react-query';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function TodoListPage({ navigation }: any) {
  const loadScene = () => {
    navigation.navigate('TodoAddPage');
  };

  const {
    isLoading,
    data,
    error,
  } = useQuery( 'todoList', () => TodoService.getAllToDos());

  if (isLoading) {
    return (
      <View>
        <Text style={styles.text}>Loading your tasks...</Text>
      </View>
    );
  };

  if (error) {
    return (
      <View>
        <Text style={styles.text}>Something went wrong</Text>
      </View>);
  };

  return (
    <View style={styles.container}>
      <TodoPostList
        data={data}
      />
      <TouchableOpacity
        onPress={loadScene}
        style={styles.touchableOpacity}>
        <Ionicons name="md-add-circle" size={70} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  touchableOpacity: {
    position: 'absolute',
    right: 6,
    bottom: 3,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: StyleVariable.fontSize3,
  },
});
