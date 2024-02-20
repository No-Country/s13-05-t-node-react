const { Router } = require('express')
const {
    createMusicalGenre
} = require('../controller/musicalGenre.controller')

const router = Router()

router.post('/', createMusicalGenre)

module.exports = router