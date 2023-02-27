import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import FlashCard from "../pages/FlashCard/FlashCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/decks/:id",
    element: <FlashCard />,
  },
]);

export default router;
