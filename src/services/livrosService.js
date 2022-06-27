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
}

export default livrosService;
