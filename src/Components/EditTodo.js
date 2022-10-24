import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { THEME } from '../theme/theme';

export const EditTodo = () => {
  return (
    <View style={styles.box}>
      <Text>EDIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: THEME.COLOR_ORANGE,
    borderRadius: 8,
    height: 50,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
