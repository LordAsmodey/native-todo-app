import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const TodoItem = (props) => {
  const { todo } = props;

  return (
    <View style={style.box}>
      <Text style={style.text}>{todo?.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  box: {},
  text: {},
});
