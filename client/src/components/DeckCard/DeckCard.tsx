import classes from "./DeckCard.module.css";
import useHttp from "../../hooks/useHttp";

type DeckCardPropsType = {
  deck: { id: string; name: string };
  fetchAllFlashDecks: () => void;
};
const DeckCard = ({ deck, fetchAllFlashDecks }: DeckCardPropsType) => {
  const { sendRequest } = useHttp();

  const deleteDeckHandler = (id: string) => {
    const url = `/decks/${id}`;
    sendRequest({ method: "DELETE", url }, fetchAllFlashDecks);
  };

  return (
    <div className={classes.deck}>
      <span className={classes.deckName}>{deck.name}</span>
      <button
        onClick={() => deleteDeckHandler(deck.id)}
        className={classes.closeButton}
      >
        X
      </button>
    </div>
  );
};

export default DeckCard;
