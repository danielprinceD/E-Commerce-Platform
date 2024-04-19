const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Clothing } = require("../Schema/clothingSchema");
router.get("/get/:id", async (req, res) => {
  const response = await Clothing.find({ _id: req.params.id });
  res.status(200).json(response);
});

module.exports = router;
