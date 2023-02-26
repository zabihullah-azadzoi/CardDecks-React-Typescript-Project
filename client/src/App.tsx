import { ReactElement, useState } from "react";

import Header from "./components/layout/Header/Header";
import Home from "./components/Home/Home";

const App = (): ReactElement => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
