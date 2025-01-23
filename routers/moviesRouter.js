// importo express
const express = require("express");
// creo un router
const router = express.Router();
// importo il controller
const { index, show } = require("../controllers/moviesController");

// definisco le rotte
router.get("/", index);
router.get("/:id", show);

// esporto le rotte
module.exports = router;
