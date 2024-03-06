const { request, response } = require("express");
const Usuario = require("../models/usuarios.models");
const fs = require('fs')

const googleCheck = require("../../helpers/googleCheck");
const serviceUser = require("../services/serviceUser");
const savingImage = require("../../helpers/cloudinary");

const signUp = async (req = request, res = response) => {
  const { nombre, correo, password, ...rest } = req.body;

  try {
    await serviceUser.signUp(nombre, correo, password, rest, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Hubo un error inesperado al grabar los datos",
      error: e.message,
    });
  }
};

const logIn = async (req = request, res = response) => {
  const { correo, password, ...rest } = req.body;
  try {
    await serviceUser.logIn(correo, password, rest, res);
  } catch (e) {
    console.log("Error! no se pudo hacer Log-in".red, e);
    res.status(400).json({
      message: "No fué posible hacer Log-in",
      error: e.message,
    });
  }
};

const googleAuth = async (req, res = response) => {
  let distancia = "No tenemos tus coordenadas";
  const { id_token, ultimaPosicion } = req.body;
  try {
    const { correo, nombre, img } = await googleCheck(id_token);

    await serviceUser.googleAuth(correo, nombre, img, ultimaPosicion, res);
  } catch (error) {
    res.status(400).json({
      msg: "Token de Google no es válido",
      error: error.message,
    });
  }
};

const matchProfile = async (req = request, res = response) => {
  const { id } = req.params
  try {
    await serviceUser.matchProfile(id, res);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
}

const getTuneMatch = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    await serviceUser.getTuneMatch(id, res);
  } catch (err) {
    console.log(err);
  }
};

const likes = async (req = request, res = response) => {
  const { idUser, idLike } = req.body
  try {
    await serviceUser.like(idUser, idLike, res)
  } catch (e) {
    console.log({ message: e })
  }
}

const getUser = async (req, res) => {
  const { id } = req.params;
  await serviceUser.getUser(id, res);
};

//para modificar el perfil de usuario

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, miGenero, distancia, bandas, generos, fotos, enBuscaDe } =
    req.body;

  try {
    await serviceUser.updateUser(
      id,
      { nombre, miGenero, distancia, bandas, generos, fotos, enBuscaDe },
      res
    );
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

const undo = async (req = request, res = response) => {
  try {
    await serviceUser.undoTuneMatch(req, res)
  } catch (e) {
    console.log({ message: e })
  }
}

const imagen = async (req, res) => {
  try {
    const { id, image } = req.body
    const user = await Usuario.findOne({ _id: id, activo: true })
    if (!user) return res.status(400).json({
      message: "No existe un usuario con el id proporcionado"
    })
    const url = await savingImage(image)
    await Usuario.findByIdAndUpdate(id, { $push: { fotos: url } })

    return res.status(201).json({
      message: 'Imagen subida correctamente',
      url
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Problema al subir la imagen',
      error: error.message,
    })
  }
}

module.exports = {
  signUp,
  logIn,
  googleAuth,
  getUser,
  matchProfile,
  updateUser,
  likes,
  getTuneMatch,
  undo,
  imagen
};
