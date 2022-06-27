import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
  },
);

const Livros = mongoose.model('livros', livroSchema);

export default Livros;
