import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Components/Header';
import { AddTodoForm } from './src/Components/AddTodoForm';
import { TodoList } from './src/Components/TodoList';
import { addTodo, changeTodoById, getTodos, UserId } from './src/utiles/api';
import { Loader } from './src/Components/Loader';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNewTodoLoading, setIsNewTodoLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getTodos()
      .then(setTodos)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const addNewTodoHandler = (todoTitle) => {
    setIsNewTodoLoading(true);
    setIsError(false);
    const newTodo = {
      title: todoTitle,
      userId: UserId,
      completed: false,
    };

    addTodo(newTodo)
      .then((todo) => {
        setTodos((prev) => [...prev, todo]);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsNewTodoLoading(false));

  };

  const todoStatusToggle = (id) => {
    setIsNewTodoLoading(true);
    setIsError(false);

    const completed = !todos.find(todo => todo.id === id).completed;
    changeTodoById(id, { completed })
      .then((res) => {
        setTodos((prev) => {
          return [...prev].map(todo => {
            if (todo.id === res.id) {
              return res;
            }

            return todo;
          });
        });
      })
      .catch(() => setIsError(true))
      .finally(() => setIsNewTodoLoading(false));
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTodoForm onAddTodo={addNewTodoHandler}/>
      {isError && <Text>Something went wrong!</Text>}
      {!isLoading && !isError && todos.length > 0 && (
        <TodoList todos={todos} onChangeTodoStatus={todoStatusToggle}/>
      )}
      {(isLoading || isNewTodoLoading) && <Loader />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
