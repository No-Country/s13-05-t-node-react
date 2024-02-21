const express = require('express')
const cors = require('cors')
const connection = require('../dataBase/connection.dataBase.js')
const message = require('../../helpers/message.js')
const openapiSpecification = require('../utils/swagger.utils')
const swaggerUi = require('swagger-ui-express')


class Server {

  #PORT = process.env.PORT
  #usuario = {
    route: '/api/usuario',
    path: require('../routes/usuario.routes.js')
  }

  #band = {
    route: '/api/band',
    path: require("../routes/band.routes.js")
  }

  #musicalGenre = {
    route: '/api/musicalGenre',
    path: require("../routes/musicalGenre.routes.js")
  }


  constructor() {
    this.app = express()
    this.middlewares()
    this.dataBase()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  async dataBase() {
    await connection()
  }

  listen() {
    this.app.listen(this.#PORT, message(this.#PORT))
  }

  routes() {
    this.app.get('/', (req, res) => res.send(`<a href="${process.env.URL_BACK}/docs">Ir a la documentacion</a>`))
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))
    this.app.use(this.#usuario.route, this.#usuario.path)
    this.app.use(this.#band.route, this.#band.path)
    this.app.use(this.#musicalGenre.route, this.#musicalGenre.path)
  }
}

module.exports = Server