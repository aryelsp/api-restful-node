export const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;

  // Retorna mensagem do erro ou mensagem genérica
  res.status(statusCode).json({
    message: err.message || 'Ocorreu um erro no servidor.',
  });
};
