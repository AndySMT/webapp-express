//importo express
const express = require("express");
// creo istanza
const app = express();
// set port
const port = process?.env.PORT || 3000;

//altri import
const moviesRouter = require("./routers/moviesRouter");
const notFound = require("./middlewares/notFound");

//npm i cors
const cors = require("cors");
//uso corse prima di tutte le rotte
app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Home Page, movies");
});

app.use("/movies", moviesRouter);

//metto in ascolto un errore 404
app.use(notFound);

//metto il server in ascolto
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
