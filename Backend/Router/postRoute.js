const express = require("express");
const router = express.Router();
const { Electronics } = require("../Schema/electronicsSchema");
const { Jewels } = require("../Schema/jewelsSchema");
const { Clothing } = require("../Schema/clothingSchema");

router.post("/postElectronics", (req, res) => {
  const post = new Electronics({ ...req.body }).save();
  console.log("Electronic Product Added Successfully");
});
router.post("/postJewels", (req, res) => {
  const post = new Jewels({ ...req.body }).save();
  console.log("Jewels Product Added Successfully");
});
router.post("/postClothing", (req, res) => {
  const post = new Clothing({ ...req.body }).save();
  console.log("Clothing Product Added Successfully");
});

module.exports = router;
