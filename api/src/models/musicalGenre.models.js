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
    enum: ["pending", "active", "closed"], //no me quedan claro estos estados
    default: "active",
  },
});

schema.plugin(paginate)

const musicalGenreModel = mongoose.model("musicalGenre", schema);

module.exports = musicalGenreModel;
