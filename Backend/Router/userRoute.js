const express = require("express");
const router = express.Router();
const { User } = require("../Schema/userSchema");

router.get("/get", async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
  console.log("User Fetched");
});

router.post("/post", async (req, res) => {
  const user = await new User({ ...req.body });
  user.save();
  console.log("User Created");
});

router.put("/put:id", async (req, res) => {
  const params = req.params;
  await User.findByIdAndUpdate(params.id, { ...res.body });
  console.log("User Details Changed");
});

module.exports = router;
