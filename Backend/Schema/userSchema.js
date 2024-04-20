const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  title: { type: String },
  quantity: { type: Number },
  price: { type: Number },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
  purchase: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);
const Cart = mongoose.model("Cart", cartSchema);

module.exports = { User, Cart };
