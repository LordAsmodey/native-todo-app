import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { THEME } from '../theme/theme';

export const DeleteTodo = () => {
  return (
    <View style={styles.box}>
      <Text>DELETE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: THEME.COLOR_RED,
    borderRadius: 8,
    height: 50,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
