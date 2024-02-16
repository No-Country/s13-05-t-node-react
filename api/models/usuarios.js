const { Schema, model, mongo, default: mongoose } = require("mongoose");

const UsuariosSchema = Schema({
  nombre: {
    type: String,
    required: [true, "Debe Ingresar un nombre de usuario"],
  },
  correo: {
    type: String,
    required: [true, "Debe Ingresar un correo"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Debe ingresar una contraseña"],
  },
  miGenero: { type: String },

  fotos: [{ type: String }],

  bandas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "band",
      required: [true, "Al menos debe seleccionar una banda músical"],
    },
  ],

  generos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "musicalGenre",
      required: [true, "Al menos debe seleccionar un género músical"],
    },
  ],

  tuneMatch: {
    type: [Schema.Types.Mixed],
    default: [],
  },

  ultimaPosicion: {
    lat: {
      type: Number,
      default: null,
    },
    lon: {
      type: Number,
      default: null,
    },
  },

  enBuscaDe: [{ type: String }],

  activo: { type: Boolean, default: true },

  google: { type: Boolean, default: false },
});

UsuariosSchema.methods.toJSON = function () {
  const { __v, _id: id, password, ...usuario } = this.toObject();
  return { id, ...usuario };
};

UsuariosSchema.pre("findOne", function () {
  this.populate("generos");
  this.populate("bandas");
});

module.exports = model("Usuario", UsuariosSchema);

