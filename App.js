import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/Components/Header';
import { AddTodoForm } from './src/Components/AddTodoForm';
import { TodoList } from './src/Components/TodoList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddTodoForm/>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
