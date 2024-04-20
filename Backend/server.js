const conn = require("./db/db");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const delete_route = require("./Router/deleteRoute");
const product_route = require("./Router/productRoute");
const put_route = require("./Router/putRoute");
const post_route = require("./Router/postRoute");
const user_route = require("./Router/userRoute");
const electronics_route = require("./Router/electronicRoute");
const jewels_route = require("./Router/jewelsRoute");
const clothing_route = require("./Router/clothingRoute");
const Model = require("./Router/findById");
const search = require("./Router/SearchBar");
const { default: axios } = require("axios");
const app = express();
const PORT = process.env.SERVER_PORT || 5000;
dotenv.config();

conn
  .then(() => {
    app.use(cors({ origin: "*" }));
    console.log("DB Connected Successfully");
    app.use(express.json());
    app.use("/api/get", product_route);
    app.use("/api/post", post_route);
    app.use("/api/delete", delete_route);
    app.use("/api/put", put_route);
    app.use("/api/user", user_route);
    app.use("/Electronics", electronics_route);
    app.use("/Clothing", clothing_route);
    app.use("/Jewels", jewels_route);
    app.use("/Model", Model);
    app.use("/Search", search);

    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
