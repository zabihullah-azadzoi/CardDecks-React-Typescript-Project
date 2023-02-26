const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/deckcards-react-ts")
  .then(() => {
    console.log("DB is connected.");
  })
  .catch((err: any) => {
    console.log("Couldn't connect DB: ", err.message);
  });
