import mongoose = require("mongoose");

const flashCardSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minLength: [10, "Length should be at least 10 characters"],
  },
  deckId: { type: mongoose.Types.ObjectId, required: true, ref: "Deck" },
});

const model = mongoose.model("FlashCard", flashCardSchema);

module.exports = model;
