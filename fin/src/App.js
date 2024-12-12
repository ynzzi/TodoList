import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import axios from 'axios';

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/todos')
      .then(response => setTodo(response.data))
      .catch(error => console.error(error));
  }, []);

  function onCreate(content) {
    axios.post('http://localhost:8080/todos', { content })
      .then(response => setTodo([response.data, ...todo]))
      .catch(error => console.error(error));
  }

  function onDelete(targetId) {
    axios.delete(`http://localhost:8080/todos/${targetId}`)
      .then(() => setTodo(todo.filter(item => item.id !== targetId)))
      .catch(error => console.error(error));
  }

  function onUpdate(targetId, newContent) {
    axios.put(`http://localhost:8080/todos/${targetId}`, { content: newContent })
      .then(response => {
        setTodo(todo.map(item => (item.id === targetId ? response.data : item)));
      })
      .catch(error => console.error(error));
  }

  function onComplete(targetId, isDone) {
    axios.patch(`http://localhost:8080/todos/${targetId}`, { isDone })
      .then(response => {
        setTodo(todo.map(item => (item.id === targetId ? response.data : item)));
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onDelete={onDelete} onUpdate={onUpdate} onComplete={onComplete} />
    </div>
  );
}

export default App;
