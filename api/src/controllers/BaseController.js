class BaseController {
  req;
  res;
  model;

  constructor(req, res, model) {
    this.req = req;
    this.res = res;
    this.model = model;
  }

  async getAll() {
    try {
      const [results] = await this.model.getAll();
      this.res.status(200).json(results);
    } catch (error) {
      this.res.status(500).json({ message: error.message });
    }
  }

  async getOne() {
    try {
      const [results] = await this.model.getOne(this.req.params);
      this.res.status(200).json(results);
    } catch (error) {
      this.res.status(500).json({ message: error.message });
    }
  }

  sendJson(status, data) {
    this.res.status(status).json(data);
  }
}

module.exports = BaseController;
