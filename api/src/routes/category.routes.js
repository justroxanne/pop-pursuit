const express = require('express');
const CategoryController = require('../controllers/CategoryController');

const categoryRouter = express.Router();

categoryRouter.get('/categories', async (req, res) => {
  new CategoryController(req, res).getAll();
});

categoryRouter.get('/categories/:id', async (req, res) => {
  new CategoryController(req, res).getOne();
});

module.exports = categoryRouter;
