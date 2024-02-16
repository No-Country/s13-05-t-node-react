const { Schema, model } = require('mongoose')

const UsuariosSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'Debe Ingresar un nombre de usuario']
  },
  correo: {
    type: String,
    required: [true, 'Debe Ingresar un correo'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Debe ingresar una contraseña']
  },

  miGenero: { type: String },

  fotos: [{ type: String }],

  bandas: {
    type: [{ type: String }],
    required: [true, 'debe Ingresar al menos una banda']
  },

  ciudad: {
    type: String
  },

  generos: {
    type: [{ type: String }],
    required: [true, 'Al menos debe seleccionar un género músical']
  },

  sugerencias: {
    type: [Schema.Types.Mixed],
    default: []
  },

  likes: {
    type: [Schema.Types.Mixed],
    default: []
  },

  tuneMatch: {
    type: [Schema.Types.Mixed],
    default: []
  },

  ultimaPosicion: {
    lat: {
      type: Number,
      default: null
    },
    lon: {
      type: Number,
      default: null
    }
  },
  enbuscaDe: [{ type: String }],

  descripcion: [{ type: String }],

  baneado: { type: Boolean, default: false },

  activo: { type: Boolean, default: true },

  google: { type: Boolean, default: false }
})

UsuariosSchema.methods.toJSON = function () {
  const { __v, _id: id, password, ...usuario } = this.toObject()
  return { id, ...usuario }
}

module.exports = model('Usuario', UsuariosSchema)