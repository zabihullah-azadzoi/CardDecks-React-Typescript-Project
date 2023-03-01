import classes from "./DeckCard.module.css";
import useHttp from "../../hooks/useHttp";

import { Link } from "react-router-dom";

type DeckCardPropsType = {
  deck: { id: string; name: string };
  fetchAllFlashDecks: () => void;
};
const DeckCard = ({ deck, fetchAllFlashDecks }: DeckCardPropsType) => {
  const { sendRequest } = useHttp();

  const deleteDeckHandler = () => {
    const url = `/decks/${deck.id}`;
    sendRequest({ method: "DELETE", url }, fetchAllFlashDecks);
  };

  return (
    <div className={classes.deck}>
      <Link
        to={`/decks/${deck.id}`}
        state={{ deckName: deck.name }}
        className={classes.deckName}
      >
        {deck.name}
      </Link>
      <button onClick={deleteDeckHandler} className={classes.closeButton}>
        X
      </button>
    </div>
  );
};

export default DeckCard;
