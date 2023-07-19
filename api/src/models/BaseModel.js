const { db } = require('../config');

class BaseModel {
  table;
  db;

  constructor(table) {
    this.db = db;
    this.table = table;
  }

  getAll() {
    return this.db.query(`SELECT * FROM ${this.table}`);
  }

  getOne(params) {
    const paramsKey = Object.keys(params).join();
    const paramsValue = Object.values(params).join();

    return this.db.query(`SELECT * FROM ${this.table} WHERE ${paramsKey} = ?`, [
      paramsValue,
    ]);
  }
}

module.exports = BaseModel;
