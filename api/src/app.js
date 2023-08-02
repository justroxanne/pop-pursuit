const express = require('express');

const app = express();

const questionRouter = require('./routes/question.routes');
const categoryRouter = require('./routes/category.routes');
const answerRouter = require('./routes/answer.routes');

app.use('/api', questionRouter);
app.use('/api', categoryRouter);
app.use('/api', answerRouter);

app.get('/api/*', (req, res, next) => {
  res.status(404).send({ message: 'Tu fais quoi là ?' });
});

module.exports = app;
