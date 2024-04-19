const express = require("express");
const router = express.Router();
const { Electronics } = require("../Schema/electronicsSchema");
const { Jewels } = require("../Schema/jewelsSchema");
const { Clothing } = require("../Schema/clothingSchema");

router.put("/putElectronics/:id", async (req, res) => {
  const params = req.params;
  updater = await Electronics.findByIdAndUpdate(params.id, { ...req.body });
  console.log("Electronics Product Updated");
});
router.put("/putJewels/:id", async (req, res) => {
  const params = req.params;
  updater = await Jewels.findByIdAndUpdate(params.id, { ...req.body });
  console.log("Jewels Product Updated");
});
router.put("/putClothing/:id", async (req, res) => {
  const params = req.params;
  updater = await Clothing.findByIdAndUpdate(params.id, { ...req.body });
  console.log("Clothing Product Updated");
});

module.exports = router;
