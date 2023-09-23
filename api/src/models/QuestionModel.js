const BaseModel = require('./BaseModel');

class QuestionModel extends BaseModel {
  constructor(db) {
    super('question', db);
  }

  async getAllQuestionsWithAnswers() {
    return this.db.query(
      `SELECT
        question.id AS id,
        question.text AS text,
        question.category_id AS categoryId,
      JSON_ARRAYAGG(JSON_OBJECT('id', answer.id, 'text', answer.text)) AS answers
      FROM question
      INNER JOIN answer ON question.id = answer.question_id
      GROUP BY question.id, question.text, question.category_id
      ORDER BY RAND();`
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
