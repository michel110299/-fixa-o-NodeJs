const { read } = require("fs");
var http = require("http")

http.createServer(function(req,res){
    res.end("Hello Word!")
}).listen(8081);

console.log("o servidor rodando! ")