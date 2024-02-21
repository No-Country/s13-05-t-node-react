const { Router } = require('express')
const {
    createMusicalGenre,
    allMusicalGenres
} = require('../controller/musicalGenre.controller')

const router = Router()

router.post('/', createMusicalGenre)
router.get('/', allMusicalGenres)

module.exports = router