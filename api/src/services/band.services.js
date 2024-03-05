const bandModel = require("../models/band.models")

const createBand = async (name, res) => {
    try {
        if (!name) return res.status(400).json({ error: "Debe ingresar el nombre de la banda" })

        const newBand = await bandModel.create({ name })
        res.status(201).json({ message: "Banda creada", payload: newBand })
    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al crear los datos',
            error: err.message,
        })
    }
}

const allBands = async (queryPage, limit, res) => {
    try {
        const { docs, page, totalPages, hasNextPage, nextPage, hasPrevPage, prevPage } = await bandModel.paginate({ status: 'active' }, { page: queryPage, limit })
        const bands = { bands: docs, page, totalPages, hasNextPage, nextPage, hasPrevPage, prevPage }
        res.status(200).json(bands)
    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al traer los datos',
            error: err.message,
        })
    }
}

module.exports = {
    createBand,
    allBands
}