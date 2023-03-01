import { ChangeEvent, ReactElement } from "react";
import classes from "../../../pages/Home/Home.module.css";

type DeckFlashCardPropsType = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<any>>;
  submitHandler: () => void;
  title: string;
  dataMapper: () => JSX.Element[];
  placeholder: string;
};

const DeckFlashCardComponent = ({
  inputValue,
  setInputValue,
  submitHandler,
  title,
  dataMapper,
  placeholder,
}: DeckFlashCardPropsType): ReactElement => {
  return (
    <div className={classes.home}>
      <p className={classes.title}>{title}</p>
      <section className={classes.sectionContainer}>
        <div className={classes.decksContainer}>{dataMapper()}</div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            className={classes.input}
            placeholder={placeholder}
          />
          <button className="btn" onClick={() => submitHandler()}>
            Add
          </button>
        </div>
      </section>
    </div>
  );
};

export default DeckFlashCardComponent;
