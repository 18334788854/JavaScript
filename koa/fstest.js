"use strict";

var fs = require("fs");

fs.readFile("hello.js","utf-8",function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
        fs.writeFile("test.txt",data,function (err) {
            if(err){
                console.log(err);
            }
        })
    }
});

