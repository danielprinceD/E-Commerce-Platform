const conn = require("./db/db");
const dotenv = require("dotenv");
const express = require("express");
const product_route = require("./Router/router");
const app = express();
const PORT = process.env.SERVER_PORT;
const axios = require("axios");
dotenv.config();

conn
  .then(() => {
    console.log("DB Connected Successfully");
    app.use("/", product_route);
    axios.post(`http://localhost:${PORT}/postproduct`, { name: "Phone" });
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
