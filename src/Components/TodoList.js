import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
  const { todos, onChangeTodoStatus } = props;

  return (
    <SafeAreaView style={style.box}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem todo={item} onChangeTodoStatus={onChangeTodoStatus} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  box: {
    paddingHorizontal: 16,
    marginBottom: 16,
  }
});
