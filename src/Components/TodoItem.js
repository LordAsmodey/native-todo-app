import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export const TodoItem = (props) => {
  const { todo, onChangeTodoStatus } = props;

  const setCompletedStyles = () => {
    if (todo.completed) {
      return {
        opacity: 0.3,
        textDecorationLine: 'underline line-through',
      };
    }
  };

  const completedStyles = setCompletedStyles();

  return (
    <View>
      <TouchableHighlight
        style={style.box}
        activeOpacity={0.3}
        underlayColor="#46adf6"
        onPress={() => onChangeTodoStatus(todo.id)}>
        <Text style={[style.text, completedStyles]}>{todo.title}</Text>
      </TouchableHighlight>
    </View>
  );
};

const style = StyleSheet.create({
  box: {
    height: 32,
    marginBottom: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    paddingLeft: 6,
  },
});
