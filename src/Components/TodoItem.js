import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const TodoItem = () => {
  return (
    <View style={style.box}>
      <Text style={style.text}>Some text</Text>
    </View>
  );
};

const style = StyleSheet.create({
  box: {},
  text: {},
});
