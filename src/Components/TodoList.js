import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  return (
    <View style={style.box}>
      <TodoItem />
    </View>
  );
};

const style = StyleSheet.create({
  box: {}
});
