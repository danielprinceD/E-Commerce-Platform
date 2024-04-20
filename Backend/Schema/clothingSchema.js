const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/photo-of-bag-sneakers-and-sunglasses-on-beige-surface-u79wy47kvVs",
  },
  rating: {
    type: Number,
  },
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    default: "Common",
  },
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = { Clothing };
