const conn = require("./db/db");
const express = require("express");
const app = express();

const PORT = process.env.SERVER_PORT;

app.get((req, res) => {});

app.listen(PORT, () => {
  conn
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});
