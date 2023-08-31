const BaseModel = require('./BaseModel');

class AnswerModel extends BaseModel {
  constructor() {
    super('answer');
  }

  async getAllAnswers() {
    return this.db.query(`SELECT id, text, question_id FROM answer`);
  }

  async getAnswersByQuestionId(questionId) {
    return this.db.query(
      `SELECT id, text, question_id FROM answer WHERE question_id = ?`,
      [questionId]
    );
  }
}

module.exports = AnswerModel;
