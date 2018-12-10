// import foo from "foo";
// import bar from "bar";

// var bar = require("./bar");
// var foo = require("./foo");

// console.log(bar.hello("hippo"));
// foo.awesome();

var a = Object(false);
console.log(a);
if(!a){
    console.log("runtime!");
}