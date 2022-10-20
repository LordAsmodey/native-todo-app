import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export const AddTodoForm = () => {
  return (
    <View style={style.wrapper}>
      <TextInput style={style.textInput}/>
      <Button title="Add todo" />
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  textInput: {
    width: '60%',
    borderBottomWidth: 1,
    borderColor: '#c5c5c5',
    fontSize: 16,

  },
});
