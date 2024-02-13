const { Router } = require('express')
const { signUp, logIn } = require('../controller/usuario.controller')
const router = Router()
const {
  POST_SIGN_UP,
  POST_LOGIN
} = require('../helpers/checks')

router.post('/sign-up', POST_SIGN_UP, signUp)
router.post('/login', POST_LOGIN, logIn)

module.exports = router