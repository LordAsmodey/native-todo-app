import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={style.header}>
      <Text>Todo List</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header : {
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#46adf6',
    paddingBottom: 8,
    marginBottom: 16,
  }
});
