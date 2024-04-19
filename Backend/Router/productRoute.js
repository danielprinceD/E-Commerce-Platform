const express = require("express");
const router = express.Router();
const { Electronics } = require("../Schema/electronicsSchema");
const { Jewels } = require("../Schema/jewelsSchema");
const { Clothing } = require("../Schema/clothingSchema");

router.get("/getElectronics", async (req, res) => {
  console.log("Electronics Fetched");
  const allProducts = await Electronics.find();
  res.status(200).json(allProducts);
});

router.get("/getJewels", async (req, res) => {
  console.log("Jewels Fetched");
  const allProducts = await Jewels.find();
  res.status(200).json(allProducts);
});

router.get("/getClothing", async (req, res) => {
  console.log("Clothing Fetched");
  const allProducts = await Clothing.find();
  res.status(200).json(allProducts);
});

router.get("/allProducts", async (req, res) => {
  const all_product = {
    electronics: await Electronics.find(),
    jewels: await Jewels.find(),
    clothing: await Clothing.find(),
  };
  console.log("All Product Fetched");
  res.status(200).json(all_product);
});

module.exports = router;
