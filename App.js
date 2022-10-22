import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Header } from './src/Components/Header';
import { AddTodoForm } from './src/Components/AddTodoForm';
import { TodoList } from './src/Components/TodoList';
import {
  addTodo,
  deleteTodoById,
  editTodoById,
  getTodos,
  UserId
} from './src/utiles/api';
import { Loader } from './src/Components/Loader';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isMainDataLoading, setIsMainDataLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsMainDataLoading(true);
    setIsError(false);
    getTodos()
      .then(setTodos)
      .catch(() => setIsError(true))
      .finally(() => setIsMainDataLoading(false));
  }, []);

  const addNewTodoHandler = useCallback((todoTitle) => {
    setIsLoading(true);
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
      .finally(() => setIsLoading(false));

  }, []);

  const todoStatusToggle = (id) => {
    setIsLoading(true);
    setIsError(false);

    const completed = !todos.find(todo => todo.id === id).completed;

    editTodoById(id, { completed })
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
      .finally(() => setIsLoading(false));
  };

  const deleteTodoHandler = (id) => {
    setIsLoading(true);
    deleteTodoById(id)
      .then(() => setTodos((prev) => [...prev].filter(todo => todo.id !== id)))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddTodoForm onAddTodo={addNewTodoHandler}/>
      {isError && (
        <Text style={styles.errorText}>
          Something went wrong!
        </Text>
      )}
      {!isMainDataLoading && !isError && todos.length > 0 && (
        <TodoList
          todos={todos}
          onChangeTodoStatus={todoStatusToggle}
          onDeleteTodo={deleteTodoHandler}
        />
      )}
      {(isMainDataLoading || isLoading) && <Loader />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
  },
});
