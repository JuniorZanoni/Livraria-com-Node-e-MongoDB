import livrosService from '../services/livrosService.js';

class livrosController {
  static async getAll(_req, res) {
    const livros = await livrosService.getAll();
    return res.status(200).json(livros);
  }
}

export default livrosController;
