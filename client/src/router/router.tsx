import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home/Home";
import FlashCard from "../pages/FlashCard/FlashCard";

const router = createBrowserRouter([
  // { element: <App /> },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/decks/:id",
    element: <FlashCard />,
  },
  {
    path: "/*",
    element: <div>Page is not available!</div>,
  },
]);

export default router;
