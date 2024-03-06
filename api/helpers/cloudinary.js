const cloudinary = require('cloudinary').v2
require('colors')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_KEY_SECRET
})

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: 'auto'
}

const savingImage = async img => {
  try {
    const result = await cloudinary.uploader.upload(img, opts);
    if (result && result.secure_url) return result.secure_url;
    else throw new Error("No se pudo cargar la imagen");
  }
  catch (err) {
    throw new Error('ERROR!', err);
  }
}

module.exports = savingImage