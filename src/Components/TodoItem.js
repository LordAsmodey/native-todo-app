import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { THEME } from '../theme/theme';
import { DeleteTodo } from './DeleteTodo';
import { AppText } from './ui/AppText';

export const TodoItem = (props) => {
  const { todo, onChangeTodoStatus, onDeleteTodo } = props;

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
        onSwipeableOpen={() => onDeleteTodo(todo.id)}
      >
        <View>
          <TouchableOpacity
            style={styles.box}
            activeOpacity={0.5}
            onPress={() => onChangeTodoStatus(todo.id)}>
            <AppText style={{...styles.text, ...completedStyles}}>{todo.title}</AppText>
          </TouchableOpacity>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 50,
    marginBottom: 5,
    backgroundColor: THEME.COLOR_LIGHT_GRAY,
    borderRadius: 8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    paddingLeft: 6,
  },
});
