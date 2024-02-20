const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  status: {
    type: String,
    enum: ["pending", "active", "closed"],
    default: "active",
  },
});

const bandModel = mongoose.model("band", schema);

module.exports = bandModel;
