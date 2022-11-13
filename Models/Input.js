const mongoose = require("mongoose");
const inputData = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    landmark: { type: String, required: true },
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    totalAmount: { type: String, required: true },
    orderDetails: { type: Array, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Input", inputData);
