const express = require('express');

const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

const questionRouter = require('./routes/question.routes');
const categoryRouter = require('./routes/category.routes');
const answerRouter = require('./routes/answer.routes');

app.use('/api', questionRouter);
app.use('/api', categoryRouter);
app.use('/api', answerRouter);

module.exports = app;
