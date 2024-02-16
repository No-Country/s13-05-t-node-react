const { request, response } = require('express')
const bycript = require('bcryptjs')
const Usuario = require('../models/usuarios')
const calcularDistancia = require('../helpers/distance/haversine')
const googleCheck = require('../helpers/googleCheck')


const coordTuneMatch = {
  lat: 60.16952,
  lon: 24.93545
};

const signUp = async (req = request, res = response) => {
  let distancia = 'No tenemos tu distancia'
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
        distancia
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
  let distancia = 'No tenemos tus coordenadas'
  try {
    const { correo, password, ...rest } = req.body
    const usuario = await Usuario.findOne({
      correo,
      activo: true
    })

    if ('ultimaPosicion' in rest) {
      const { ultimaPosicion } = rest
      usuario.ultimaPosicion = ultimaPosicion
      await usuario.save()
      distancia = calcularDistancia(ultimaPosicion, coordTuneMatch)
    }

    if (!usuario) return res.status(404).json({
      message: 'No existe este usuario',
    })

    const noCrypt = bycript.compareSync(password, usuario.password)
    if (!noCrypt) return res.status(400).json({
      message: 'Contraseña incorrecta',
    })

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

const googleAuth = async (req, res = response) => {

  let distancia = 'No tenemos tus coordenadas'
  const { id_token, ultimaPosicion } = req.body
  try {
    const { correo, nombre, img } = await googleCheck(id_token)
    const salt = bycript.genSaltSync()
    let usuario = await Usuario.findOne({ correo })


    if (!usuario) {
      const data = {
        nombre,
        correo,
        password: bycript.hashSync(process.env.GOOGLE_PASSWORD, salt),
        fotos: [img],
        google: true
      };
      usuario = new Usuario(data)

      if (ultimaPosicion) {
        distancia = calcularDistancia(ultimaPosicion, coordTuneMatch)
        usuario.ultimaPosicion = ultimaPosicion
      }

      await usuario.save()
      return res.status(201).json({
        message: 'Gracias por inscribirte ' + nombre,
        usuario,
        distancia
      })
    }
    if (usuario && usuario.google) {
      if (ultimaPosicion) {
        usuario.ultimaPosicion = ultimaPosicion
        await usuario.save()
        distancia = calcularDistancia(ultimaPosicion, coordTuneMatch)
      }
      return res.status(200).json({
        message: `Gracias por volver ${usuario.nombre}`,
        usuario,
        distancia
      })
    }

  } catch (error) {

    res.status(400).json({
      msg: 'Token de Google no es válido',
      error: error.message
    })

  }
}

const creatingProfile = async (req = request, res = response) => {
  const { ...rest } = req.body
  try {
    const usuario = new Usuario()

  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  signUp,
  logIn,
  googleAuth,
  creatingProfile
}