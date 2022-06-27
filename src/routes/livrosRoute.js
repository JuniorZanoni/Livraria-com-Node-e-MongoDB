import express from 'express';
import livrosController from '../controllers/LivrosController.js';

const router = express.Router();

router.get('/', await livrosController.getAll);

export default router;
