// const { Request, Response } = require("express");
import { Request, Response } from "express";
const Deck = require("../models/Deck");
const FlashCard = require("../models/FlashCard");

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

exports.addCard = async (req: Request, res: Response) => {
  try {
    const { description, deckId } = req.body;
    if (!description || !deckId) {
      return res
        .status(400)
        .json({ message: "Description and DeckId are required!" });
    }
    const newFlashCard = await FlashCard({ description, deckId }).save();
    res.json({
      flashCard: {
        id: newFlashCard._id,
        description: newFlashCard.description,
      },
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllCards = async (req: Request, res: Response) => {
  try {
    const deckId: string = req.params.id;
    if (!deckId) {
      return res.status(400).json({ message: "DeckId is required!" });
    }
    let allFlashCards = await FlashCard.find({ deckId });

    type FlashcardType = { _id: string; description: string };
    type ReturnType = { id: string; description: string };
    allFlashCards = allFlashCards.map(
      (flashCard: FlashcardType): ReturnType => {
        return { id: flashCard._id, description: flashCard.description };
      }
    );

    res.json({ flashCards: allFlashCards });
  } catch (err) {
    res.status(500).json({ message: "something went wrong!" });
  }
};

exports.deleteCard = async (req: Request, res: Response) => {
  try {
    const flashCardId: string = req.params.id;
    if (!flashCardId) {
      return res.status(400).json({ message: "Flash card ID is required!" });
    }
    await FlashCard.findByIdAndDelete(flashCardId);
    res.json({ message: "OK" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
