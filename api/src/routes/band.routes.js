const { Router } = require('express')
const {
    createBand
} = require('../controller/band.controller')

const router = Router()

router.post('/', createBand)

module.exports = router