import React, { ReactElement } from "react";
import classes from "./Header.module.css";

const Header = (): ReactElement => {
  return (
    <div className={classes.headerContainer}>
      {/* <Link to="/">FlashCards</Link> */}
      FlashCards
    </div>
  );
};

export default Header;
