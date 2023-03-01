import { ChangeEvent, ReactElement, useState, useEffect } from "react";
// import classes from "./Home.module.css";

import useHttp from "../../hooks/useHttp";

import DeckCard from "../../components/DeckCard/DeckCard";
import DeckFlashCardComponent from "../../components/shared/DeckFlashCardComponent/DeckFlashCardComponent";

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

  const submitDeckHandler = (): void => {
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

  const dataMapper = (): JSX.Element[] => {
    return data.map((deck) => {
      return (
        <DeckCard
          key={deck.id}
          deck={deck}
          fetchAllFlashDecks={fetchAllFlashDecks}
        />
      );
    });
  };

  return (
    <DeckFlashCardComponent
      inputValue={deckName}
      setInputValue={setDeckName}
      title={"Decks"}
      submitHandler={submitDeckHandler}
      dataMapper={dataMapper}
      placeholder="Enter Deck Name"
    />
  );
};

export default Home;
