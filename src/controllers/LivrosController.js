import livrosService from '../services/livrosService.js';

class livrosController {
  static async getAll(_req, res) {
    const livros = await livrosService.getAll();
    return res.status(200).json(livros);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const livro = await livrosService.getByid(id);

    if (livro) {
      return res.status(200).json(livro);
    }

    return res.status(200).json({ message: 'Livro não encontrado' });
  }
}

export default livrosController;
