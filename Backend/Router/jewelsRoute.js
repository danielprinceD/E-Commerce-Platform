const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Jewels } = require("../Schema/jewelsSchema");
router.get("/get/:id", async (req, res) => {
  const response = await Jewels.find({ _id: req.params.id });
  res.status(200).json(response);
});

module.exports = router;
