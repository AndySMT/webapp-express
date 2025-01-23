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
// esporto la funzione nelle rotte
module.exports = { index };
