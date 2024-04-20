const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Electronics } = require("../Schema/electronicsSchema");
router.get("/get/:id", async (req, res) => {
  const response = await Electronics.find({ _id: req.params.id });
  res.status(200).json(response);
});

module.exports = router;
