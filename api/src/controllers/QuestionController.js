const BaseController = require('./BaseController');
const { QuestionModel } = require('../models');

class QuestionController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new QuestionModel();
  }

  async getAllQuestionsWithAnswers() {
    try {
      const [questions] = await this.model.getAllQuestionsWithAnswers();

      return this.res.status(200).json(questions);
    } catch (err) {
      this.res.status(500).json({ message: err.message });
    }
  }
}

module.exports = QuestionController;
