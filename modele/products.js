const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true},
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const productCollection = mongoose.model("Product", productSchema);

module.exports = productCollection
