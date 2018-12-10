"use strict";

var fs = require("fs");

var rs = fs.createReadStream("test.txt","utf-8");
var ws = fs.createWriteStream("writetest.txt","utf-8");
rs.pipe(ws);