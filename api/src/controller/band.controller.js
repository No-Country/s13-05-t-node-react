const bandService = require("../services/band.services")

const createBand = async (req, res) => {
    try {
        const { name } = req.body
        await bandService.createBand(name, res)

    }
    catch (err) {
        res.status(500).json({
            message: 'Hubo un error inesperado al crear los datos',
            error: err.message,
        })
    }
}

const allBands = async (req, res) => {
    try {
        let { queryPage, limit } = req.query
        queryPage = +queryPage || 1
        limit = +limit || 50

        await bandService.allBands(queryPage, limit, res)
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