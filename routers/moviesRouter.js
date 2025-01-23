// importo express
const express = require("express");
// creo un router
const router = express.Router();
// importo il controller
const { index } = require("../controllers/moviesController");

// definisco le rotte
router.get("/", index);

// esporto le rotte
module.exports = router;
