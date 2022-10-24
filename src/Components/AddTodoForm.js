import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Alert } from 'react-native';
import { THEME } from '../theme/theme';

export const AddTodoForm = (props) => {
  const { onAddTodo } = props;
  const [todoTitle, setTodoTitle] = useState('');

  const pressBtnHandler = () => {
    if (todoTitle.trim().length) {
      onAddTodo(todoTitle);
      setTodoTitle('');
    } else {
      Alert.alert('You can\'t add an empty todo!');
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.textInput}
        value={todoTitle}
        onChangeText={setTodoTitle}
        placeholder="Input todo title"
        autoCorrect={false}

      />
      <Button
        onPress={pressBtnHandler}
        title="Add todo"
        color={THEME.COLOR_ORANGE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  textInput: {
    width: '65%',
    borderBottomWidth: 1,
    borderColor: THEME.COLOR_DARK_GRAY,
    fontSize: 16,

  },
});
