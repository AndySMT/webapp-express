// importo mysql
const mysql = require("mysql2");
// mi connecto al database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// esporto la connessione nei controller
module.exports = connection;
