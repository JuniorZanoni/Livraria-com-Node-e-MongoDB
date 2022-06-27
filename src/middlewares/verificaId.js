function verificaId(req, res, next) {
  const { id } = req.params;

  if (id.length !== 24) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  return next();
}

export default verificaId;
