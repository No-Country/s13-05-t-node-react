const { Router } = require('express')
const {
    createBand,
    allBands
} = require('../controller/band.controller')

const router = Router()

router.post('/', createBand)
router.get('/', allBands)

module.exports = router