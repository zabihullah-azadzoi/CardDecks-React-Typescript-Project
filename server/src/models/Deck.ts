import mongoose = require("mongoose");

const deckSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Deck", deckSchema);
