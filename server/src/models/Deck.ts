const mongoose = require("mongoose");

const deckSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Deck", deckSchema);
