const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

router.get("/get/:id", async (req, res) => {
  const params = req.params.id;
  const product = [];
  await axios
    .get(
      `http://localhost:${process.env.SERVER_PORT}/Electronics/get/${params}`
    )
    .then((r) =>
      r.data.length != 0
        ? product.push({ category: "Electronics", data: r.data })
        : false
    );
  await axios
    .get(`http://localhost:${process.env.SERVER_PORT}/Jewels/get/${params}`)
    .then((r) =>
      r.data.length != 0
        ? product.push({ category: "Jewels", data: r.data })
        : false
    );
  await axios
    .get(`http://localhost:${process.env.SERVER_PORT}/Clothing/get/${params}`)
    .then((r) =>
      r.data.length != 0
        ? product.push({ category: "Clothing", data: r.data })
        : false
    );

  res.status(200).json(product[0]);
});

module.exports = router;
