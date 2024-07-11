const http = require('http'); 
const mapProd = require('./mapearProdutos'); 


const server = http.createServer(function(req,res){
 if (req.url === '/produtos') {
  res.end(mapProd());
} else {
  res.end("Tela inicial");
}
})


server.listen(3000, () => {
  console.log('server running at http://localhost:3000/');
});

