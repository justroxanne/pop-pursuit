const BaseController = require('./BaseController');
const { AnswerModel } = require('../models');

class AnswerController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new AnswerModel();
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
}

module.exports = AnswerController;
