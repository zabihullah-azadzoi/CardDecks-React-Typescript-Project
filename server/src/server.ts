require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const deckRouter = require("./routes/deckRoutes");

// running DB
require("./DbConnection");

// middlewares
app.use(cors());
app.use(express.json());

//routers
app.use(deckRouter);

const port: number | string = process.env.PORT ?? 8000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
