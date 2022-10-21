import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const DeleteTodo = () => {
  return (
    <View style={styles.box}>
      <Text>DELETE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ff3e00',
    borderRadius: 8,
    height: 40,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
