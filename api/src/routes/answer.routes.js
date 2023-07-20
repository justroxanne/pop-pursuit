const express = require('express');
const AnswerController = require('../controllers/AnswerController');

const answerRouter = express.Router();

answerRouter.get('/answers', async (req, res) => {
  new AnswerController(req, res).getAll();
});

answerRouter.get('/answers/:id', async (req, res) => {
  new AnswerController(req, res).getOne();
});

answerRouter.get('/answers/question/:id', async (req, res) => {
  new AnswerController(req, res).getAnswersByQuestionId();
});

module.exports = answerRouter;
