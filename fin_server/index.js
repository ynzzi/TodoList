const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.get('/todos/search', (req, res) => {
  const { query } = req.query;
  const result = todos.filter(todo => todo.content.includes(query));
  res.send(result);
});

app.post('/todos', (req, res) => {
  const { content } = req.body;
  const newTodo = {
    id: todos.length,
    content,
    isDone: false,
  };
  todos.push(newTodo);
  res.send(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    todo.content = content;
    res.send(todo);
  } else {
    res.send({ ok: false });
  }
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.send({ ok: true });
});

app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    todo.isDone = isDone;
    res.send(todo);
  } else {
    res.send({ ok: false }); 
  }
});

app.listen(PORT)
