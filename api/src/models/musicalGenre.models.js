const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  status: {
    type: String,
    enum: ["pending", "active", "closed"], //no me quedan claro estos estados
    default: "active",
  },
});

const musicalGenreModel = mongoose.model("musicalGenre", schema);

module.exports = musicalGenreModel;
