const BaseController = require('./BaseController');
const { QuestionModel } = require('../models');

class QuestionController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new QuestionModel();
  }

  async getAllQuestionsWithAnswers() {
    try {
      const [response] = await this.model.getAllQuestionsWithAnswers();

      const allQuestions = response.map((question) => {
        return {
          questionId: question.questionId,
          questionText: question.questionText,
          questionCategoryId: question.questionCategoryId,
          answers: question.answers,
        };
      });
      this.res.status(200).json({
        allQuestions,
      });
    } catch (err) {
      this.res.status(500).json({ message: err.message });
    }
  }
}

module.exports = QuestionController;
