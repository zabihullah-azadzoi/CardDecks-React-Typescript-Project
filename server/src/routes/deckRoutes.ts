const express = require("express");

const router = express.Router();

const { addDeck, getAllDecks } = require("../controllers/deckControllers");

router.post("/api/decks", addDeck);
router.get("/api/decks", getAllDecks);

module.exports = router;
