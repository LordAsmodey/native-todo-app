import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { DeleteTodo } from './DeleteTodo';
import { EditTodo } from './EditTodo';

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
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={DeleteTodo}
        renderLeftActions={EditTodo}
      >
        <View>
          <TouchableHighlight
            style={styles.box}
            activeOpacity={0.3}
            underlayColor="#46adf6"
            onPress={() => onChangeTodoStatus(todo.id)}>
            <Text style={[styles.text, completedStyles]}>{todo.title}</Text>
          </TouchableHighlight>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 40,
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
