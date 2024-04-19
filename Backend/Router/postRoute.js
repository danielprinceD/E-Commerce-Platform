const express = require("express");
const router = express.Router();
const { Electronics } = require("../Schema/electronicsSchema");
const { Jewels } = require("../Schema/jewelsSchema");
const { Clothing } = require("../Schema/clothingSchema");

router.post("/postElectronics", async (req, res) => {
  const post = await new Electronics({ ...req.body }).save();
  console.log("Electronic Product Added Successfully");
});
router.post("/postJewels", async (req, res) => {
  const post = await new Jewels({ ...req.body }).save();
  console.log("Jewels Product Added Successfully");
});
router.post("/postClothing", async (req, res) => {
  const post = await new Clothing({ ...req.body }).save();
  console.log("Clothing Product Added Successfully");
});

module.exports = router;
