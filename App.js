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
import { BottomPanel } from './src/Components/BottomPanel';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isMainDataLoading, setIsMainDataLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [sortType, setSortType] = useState(null);
  const [filterType, setFilterType] = useState(null);

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

  const prepareTodos = (sType, fType) => {
    let preparedTodos = todos;

    switch (fType) {
    case 'inProcess':
      preparedTodos = todos.filter(todo => !todo.completed);
      break;
    case 'done':
      preparedTodos = todos.filter(todo => todo.completed);
      break;
    default:
      preparedTodos = todos;
    }

    if (sType === 'asc') {
      return preparedTodos.sort((t1, t2) => t1.title.localeCompare(t2.title));
    }

    if (sType === 'desc') {
      return preparedTodos.sort((t1, t2) => t2.title.localeCompare(t1.title));
    }

    return preparedTodos;
  };

  const preparedTodos = prepareTodos(sortType, filterType);

  if (isMainDataLoading) {
    return <Loader />;
  }

  return (
    <LinearGradient
      colors={THEME.BG_GRADIENT}
      style={styles.container}
    >
      <Header isLoading={isLoading} />
      <AddTodoForm onAddTodo={addNewTodoHandler} />
      {isError && (
        <AppTextBold style={styles.errorText}>
          Something went wrong!
        </AppTextBold>
      )}
      {!isError && todos.length > 0 && (
        <>
          <TodoList
            todos={preparedTodos}
            onChangeTodoStatus={todoStatusToggle}
            onDeleteTodo={deleteTodoHandler}
          />
          <BottomPanel
            sortType={sortType}
            onChangeSortType={setSortType}
            filterType={filterType}
            onChangeFilterType={setFilterType}
          />
        </>
      )}
      {!isError && todos.length === 0 && (
        <EmptyTodoList />
      )}
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
