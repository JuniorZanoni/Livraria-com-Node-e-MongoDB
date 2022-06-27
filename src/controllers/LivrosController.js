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

  static async delete(req, res) {
    const { id } = req.params;
    const livro = await livrosService.delete(id);

    if (livro) {
      return res.status(200).json({ message: 'Livro deletado com sucesso' });
    }

    return res.status(200).json({ message: 'Livro não encontrado' });
  }

  static async insert(req, res) {
    const { title, author } = req.body;
    const livroCriado = await livrosService.insert({ title, author });

    if (livroCriado) {
      return res.status(201).json({ message: 'Livro criado com sucesso' });
    }

    return res.status(500).json({ message: 'Aconteceu algo de errado, tente novamente' });
  }

  static async update(req, res) {
    const { title, author } = req.body;
    const { id } = req.params;
    const livro = await livrosService.update(id, { title, author });

    if (livro) {
      return res.status(200).json(livro);
    }

    return res.status(200).json({ message: 'Livro não encontrado' });
  }
}

export default livrosController;
