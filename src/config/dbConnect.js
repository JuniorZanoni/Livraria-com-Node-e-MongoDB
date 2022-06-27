import mongoose from 'mongoose';
import Livros from '../models/LivrosSchema.js';

mongoose.connect('mongodb://localhost:27017/biblioteca');

const db = mongoose.connection;

export default db;
