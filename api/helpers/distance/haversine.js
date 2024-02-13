const earthRadiusKm = 6371
const gradosARadian = grados => grados * (Math.PI / 180)

const calcularDistancia = (coordUsuario, coordTuneMatch) => {

  const dLat = gradosARadian(coordTuneMatch.lat - coordUsuario.lat)
  const dLon = gradosARadian(coordTuneMatch.lon - coordUsuario.lon)

  const lat1 = gradosARadian(coordUsuario.lat)
  const lat2 = gradosARadian(coordTuneMatch.lat)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distancia = earthRadiusKm * c

  return Math.floor(distancia)
}

module.exports = calcularDistancia
