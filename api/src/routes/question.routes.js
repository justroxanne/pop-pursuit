const express = require('express');
const QuestionController = require('../controllers/QuestionController');

const questionRouter = express.Router();

questionRouter.get('/questions', async (req, res) => {
  new QuestionController(req, res).getAll();
});

questionRouter.get('/questions/:id', async (req, res) => {
  new QuestionController(req, res).getOne();
});

questionRouter.get('/questions/:id/answers', async (req, res) => {
  new QuestionController(req, res).getQuestionWithAnswers();
});

questionRouter.get('/questions/category/:categoryName', async (req, res) => {
  new QuestionController(req, res).getQuestionByCategory();
});

module.exports = questionRouter;
