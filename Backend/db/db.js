const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

conn = mongoose.connect(DB_URL);

module.exports = conn;
