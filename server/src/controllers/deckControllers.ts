// const { Request, Response } = require("express");
import { Request, Response } from "express";
const Deck = require("../models/Deck");

type DeckType = { name: string };
exports.addDeck = async (req: Request, res: Response) => {
  try {
    const deck: DeckType = req.body.deck;

    if (!deck) {
      return res.status(400).json("no data is provided!");
    }

    const newDeck = await new Deck({ name: deck }).save();
    res.json({ deck: newDeck });
  } catch (err) {
    res.status(400).json("something went wrong!");
  }
};

exports.getAllDecks = async (req: Request, res: Response) => {
  try {
    const allDecks = await Deck.find({});
    res.json({ allDecks });
  } catch (err) {
    res.status(500).json("something went wrong!");
  }
};
