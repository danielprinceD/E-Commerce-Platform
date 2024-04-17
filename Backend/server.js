const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
dotenv.config();
const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB Connected Successfully..!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
