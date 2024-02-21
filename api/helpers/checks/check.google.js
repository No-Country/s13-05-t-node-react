const { check } = require('express-validator')
const validarCampos = require('../../src/middlewares/validarCampos')

const POST_GOOGLE = [
  check('id_token', 'El id_token es necesario').notEmpty(),
  validarCampos
]

module.exports = POST_GOOGLE