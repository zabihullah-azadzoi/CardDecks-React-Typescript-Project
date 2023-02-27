const express = require("express");

const router = express.Router();

const {
  addDeck,
  getAllDecks,
  deleteDeck,
} = require("../controllers/deckControllers");

router.post("/api/decks", addDeck);
router.get("/api/decks", getAllDecks);
router.delete("/api/decks/:id", deleteDeck);

module.exports = router;
