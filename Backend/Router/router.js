const express = require("express");
const router = express.Router();
const { Products } = require("../Schema/productSchema");

router.get("/getproducts", async (req, res) => {
  console.log("Products Fetched");
  const allProducts = await Products.find();
  res.status(200).json(allProducts);
});

router.post("/postproduct", async (req, res) => {
  const product = new Products({ ...req.body });
  await product.save();
  console.log("Product Inserted");
});

module.exports = router;
