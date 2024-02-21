const musicalGenreModel = require("../models/musicalGenre.models")

const createMusicalGenre = async (req, res) => {
    try {
        const { name } = req.body

        if (!name) return res.status(400).json({ error: "Debe ingresar el nombre del genero musical" })

        const newMusicalGenre = await musicalGenreModel.create({ name })
        res.status(201).json({ message: "Genero creado", payload: newMusicalGenre })
    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al crear los datos',
            error: err.message,
        })
    }
}

const allMusicalGenres = async (req, res) => {
    try {
        const { docs, page, totalPages, hasNextPage, nextPage, hasPrevPage, prevPage } = await musicalGenreModel.paginate({ status: 'active' }, { page: 1, limit: 50 })
        const musicalGenres = { bands: docs, page, totalPages, hasNextPage, nextPage, hasPrevPage, prevPage }
        res.status(200).json(musicalGenres)
    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al traer los datos',
            error: err.message,
        })
    }
}

module.exports = {
    createMusicalGenre,
    allMusicalGenres
}