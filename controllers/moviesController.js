// importo il database
const connection = require("../data/moviesDB");

//index
const index = (req, res) => {
  // preparo la query
  const sql = "SELECT * FROM movies";
  // eseguo la query
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
};
const show = (req, res) => {
  // Recuperiamo l'ID dall'URL
  const id = req.params.id;
  // Query per ottenere i dettagli del film
  const moviesSql = `SELECT * FROM movies 
  WHERE id = ?`;
  // Query per ottenere le recensioni del film
  const reviewsSql = `SELECT * FROM reviews 
        WHERE movie_id = ?`;

  // Eseguiamo la query per il film
  connection.query(moviesSql, [id], (err, movieResults) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (movieResults.length === 0)
      return res.status(404).json({ error: "Film non trovato" });
    // Recuperiamo il film dal risultato della prima query
    const movie = movieResults[0];

    // Eseguiamo  query per le recensioni
    connection.query(reviewsSql, [id], (err, reviewsResults) => {
      if (err) return res.status(500).json({ error: "Database query failed" });
      // Aggiungiamo le recensioni al film
      movie.reviews = reviewsResults;
      // Restituiamo il film con le recensioni
      res.json(movie);
    });
  });
};

// esporto la funzione nelle rotte
module.exports = { index, show };
