"use strict";

var fs = require("fs");
var db = require("./db");

var files = fs.readdirSync("models");
var js_files = files.filter((f) => {
    return f.endsWith(".js");
}, files);

module.exports={};
for(let filename of js_files){
    console.log(`import model from file ${filename}...`);
    let name = filename.substring(0,filename.length-3);
    module.exports[name]=require(__dirname+"/models/"+filename);
}