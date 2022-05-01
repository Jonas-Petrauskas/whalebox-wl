const mongoose = require("../config/index");

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  address: {
    type: String,
  },
});

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
