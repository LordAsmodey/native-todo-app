import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { THEME } from './src/theme/theme';
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
import { AppTextBold } from './src/Components/ui/AppTextBold';
import { EmptyTodoList } from './src/Components/EmptyTodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isMainDataLoading, setIsMainDataLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  SplashScreen.preventAutoHideAsync();

  const loadFonts = () => {
    return Font.loadAsync({
      'ex2-bold': require('./assets/fonts/Exo2-Bold.ttf'),
      'ex2-regular': require('./assets/fonts/Exo2-Regular.ttf'),
    });
  };

  useEffect(() => {
    setIsError(false);

    loadFonts();
    getTodos()
      .then(setTodos)
      .catch(() => setIsError(true))
      .finally(() => {
        setTimeout(() => {
          SplashScreen.hideAsync();
          setIsMainDataLoading(false);
        }, 1000);
      });
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

  if (isMainDataLoading) {
    return <Loader />;
  }

  return (
    <LinearGradient
      colors={THEME.BG_GRADIENT}
      style={styles.container}
    >
      <Header />
      <AddTodoForm onAddTodo={addNewTodoHandler}/>
      {isError && (
        <AppTextBold style={styles.errorText}>
          Something went wrong!
        </AppTextBold>
      )}
      {!isError && todos.length > 0 && (
        <TodoList
          todos={todos}
          onChangeTodoStatus={todoStatusToggle}
          onDeleteTodo={deleteTodoHandler}
        />
      )}
      {!isError && todos.length === 0 && (
        <EmptyTodoList />
      )}
      {isLoading && <Loader />}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: THEME.COLOR_RED,
  },
});
