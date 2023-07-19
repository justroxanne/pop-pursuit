const BaseController = require('./BaseController');
const { AnswerModel } = require('../models');

class AnswerController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new AnswerModel();
  }
}

module.exports = AnswerController;
