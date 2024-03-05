const { check } = require('express-validator')
const validarCampos = require('../../src/middlewares/validarCampos')


const POST_LIKES = [
  check('idUser')
    .notEmpty().withMessage('IdUser no debe estar vacío')
    .isMongoId().withMessage('el idUser proporcionado no es válido'),
  check('idLike')
    .notEmpty().withMessage('idLike no debe estar vacío')
    .isMongoId().withMessage('el idLike proporcionado no es válido'),
  validarCampos
]

module.exports = POST_LIKES