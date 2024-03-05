const { check } = require('express-validator')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const validarCampos = require('../../src/middlewares/validarCampos')

const POST_IMAGE = [
  upload.single('image'),
  check('id')
    .notEmpty().withMessage('Id no debe estar vacío')
    .isString().withMessage('el id proporcionado no es un String')
    .custom((_, { req }) => {
      if (!req.file) {
        throw new Error('No se proporcionó ninguna imagen');
      }
      return true;
    }),
  validarCampos,
]

module.exports = POST_IMAGE