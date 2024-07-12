const produtos = require('./produtos')
const usuarios = require('./usuarios')

const pedidos = [
    {
      usuario: usuarios[0],
      produto: produtos[0],
    },
    {
    
      usuario: usuarios[1],
      produto: produtos[1],
    },
    {
      usuario: usuarios[2],
      produto: produtos[2],
    }
  ]

module.exports = pedidos