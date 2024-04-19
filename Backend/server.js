const conn = require("./db/db");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const product_route = require("./Router/productRoute");
const post_route = require("./Router/postRoute");
const { default: axios } = require("axios");
const app = express();
const PORT = process.env.SERVER_PORT;
dotenv.config();

conn
  .then(() => {
    app.use(cors({ origin: "*" }));
    console.log("DB Connected Successfully");
    app.use(express.json());
    app.use("/", [product_route, post_route]);

    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
