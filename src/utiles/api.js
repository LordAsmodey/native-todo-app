const BASE_URL = 'https://mate.academy/students-api';
export const UserId = '4215';
const getTodosUrl = `${BASE_URL}/todos?userId=${UserId}`;
const addTodoUrl = `${BASE_URL}/todos`;

export const getTodos = () => {
  return fetch(getTodosUrl)
    .then(res => res.json())
    .catch(error => console.log('Error: ' + error));
};

export const addTodo = (todo) => {
  return fetch(addTodoUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo),
  })
    .then(res => res.json())
    .catch(error => console.log('Error: ' + error));
};
