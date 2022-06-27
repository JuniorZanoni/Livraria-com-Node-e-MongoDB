function verificaLivro(req, res, next) {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: 'Título e autor são obrigatórios' });
  }

  return next();
}

export default verificaLivro;
