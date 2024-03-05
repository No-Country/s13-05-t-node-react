const { request, response } = require('express')
const { validationResult } = require('express-validator')

const validarCampos = (req = request, res = response, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({
    message: "Error al enviar data del front",
    errors
  })

  next()
}

module.exports = validarCampos