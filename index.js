const http = require('http'); 
const usuarios = require('./usuarios')
const pedidos = require('./pedidos');
const produtos = require('./produtos');

const server = http.createServer(function(req,res){
 if (req.url === '/produtos') {
  res.end(produtos);
} else if(req.url === '/usuarios') {
  res.end(usuarios);
} else if (req.url === '/pedidos') {
  res.end(pedidos);
 } else { 
  res.end("page not found: erro 404");
}
})


server.listen(3000, () => {
  console.log('server running at http://localhost:3000/');
});

