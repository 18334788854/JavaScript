"use strict";

var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var rootpath = path.resolve(process.argv[2]||".");
console.log("当前路径"+rootpath);

var server = http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    var filename = path.join(rootpath,pathname);
    fs.stat(filename,function (err,stat) {
        if(err){
            console.log("响应码：404"+request.url);
            response.writeHead(404);
            response.end("404 Not Found!");
        }else{
            if(stat.isDirectory()){
                filename=path.join(filename,"index.html");
                console.log('响应码：200 ' + request.url);
                response.writeHead(200);
                fs.createReadStream(filename).pipe(response);
            }
            if(stat.isFile()){
                console.log('响应码：200 ' + request.url);
                response.writeHead(200);
                fs.createReadStream(filename).pipe(response);
            }
        }
    });

});

server.listen(8080,"127.0.0.1",function () {
    console.log("listen to 127.0.0.1:8080");
});