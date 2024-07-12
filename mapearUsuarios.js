const obj = require('./objetos')

const mapUsuarios = () => {
  return obj().map((usuarios) => {
    return usuarios.nome
    
  })
}

module.exports = mapUsuarios