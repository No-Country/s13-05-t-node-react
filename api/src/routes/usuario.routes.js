const { Router } = require('express')

const {
  signUp,
  logIn,
  googleAuth,
  getUser,
  matchProfile,
  updateUser,
  likes,
  getTuneMatch,
  undo,
  imagen
} = require('../controller/usuario.controller.js')

const router = Router()

const {
  POST_SIGN_UP,
  POST_LOGIN,
  POST_GOOGLE,
  POST_LIKES,
  POST_IMAGE
} = require('../../helpers/checks')

router.post('/sign-up', POST_SIGN_UP, signUp)
router.post('/login', POST_LOGIN, logIn)
router.post('/google', POST_GOOGLE, googleAuth)
router.get('/list/:id', getUser)
router.get('/match/profile/:id', matchProfile)
router.get('/match/list/:id', getTuneMatch)
router.put('/:id', updateUser)
router.post('/likes', POST_LIKES, likes)
router.post('/undo', POST_LIKES, undo)
router.post('/imagen', POST_IMAGE, imagen)



module.exports = router