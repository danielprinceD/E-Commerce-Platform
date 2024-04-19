const express = require("express");
const router = express.Router();
const { Electronics } = require("../Schema/electronicsSchema");
const { Jewels } = require("../Schema/jewelsSchema");
const { Clothing } = require("../Schema/clothingSchema");

router.delete("/deleteElectronics/:id", async (req, res) => {
  const param = req.params;
  console.log(param);
  try {
    await Electronics.findByIdAndDelete(param.id).then((res) =>
      console.log("Deleted : ", param)
    );
  } catch (err) {
    console.log("error");
  }
});
router.delete("/deleteJewels/:id", async (req, res) => {
  const param = req.params;
  console.log(param);
  await Jewels.findByIdAndDelete(param.id).then((res) =>
    console.log("Deleted : ", param)
  );
});
router.delete("/deleteCloting/:id", async (req, res) => {
  const param = req.params;
  console.log(param);
  await Clothing.findByIdAndDelete(param.id).then((res) =>
    console.log("Deleted : ", param)
  );
});

module.exports = router;
