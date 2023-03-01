import { ReactElement } from "react";

import Header from "./components/layout/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (): ReactElement => {
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Header />
    </div>
  );
};

export default App;
