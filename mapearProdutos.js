const todos = require ('./produtos')

const mapProd = () => { 
return todos().map((produtos) => { 
  return `${produtos.nome}\n R$ ${produtos.preco.toFixed(2)}\n`
  })
}


module.exports = mapProd