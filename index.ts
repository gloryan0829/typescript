import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed : boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (_id: number, _title: string, _completed: boolean) => {
  console.log(`ID : ${_id} TITLE : ${_title} COMPLETED : ${_completed}`)
};