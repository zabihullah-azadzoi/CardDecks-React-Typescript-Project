import { ReactElement, useState, useEffect } from "react";
// import classes from "./Home.module.css";

import useHttp from "../../hooks/useHttp";
import FlashCardComponent from "../../components/FlashCardComponent/FlashCardComponent";

import DeckFlashCardComponent from "../../components/shared/DeckFlashCardComponent/DeckFlashCardComponent";

import { useParams, useLocation } from "react-router-dom";

type flashcardType = { id: string; description: string };

const FlashCard = (): ReactElement => {
  const [description, setDescription] = useState<string>("");
  const [data, setData] = useState<flashcardType[]>([]);
  const { sendRequest } = useHttp();

  const { id } = useParams();
  const { state } = useLocation();

  const fetchAllFlashcards = () => {
    sendRequest(
      {
        url: `decks/${id}/cards`,
      },
      (data) => {
        setData(data.flashCards);
      }
    );
  };

  useEffect(() => {
    fetchAllFlashcards();
  }, []);

  const submitFlashcardHandler = (): void => {
    sendRequest(
      {
        method: "POST",
        url: `/decks/${id}/cards`,
        data: { description, deckId: id },
      },
      () => {
        fetchAllFlashcards();
        setDescription("");
      }
    );
  };

  const dataMapper = (): JSX.Element[] => {
    if (data.length === 0) return [];
    return data.map((flashcard) => {
      return (
        <FlashCardComponent
          key={flashcard.id}
          flashcard={flashcard}
          fetchAllFlashCards={fetchAllFlashcards}
        />
      );
    });
  };

  return (
    <DeckFlashCardComponent
      inputValue={description}
      setInputValue={setDescription}
      title={state.deckName}
      submitHandler={submitFlashcardHandler}
      dataMapper={dataMapper}
      placeholder="Enter Flashcard's Name"
    />
  );
};

export default FlashCard;
