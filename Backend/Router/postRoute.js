const express = require("express");
const router = express.Router();
const { Electronics } = require("../Schema/electronicsSchema");
const { Jewels } = require("../Schema/jewelsSchema");
const { Clothing } = require("../Schema/clothingSchema");

router.post("/postElectronics", async (req, res) => {
  try {
    const post = await new Electronics({ ...req.body }).save();
    console.log("Electronic Product Added Successfully");
    res.json({ message: "Electronic Product Added Successfully", data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/postJewels", async (req, res) => {
  try {
    const post = await new Jewels({ ...req.body }).save();
    console.log("Jewels Product Added Successfully");
    res.json({ message: "Jewels Product Added Successfully", data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/postClothing", async (req, res) => {
  try {
    const post = await new Clothing({ ...req.body }).save();
    console.log("Clothing Product Added Successfully");
    res.json({ message: "Clothing Product Added Successfully", data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
