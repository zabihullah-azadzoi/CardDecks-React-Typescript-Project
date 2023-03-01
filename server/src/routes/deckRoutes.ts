const express = require("express");

const router = express.Router();

const {
  addDeck,
  getAllDecks,
  deleteDeck,
  addCard,
  getAllCards,
  deleteCard,
} = require("../controllers/deckControllers");

router.post("/api/decks", addDeck);
router.get("/api/decks", getAllDecks);
router.delete("/api/decks/:id", deleteDeck);
router.post("/api/decks/:id/cards", addCard);
router.get("/api/decks/:id/cards", getAllCards);
router.delete("/api/cards/:id", deleteCard);

module.exports = router;
