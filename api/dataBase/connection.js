const mongoose = require('mongoose')
require('colors')

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN)
    console.log('DATABASE CONNECTED'.green)
  } catch (e) {
    throw new Error(`ERROR!! ${e.message}`.red)
  }
}

module.exports = connection