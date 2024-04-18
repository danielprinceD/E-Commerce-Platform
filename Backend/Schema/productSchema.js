const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    default:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908",
  },
  desc: {
    type: String,
    require: false,
  },
  price: {
    type: Number,
    default: 0.0,
  },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = { Products };
