import express from 'express';
import livrosController from '../controllers/LivrosController.js';
import verificaId from '../middlewares/verificaId.js';

const router = express.Router();

router.get('/', livrosController.getAll);
router.get('/:id', verificaId, livrosController.getById);
router.delete('/:id', verificaId, livrosController.delete);

export default router;
