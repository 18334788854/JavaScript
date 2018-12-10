"use strict";

var http = require("http");

var server = http.createServer(function (req,res) {
    console.log(req.method+":"+req.url);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello world!</h1>");
    res.end();
});
server.listen(8080,"127.0.0.2");
console.log("listen to 127.0.0.2:8080");