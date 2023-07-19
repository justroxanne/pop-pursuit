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
        return res.status(404).json({ message: 'Question not found' });
      }
      return res.status(200).json(question);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = QuestionController;
