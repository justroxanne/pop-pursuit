const BaseController = require('./BaseController');
const { AnswerModel } = require('../models');

class AnswerController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new AnswerModel();
  }

  async getAllAnswers() {
    try {
      const [answers] = await this.model.getAllAnswers();
      return this.res.status(200).json(answers);
    } catch (err) {
      return this.res.status(500).json({ message: err.message });
    }
  }

  async getAnswersByQuestionId() {
    const { id } = this.req.params;
    try {
      const [answers] = await this.model.getAnswersByQuestionId(id);
      if (!answers) {
        return this.res.status(404).json({ message: 'Answers not found' });
      }
      return this.res.status(200).json(answers);
    } catch (err) {
      return this.res.status(500).json({ message: err.message });
    }
  }

  async verifyAnswer() {
    const { id } = this.req.params;
    try {
      const [selectedAnswer] = await this.model.getOne({ id });
      if (!selectedAnswer) {
        return this.res.status(404).json({ message: 'Answer not found' });
      }
      if (selectedAnswer[0].is_good_answer) {
        return this.res.status(200).json({ isCorrect: true });
      } else {
        return this.res.status(200).json({ isCorrect: false });
      }
    } catch (err) {
      return this.res.status(500).json({ message: err.message });
    }
  }
}

module.exports = AnswerController;
