const { request, response } = require('express')
const bycript = require('bcryptjs')
const Usuario = require('../models/usuarios')
const calcularDistancia = require('../helpers/distance/haversine')


const signUp = async (req = request, res = response) => {
  const { nombre, correo, password, ...rest } = req.body
  try {
    const salt = bycript.genSaltSync()
    const usuario = new Usuario(
      { nombre, correo, password, ...rest }
    )
    usuario.password = bycript.hashSync(password, salt)

    if ('ultimaPosicion' in rest) {
      const { ultimaPosicion } = rest
      usuario.ultimaPosicion = ultimaPosicion
      await usuario.save()
      return res.status(201).json({
        message: `Gracias por Inscribirte ${nombre}`,
        usuario,
      })
    }

    await usuario.save()

    res.status(201).json({
      message: `Gracias por Inscribirte ${nombre}`,
      usuario,
    })


  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Hubo un error inesperado al grabar los datos',
      error: e.message,
    })
  }
}

const logIn = async (req = request, res = response) => {
  try {
    let distancia = ''
    const { correo, password, ...rest } = req.body
    const usuario = await Usuario.findOne({ correo, activo: true })

    if ('ultimaPosicion' in rest) {
      const { ultimaPosicion } = rest
      usuario.ultimaPosicion = ultimaPosicion
      await usuario.save()
      const coordTuneMatch = {
        lat: 48.8584,
        lon: 2.2945
      };

      distancia = calcularDistancia(ultimaPosicion, coordTuneMatch)

    }
    if (!usuario) {
      return res.status(404).json({
        message: 'No existe este usuario',
      })
    }

    const noCrypt = bycript.compareSync(password, usuario.password)
    if (!noCrypt) {
      return res.status(400).json({
        message: 'Contraseña incorrecta',
      })
    }
    res.status(200).json({
      message: `Gracias por volver ${usuario.nombre}`,
      usuario,
      distancia
    })
  } catch (e) {
    console.log('Error! no se pudo hacer Log-in'.red, e)
    res.status(400).json({
      message: 'No fué posible hacer Log-in',
      error: e.message,
    })
  }
}

module.exports = {
  signUp,
  logIn
}