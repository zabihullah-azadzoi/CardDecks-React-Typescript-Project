// const { Request, Response } = require("express");
import { Request, Response } from "express";
const Deck = require("../models/Deck");

type DeckType = { name: string };
exports.addDeck = async (req: Request, res: Response) => {
  try {
    const deck: DeckType = req.body.deck;

    if (!deck) {
      return res.status(400).json({ message: "No data is provided!" });
    }

    const newDeck = await new Deck({ name: deck }).save();
    res.json({ deck: newDeck });
  } catch (err) {
    res.status(400).json({ message: "something went wrong!" });
  }
};

exports.getAllDecks = async (req: Request, res: Response) => {
  try {
    let allDecks = await Deck.find({}).select(["_id", "name"]);

    type DeckType = { _id: string; name: string };
    type ReturnType = { id: string; name: string };
    allDecks = allDecks.map((deck: DeckType): ReturnType => {
      return { id: deck._id, name: deck.name };
    });

    res.json({ allDecks });
  } catch (err) {
    res.status(500).json({ message: "something went wrong!" });
  }
};

exports.deleteDeck = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    if (!id) return res.status(400).json({ message: "No ID is provided!" });
    const removedDeck = await Deck.findByIdAndDelete(id);
    if (!removedDeck) {
      return res.status(404).json({
        message: "No Deck was found corresponding to the provided ID!",
      });
    }
    res.json({ status: "OK" });
  } catch (err) {
    res.status(500).json({ message: "something went wrong!" });
  }
};
