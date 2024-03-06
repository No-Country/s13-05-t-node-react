const Usuario = require('../models/usuarios.models')



const bycript = require("bcryptjs");
const scoring = require("../../helpers/scoring");
const calcularDistancia = require("../../helpers/distance/haversine");

const coordTuneMatch = {
  lat: 60.16952,
  lon: 24.93545,
};

module.exports = {
  signUp: async (nombre, correo, password, rest, res) => {
    try {
      const salt = bycript.genSaltSync();
      const usuario = new Usuario({ nombre, correo, password, rest });
      usuario.password = bycript.hashSync(password, salt);

      let distancia = "No tenemos tus coordenadas";

      if ("ultimaPosicion" in rest) {
        const { ultimaPosicion } = rest;
        usuario.ultimaPosicion = ultimaPosicion;
        await usuario.save();
        return res.status(201).json({
          message: `Gracias por Inscribirte ${nombre}`,
          usuario,
          distancia,
        });
      }
      await usuario.save();
      return res.status(201).json({
        message: `Gracias por Inscribirte ${nombre}`,
        usuario,
        distancia,
      });
    } catch (error) {
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack,
      });
    }
  },

  logIn: async (correo, password, rest, res) => {
    let distancia = "No tenemos tus coordenadas";

    try {
      const usuario = await Usuario.findOne({ correo, activo: true });
      const tuneMatchesNuevos = usuario.tuneMatch.filter(x => x.nuevo === true);
      const newTunMatchs = [];

      if (tuneMatchesNuevos.length > 0) {
        await Promise.all(tuneMatchesNuevos.map(async x => {
          newTunMatchs.push(x);
          await Usuario.findByIdAndUpdate(usuario._id,
            { $set: { 'tuneMatch.$[elem].nuevo': false } },
            { arrayFilters: [{ 'elem.nuevo': true }] })
        }))
      }

      if ("ultimaPosicion" in rest) {
        const { ultimaPosicion } = rest;
        usuario.ultimaPosicion = ultimaPosicion;
        await usuario.save();
        distancia = calcularDistancia(ultimaPosicion, coordTuneMatch);
      }

      if (!usuario)
        return res.status(404).json({
          message: "No existe este usuario",
        });

      const noCrypt = bycript.compareSync(password, usuario.password);
      if (!noCrypt)
        return res.status(400).json({
          message: "Contraseña incorrecta",
        });

      if (newTunMatchs.length > 0) {
        return res.status(200).json({
          message: `Gracias por volver ${usuario.nombre}, ${newTunMatchs.length === 1 ? "Tienes un nuevo TuneMatch" : `Tienes ${newTunMatchs.length} nuevos TuneMatches`
            }`,
          usuario,
          distancia,
          newTunMatchs: newTunMatchs
        });
      }

      return res.status(200).json({
        message: `Gracias por volver ${usuario.nombre}`,
        usuario,
        distancia,
      });
    } catch (error) {
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack,
      });
    }
  },

  googleAuth: async (correo, nombre, img, ultimaPosicion, res) => {
    try {
      const salt = bycript.genSaltSync();
      let usuario = await Usuario.findOne({ correo });
      let distancia = "No tenemos tus coordenadas";

      if (usuario.activo === true && usuario.google === false)
        return res.status(400).json({
          message: "Este correo ya está registrado, ingrese con su contraseña en el login"
        })

      if (!usuario) {
        const data = {
          nombre,
          correo,
          password: bycript.hashSync(process.env.GOOGLE_PASSWORD, salt),
          fotos: [img],
          google: true,
        };
        usuario = new Usuario(data);



        if (ultimaPosicion) {
          distancia = calcularDistancia(ultimaPosicion, coordTuneMatch);
          usuario.ultimaPosicion = ultimaPosicion;
        }

        await usuario.save();
        return res.status(201).json({
          message: "Gracias por inscribirte " + nombre,
          usuario,
          distancia,
        });
      }
      if (usuario && usuario.google) {
        const tuneMatchesNuevos = usuario.tuneMatch.filter(x => x.nuevo === true);
        const newTunMatchs = [];

        if (tuneMatchesNuevos.length > 0) {
          await Promise.all(tuneMatchesNuevos.map(async x => {
            newTunMatchs.push(x);
            await Usuario.findByIdAndUpdate(usuario._id,
              { $set: { 'tuneMatch.$[elem].nuevo': false } },
              { arrayFilters: [{ 'elem.nuevo': true }] })
          }))
        }
        if (ultimaPosicion) {
          usuario.ultimaPosicion = ultimaPosicion;
          await usuario.save();
          distancia = calcularDistancia(ultimaPosicion, coordTuneMatch);
        }
        if (newTunMatchs.length > 0) {
          return res.status(200).json({
            message: `Gracias por volver ${usuario.nombre}, ${tuneMatchesNuevos.length === 1 ? "Tienes un nuevo TuneMatch" : `Tienes ${tuneMatchesNuevos.length} nuevos TuneMatches`
              }`,
            usuario,
            distancia,
            newTunMatchs: tuneMatchesNuevos
          });
        }
        return res.status(200).json({
          message: `Gracias por volver ${usuario.nombre}`,
          usuario,
          distancia,
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack,
      });
    }
  },

  matchProfile: async (id, res) => {
    const start = new Date();

    try {
      const fields = ["nombre", "bandas", "generos", "ultimaPosicion", "fotos"];
      let match_list = [];
      const user = await Usuario.findOne({ _id: id }, fields);

      if (!user) {
        res.status(404).json({ message: 'no se ha encontrado el usuario solicitado' });
      } else {
        const matchs = await Usuario.find(
          {
            $and: [
              { _id: { $ne: user.id } },
              { $or: [
                { generos: { $elemMatch: { $in: user.generos } } },
                { bandas: { $elemMatch: { $in: user.bandas } } },
               ] 
              }
            ]
          },
          fields
        );
        if (matchs.length > 0) match_list = scoring(user._doc, matchs);
      }

      const end = new Date();
      res.status(200).json({
        match_list,
        estimated_time: end.getTime() - start.getTime() + "ms",
      });
    } catch (err) {
      console.log(err);
    }
  },

  getTuneMatch: async (id, res) => {
    try {
      const fields = {
        tuneMatch: 1,
        ultimaPosicion: 1,
        _id: 0,
        bandas: 0,
        generos: 0,
      };
      const { tuneMatch, ultimaPosicion: userUP } = await Usuario.findOne(
        { _id: id },
        fields
      );
      const match_ids = tuneMatch.map((o) => o.id);
      let user_profiles = null;

      if (match_ids.length > 0) {
        user_profiles = await Usuario.find(
          {
            _id: { $in: match_ids },
          },
          ["_id", "nombre", "fotos", "generos", "bandas", "ultimaPosicion"]
        );

        user_profiles.forEach((p, i) => {
          let distance = "No es posible calcular la distancia";

          if (
            userUP.lat != null &&
            userUP.lon != null &&
            p["ultimaPosicion"].lat != null &&
            p["ultimaPosicion"].lon != null
          ) {
            distance = calcularDistancia(p["ultimaPosicion"], userUP);
          }
          user_profiles[i]._doc["distancia"] = distance;
        });
      }

      res.status(200).json({ tuneMatch: user_profiles });
    } catch (err) {
      console.log(err);
    }
  },

  getUser: async (id, res) => {
    try {
      const user = await Usuario.findOne({ _id: id });
      if (!user) return res.json({ error: "No existe el usuario" });
      res.json(user);
    } catch (error) {
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack,
      });
    }
  },

  like: async (idUser, idLike, res) => {
    try {
      const [user, likeado] = await Promise.all([
        Usuario.findOne({ _id: idUser, activo: true }),
        Usuario.findOne({ _id: idLike, activo: true })
      ]);

      if (!user || !likeado) {
        return res.status(404).json({
          message: "No existe algún Id en la base de datos"
        });
      }

      const [likedUpdated, myOwnLikes] = await Promise.all([
        Usuario.findOneAndUpdate(
          { _id: idLike, 'likes.userId': { $ne: idUser } },
          { $addToSet: { likes: { userId: idUser } } },
          { new: true }),
        Usuario.findOneAndUpdate(
          { _id: idUser, 'misLikes.likedId': { $ne: idLike } },
          { $push: { misLikes: { likedId: idLike, nombre: likeado.nombre, fotos: likeado.fotos } } },
          { new: true }
        )
      ])
      if (!likedUpdated || !myOwnLikes) return res.status(200).json({
        message: "Ya le has dado like a este usuario."
      })






      const coincidencia1 = user.likes.some(like => like.userId.toString() === idLike.toString());
      const coincidencia2 = likedUpdated.likes.some(like => like.userId.toString() === idUser.toString());

      if (coincidencia1 && coincidencia2) {
        const alreadyMatched = user.tuneMatch.some(match => match.tuneMatchId.toString() === idLike.toString()) &&
          likeado.tuneMatch.some(match => match.tuneMatchId.toString() === idUser.toString());

        if (alreadyMatched) return res.status(200).json({
          message: 'Ambos usuarios ya están en el TuneMatch del otro.'
        });

        const [, likeadoUpdate] = await Promise.all([
          Usuario.findByIdAndUpdate(idUser,
            {
              $addToSet: {
                'tuneMatch':
                {
                  tuneMatchId: idLike,
                  nuevo: false,
                  nombre: likeado.nombre,
                  generos: likeado.generos,
                  bandas: likeado.bandas,
                  miGenero: likeado.miGenero,
                  fotos: likeado.fotos,
                  enBuscaDe: likeado.enBuscaDe,
                  descripcion: likeado.descripcion,
                  ultimaPosicion: likeado.ultimaPosicion,
                  new: true
                }
              },
              $pull: { likes: { userId: idLike } }
            },
            { new: true }
          ),
          Usuario.findByIdAndUpdate(idLike,
            {
              $addToSet: {
                'tuneMatch': {
                  tuneMatchId: idUser,
                  nombre: user.nombre,
                  generos: user.generos,
                  bandas: user.bandas,
                  miGenero: user.miGenero,
                  fotos: user.fotos,
                  enBuscaDe: user.enBuscaDe,
                  descripcion: user.descripcion,
                  ultimaPosicion: user.ultimaPosicion,
                  new: true
                }
              },
              $pull: { likes: { userId: idUser } }
            },
            { new: true }
          )
        ]);

        const tuneMatchLikeado = likeadoUpdate.tuneMatch.find(match => match.tuneMatchId.toString() === idUser.toString());

        return res.status(200).json({
          message: 'Tienes un TuneMatch!',
          tuneMatch: {
            tuneMatchId: tuneMatchLikeado.tuneMatchId,
            nombre: tuneMatchLikeado.nombre,
            generos: tuneMatchLikeado.generos,
            bandas: tuneMatchLikeado.bandas,
            miGenero: tuneMatchLikeado.miGenero,
            fotos: tuneMatchLikeado.fotos,
            enBuscaDe: tuneMatchLikeado.enBuscaDe,
            descripcion: tuneMatchLikeado.descripcion,
            ultimaPosicion: tuneMatchLikeado.ultimaPosicion,

          }
        });
      }

      return res.status(200).json({
        message: "Like agregado con éxito."
      });

    } catch (e) {
      console.error(e);
      return res.status(500).json({
        message: "Error interno del servidor"
      });
    }
  },


  updateUser: async (
    id,
    { nombre, miGenero, distancia, bandas, generos, fotos, enBuscaDe },
    res
  ) => {
    try {
      const user = await Usuario.findOneAndUpdate(
        { _id: id },
        { nombre, miGenero, distancia, bandas, generos, fotos, enBuscaDe },
        { new: true }
      );
      if (!user) return res.json({ error: "No existe el usuario" });

      res.json(user);
    } catch (error) {
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack,
      });
    }
  },
  undoTuneMatch: async (req, res) => {
    try {
      const { idUser, idLike } = req.body;
      const [user, likeado] = await Promise.all([
        Usuario.findOne({ _id: idUser, activo: true }),
        Usuario.findOne({ _id: idLike, activo: true })
      ])

      if (!user || !likeado) {
        return res.status(404).json({
          message: "Uno o ambos usuarios no existen en la base de datos"
        })
      }
      const [userUpdate] = await Promise.all([
        Usuario.findByIdAndUpdate(idUser, { $pull: { tuneMatch: { tuneMatchId: idLike } } }, { new: true }),
        Usuario.findByIdAndUpdate(idLike, { $pull: { tuneMatch: { tuneMatchId: idUser } } }, { new: true })
      ])

      return res.status(200).json({
        message: "TuneMatch deshecho correctamente " + userUpdate.nombre,
      })
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error interno del servidor"
      })
    }
  }

};

