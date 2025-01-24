function errorHandler(err, req, res, next) {
  console.log(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Errore interno del server",
    },
  });
}

module.exports = errorHandler;
