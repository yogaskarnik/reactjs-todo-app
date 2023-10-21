/* eslint-disable no-undef */
const functions = require('firebase-functions');
const app = require('express')();
const {
  getAllTodos,
  postOneTodo,
  deleteTodo,
  editTodo,
} = require('./APIs/todos.js');
const { loginUser } = require('./APIs/users.js');

app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.delete('/todo/:todoId', deleteTodo);
app.put('/todo/:todoId', editTodo);
app.post('/login', loginUser);
app.delete('/todo/:todoId', deleteTodo);

exports.api = functions.https.onRequest(app);
