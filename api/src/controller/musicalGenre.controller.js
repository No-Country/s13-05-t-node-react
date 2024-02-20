const musicalGenreModel = require("../models/musicalGenre.models")

const createMusicalGenre = async (req, res) => {
    const { name } = req.body

    if (!name) return res.json({ error: "Debe ingresar el nombre del genero musical" })

    const newMusicalGenre = await musicalGenreModel.create({ name })
    res.json({ message: "Genero creado", payload: newMusicalGenre })
}

module.exports = {
    createMusicalGenre,
}