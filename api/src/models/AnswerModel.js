const BaseModel = require('./BaseModel');

class AnswerModel extends BaseModel {
  constructor() {
    super('answer');
  }

  async getAnswersByQuestionId(questionId) {
    return this.db.query(`SELECT * FROM answer WHERE question_id = ?`, [
      questionId,
    ]);
  }
}

module.exports = AnswerModel;
