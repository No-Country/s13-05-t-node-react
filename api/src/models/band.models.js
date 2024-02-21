const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2")

const schema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "active", "closed"],
    default: "active",
  },
});

schema.plugin(paginate)

const bandModel = mongoose.model("band", schema);

module.exports = bandModel;
