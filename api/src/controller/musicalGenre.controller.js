const musicalGenreService = require("../services/musicalGenre.services")

const createMusicalGenre = async (req, res) => {
    try {
        const { name } = req.body
        await musicalGenreService.createMusicalGenre(name, res)
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
        let { queryPage, limit } = req.query
        queryPage = +queryPage || 1
        limit = +limit || 50

        await musicalGenreService.allMusicalGenres(queryPage, limit, res)
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