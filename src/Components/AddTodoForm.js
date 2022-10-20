import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export const AddTodoForm = (props) => {
  const { onAddTodo } = props;
  const [todoTitle, setTodoTitle] = useState('');

  const addTodoHandler = () => {
    onAddTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <View style={style.wrapper}>
      <TextInput
        style={style.textInput}
        value={todoTitle}
        onChangeText={(value) => setTodoTitle(value)}
        placeholder="Input todo title"
      />
      <Button
        onPress={addTodoHandler}
        title="Add todo"
      />
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  textInput: {
    width: '60%',
    borderBottomWidth: 1,
    borderColor: '#c5c5c5',
    fontSize: 16,

  },
});
