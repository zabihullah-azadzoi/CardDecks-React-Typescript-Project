import React, { ChangeEvent, ReactElement, useState } from "react";
import classes from "./Home.module.css";

import useHttp from "../../hooks/useHttp";

const Home = (): ReactElement => {
  const [deckName, setDeckName] = useState<string>("");
  const [data, setData] = useState();
  const { error, sendRequest } = useHttp();

  console.log(data);

  const submitDeckHandler = () => {
    sendRequest(
      {
        method: "POST",
        url: "http://localhost:8000/api/decks",
        data: { deck: deckName },
      },
      (data) => {
        setData(data);
      }
    );
  };
  return (
    <div className={classes.home}>
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
        <button onClick={() => submitDeckHandler()}>Add</button>
      </div>
    </div>
  );
};

export default Home;
