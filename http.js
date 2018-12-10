'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    if (request.url === '/user/12345') {
        if (request.method === 'GET') {
            console.log('200 ' + request.url);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('<h1>Hello,xingjian!</h1>')
        } else if (request.method === 'POST') {
            console.log('200' + request.url);
            request.on('data', function (data) {
                var shuju = {},
                    dd = [];
                var datas = data.toString().split("&");
                for (var i = 0; i < datas.length; i++) {
                    dd = datas[i].split('=');
                    shuju[dd[0]] = dd[1];
                }
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(  shuju.name + "__" + shuju.password );
            })
        }
    } else {
        var pathname = url.parse(request.url).pathname;
        // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
        var filepath = path.join(root, pathname);
        // 获取文件状态:
        fs.stat(filepath, function (err, stats) {
            if (!err && stats.isFile()) {
                // 没有出错并且文件存在:
                console.log('200 ' + request.url);
                // 发送200响应:
                response.writeHead(200);
                // 将文件流导向response:
                fs.createReadStream(filepath).pipe(response);
            } else {
                // 出错了或者文件不存在:
                console.log('404 ' + request.url);
                // 发送404响应:
                response.writeHead(404);
                response.end('404 Not Found');
            }
        });
    }
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
