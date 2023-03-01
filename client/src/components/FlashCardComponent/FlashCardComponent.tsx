import { ReactElement } from "react";
import classes from "./FlashCard.module.css";
import useHttp from "../../hooks/useHttp";

type flashcardPropsType = {
  flashcard: { id: string; description: string };
  fetchAllFlashCards: () => void;
};
const FlashCardComponent = ({
  flashcard,
  fetchAllFlashCards,
}: flashcardPropsType): ReactElement => {
  const { sendRequest } = useHttp();

  const deleteFlashCardHandler = () => {
    const url = `/cards/${flashcard.id}`;
    sendRequest({ method: "DELETE", url }, fetchAllFlashCards);
  };

  return (
    <div className={classes.flashcard}>
      <span className={classes.description}>{flashcard.description}</span>
      <button onClick={deleteFlashCardHandler} className={classes.closeButton}>
        X
      </button>
    </div>
  );
};

export default FlashCardComponent;
