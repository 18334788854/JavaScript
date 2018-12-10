"use strict";
var redis = require("redis");
var client = redis.createClient();
// console.log(client);
client.on('ready',function(err){
    console.log('ready');
});