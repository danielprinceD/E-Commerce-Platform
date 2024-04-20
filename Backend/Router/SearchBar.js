const express = require("express");
const router = express.Router();
const { Electronics } = require("../Schema/electronicsSchema");
const { Jewels } = require("../Schema/jewelsSchema");
const { Clothing } = require("../Schema/clothingSchema");
router.get("/get/:title", async (req, res) => {
  let result = [];
  result.push(
    await Electronics.find({
      $or: [{ title: { $regex: new RegExp(req.params.title, "i") } }],
    })
  );

  result.push(
    await Jewels.find({
      $or: [{ title: new RegExp(req.params.title, "i") }],
    })
  );
  result.push(
    await Clothing.find({
      $or: [{ title: new RegExp(req.params.title, "i") }],
    })
  );
  res.status(200).json({ result: result });
});

module.exports = router;
