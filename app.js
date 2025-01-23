//importo express
const express = require("express");
// creo istanza
const app = express();

// set port
const port = process?.env.PORT || 3000;

//altri import
const moviesRouter = require("./routers/moviesRouter");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Home Page, movies");
});

app.use("/movies", moviesRouter);

//metto il server in ascolto
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
