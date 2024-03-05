const paginate = require("mongoose-paginate-v2")

const { Schema, model, mongo, default: mongoose } = require("mongoose");

const UserSchema = Schema({
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

  generos: [ //el usuario deberia seleccionar los géneros, no escribirlos manualmente
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "musicalGenre",
      required: [true, "Al menos debe seleccionar un género músical"],
    },
  ],

  tuneMatch: {
    type: [{
      tuneMatchId: { type: Schema.Types.ObjectId, ref: "Usuario" },
      nuevo: { type: Boolean, default: true },
      nombre: { type: String },
      generos: [{ type: String }],
      bandas: [{ type: String }],
      fotos: [{ type: String }],
      miGenero: { type: String },
      enBuscaDe: [{ type: String }],
      descripcion: { type: String },
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

    }],
    default: [],
  },
  misLikes: {
    type: [{
      likedId: { type: Schema.Types.ObjectId, ref: "Usuario" },
      date: { type: Date, default: Date.now },
      nombre: { type: String },
      fotos: [{ type: String }]
    }],
    default: []
  },
  likes: {
    type: [{
      userId: { type: Schema.Types.ObjectId, ref: "Usuario" },
      date: { type: Date, default: Date.now },
      status: { type: String, default: 'activo' },
      intentos: { type: Number, default: 0 }
    }],
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

  descripcion: { type: String },

  activo: { type: Boolean, default: true },

  google: { type: Boolean, default: false },
});

UserSchema.methods.toJSON = function () {
  const { __v, _id: id, likes, password, ...usuario } = this.toObject();
  return { id, ...usuario };
};

UserSchema.plugin(paginate)
module.exports = model("Usuario", UserSchema);

