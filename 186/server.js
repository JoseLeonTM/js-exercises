var http = require('http');
var fs = require('fs');
var prev = fs.readFileSync('prev.html');
http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'text/plain'});
    res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
    res.end(prev);
}).listen('3000');