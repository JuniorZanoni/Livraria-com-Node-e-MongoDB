import Livros from '../models/LivrosSchema.js';

class livrosService {
  static async getAll() {
    const livros = await Livros.find({});
    return livros;
  }

  static async getByid(id) {
    try {
      const livros = await Livros.findById(id);
      return livros;
    } catch (error) {
      return false;
    }
  }

  static async delete(id) {
    try {
      const livros = await Livros.findByIdAndDelete(id);
      return livros;
    } catch (error) {
      return false;
    }
  }

  static async insert(livro) {
    try {
      const livroCriado = await Livros.create(livro);
      return livroCriado;
    } catch (error) {
      return false;
    }
  }
}

export default livrosService;
