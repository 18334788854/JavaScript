"use strict";

var crypto = require("crypto");

var hash = crypto.createHash("md5");
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest("hex"));

