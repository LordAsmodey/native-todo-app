import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const EditTodo = () => {
  return (
    <View style={styles.box}>
      <Text>EDIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fc9e3e',
    borderRadius: 8,
    height: 50,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
