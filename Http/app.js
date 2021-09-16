const { read } = require("fs");
var http = require("http") //import modulo http

http.createServer(function(req,res){
    res.end("Hello Word!")//conteudo
}).listen(8081); //porta do servidor
console.log("o servidor rodando! ")