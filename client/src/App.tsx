import { ReactElement, useState } from "react";

import Header from "./components/layout/Header/Header";
import Home from "./pages/Home/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (): ReactElement => {
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Header />
      {/* <Home /> */}
    </div>
  );
};

export default App;
