const BASE_URL = 'https://mate.academy/students-api';
export const UserId = '4215';
const getTodosUrl = `${BASE_URL}/todos?userId=${UserId}`;
const todosUrl = `${BASE_URL}/todos`;

export const getTodos = () => {
  return fetch(getTodosUrl)
    .then(res => res.json())
    .catch(error => {
      console.log('Error: ' + error);
      throw new Error();
    });
};

export const addTodo = (todo) => {
  return fetch(todosUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo),
  })
    .then(res => res.json())
    .catch(error => {
      console.log('Error: ' + error);
      throw new Error();
    });
};

export const editTodoById = (id, data) => {
  return fetch(`${todosUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(error => {
      console.log('Error: ' + error);
      throw new Error();
    });
};

export const deleteTodoById = (id) => {
  return fetch(`${todosUrl}/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch(error => {
      console.log('Error: ' + error);
      throw new Error();
    });
};
