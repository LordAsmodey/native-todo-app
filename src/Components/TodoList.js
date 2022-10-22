import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
  const { todos, onChangeTodoStatus, onDeleteTodo } = props;

  return (
    <FlatList
      style={styles.box}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          todo={item}
          onChangeTodoStatus={onChangeTodoStatus}
          onDeleteTodo={onDeleteTodo}
        />
      )}
      keyExtractor={item => String(item.id)}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 16,
    marginBottom: 16,
  }
});
