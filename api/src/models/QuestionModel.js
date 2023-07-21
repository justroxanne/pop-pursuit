const BaseModel = require('./BaseModel');

class QuestionModel extends BaseModel {
  constructor(db) {
    super('question', db);
  }

  async getQuestionWithAnswers(id) {
    return this.db.query(
      `SELECT question.*, answer.* FROM question INNER JOIN answer ON question.id = answer.question_id WHERE question.id = ?`,
      [id]
    );
  }

  async getQuestionByCategory(categoryName) {
    return this.db.query(
      `SELECT * FROM question AS q INNER JOIN category AS c ON q.category_id = c.id WHERE c.name = ?`,
      [categoryName]
    );
  }
}

module.exports = QuestionModel;
