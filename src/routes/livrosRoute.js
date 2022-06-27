import express from 'express';
import livrosController from '../controllers/LivrosController.js';
import verificaId from '../middlewares/verificaId.js';
import verificaLivro from '../middlewares/verifcaLivro.js';

const router = express.Router();

router.get('/livros', livrosController.getAll);
router.get('/livros/:id', verificaId, livrosController.getById);
router.delete('/livros/:id', verificaId, livrosController.delete);
router.post('/livros', verificaLivro, livrosController.insert);
router.patch('/livros/:id', verificaId, verificaLivro, livrosController.update);

export default router;
