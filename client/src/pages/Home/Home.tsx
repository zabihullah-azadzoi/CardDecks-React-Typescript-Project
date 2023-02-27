import { ChangeEvent, ReactElement, useState, useEffect } from "react";
import classes from "./Home.module.css";

import useHttp from "../../hooks/useHttp";

import DeckCard from "../../components/DeckCard/DeckCard";

type DeckCardType = { id: string; name: string };

const Home = (): ReactElement => {
  const [deckName, setDeckName] = useState<string>("");
  const [data, setData] = useState<DeckCardType[]>([]);
  const { sendRequest } = useHttp();

  const fetchAllFlashDecks = () => {
    sendRequest(
      {
        url: "/decks",
      },
      (data) => {
        setData(data.allDecks);
      }
    );
  };

  useEffect(() => {
    fetchAllFlashDecks();
  }, []);

  const submitDeckHandler = () => {
    sendRequest(
      {
        method: "POST",
        url: "/decks",
        data: { deck: deckName },
      },
      () => {
        fetchAllFlashDecks();
        setDeckName("");
      }
    );
  };
  return (
    <div className={classes.home}>
      <div className={classes.decksContainer}>
        {data.map((deck: DeckCardType) => {
          return (
            <DeckCard
              key={deck.id}
              deck={deck}
              fetchAllFlashDecks={fetchAllFlashDecks}
            />
          );
        })}
      </div>
      <div>
        <input
          type="text"
          value={deckName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDeckName(e.target.value)
          }
          className={classes.input}
          placeholder="Enter your Deck Name"
        />
        <button className="btn" onClick={() => submitDeckHandler()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Home;
