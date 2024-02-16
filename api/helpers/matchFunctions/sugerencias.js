const Usuario = require('../../models/usuarios')

const sugerenciasFunction = async idUsuario => {
  const usuario = await Usuario.findOne({
    id: idUsuario,
    activo: true,
    baneado: false
  })

  const genero = usuario.genero
  const bandas = usuario.bandas
}