import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
  const { todos } = props;
  console.log(todos.length);
  return (
    <View style={style.box}>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      <TodoItem />
    </View>
  );
};

const style = StyleSheet.create({
  box: {
    paddingHorizontal: 16
  }
});
