const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const questionRouter = require('./routes/question.routes');
const categoryRouter = require('./routes/category.routes');
const answerRouter = require('./routes/answer.routes');

app.use('/api', questionRouter);
app.use('/api', categoryRouter);
app.use('/api', answerRouter);

app.get('/api/*', (req, res, next) => {
  res.status(404).send({ message: "R2D2, qu'est-ce-que tu fais là ?! " });
});

module.exports = app;
