import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#0dc7ff',
    paddingBottom: 8,
    marginBottom: 16,
  }
});
