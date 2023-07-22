const express = require('express');
const app = express();
const morgan = require('morgan');
const todoRouter = require('./routes/todos');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/todos', todoRouter);


module.exports = app;