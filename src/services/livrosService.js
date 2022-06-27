import Livros from '../models/LivrosSchema.js';

class livrosService {
  static async getAll() {
    const livros = await Livros.find({});
    return livros;
  }
}

export default livrosService;
