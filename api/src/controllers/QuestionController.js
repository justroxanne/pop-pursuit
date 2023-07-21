const BaseController = require('./BaseController');
const { QuestionModel } = require('../models');

class QuestionController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new QuestionModel();
  }

  async getQuestionWithAnswers() {
    const { id } = req.params;
    try {
      const [question] = await this.model.getQuestionWithAnswers(id);
      if (!question) {
        return this.res.status(404).json({ message: 'Question not found' });
      }
      return this.res.status(200).json(question);
    } catch (err) {
      return this.res.status(500).json({ message: err.message });
    }
  }
}

module.exports = QuestionController;
