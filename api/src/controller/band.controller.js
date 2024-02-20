const bandModel = require("../models/band.models")

const createBand = async (req, res) => {
    const { name } = req.body

    if (!name) return res.json({ error: "Debe ingresar el nombre de la banda" })

    const newBand = await bandModel.create({ name })
    res.json({ message: "Banda creada", payload: newBand })
}

module.exports = {
    createBand,
}