var mongoose = require("mongoose");

var PurchaseSchema = new mongoose.Schema({
  nif: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  isbn: {
    type: [Number],
  },
  title: {
    type: [String],
  },
  condition: {
    type: [String],
  },
  quantity: {
    type: [Number],
  },
  price: {
    type: [String],
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Purchase", PurchaseSchema);
