const { check } = require('express-validator')
const validarCampos = require('../../src/middlewares/validarCampos')

const POST_IMAGE = [

  check('id')
    .notEmpty().withMessage('Id no debe estar vacío')
    .isMongoId().withMessage('El id No es id Válido'),
  check('image')
    .notEmpty().withMessage('No viene imagen adjunta')
  ,
  validarCampos,
]

module.exports = POST_IMAGE