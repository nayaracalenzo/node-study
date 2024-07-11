const http = require('http'); 
const mapProd = require('./mapearProdutos'); 


const server = http.createServer(function(req,res){
 res.end(mapProd());
})


server.listen(3000, () => {
  console.log('server running at http://localhost:3000/');
});

