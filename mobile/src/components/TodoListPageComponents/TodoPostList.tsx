import { StyleSheet, FlatList } from 'react-native';
import { StyleVariable } from '../StyleVariables';
import TodoPostListItem from './TodoPostListItem';
import React from 'react';

interface Idata {
  data: Array<{
  _id: string;
  tittle: string;
  text: string;
  public: boolean;
  completed: boolean;
  date: string;
  }>;
}

export default function TodoPostList({ data }: Idata) {
  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={({ item }) => <TodoPostListItem
        item={item} />}
      keyExtractor={(item, _id) => _id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    height: '100%',
    padding: StyleVariable.padding0,
  },
});
