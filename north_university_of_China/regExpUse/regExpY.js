var s = "aaa_aa_a";
var r1 = /a+/g;
var r2 = /a+/y;
console.log(r1.exec(s), r1.exec(s));
console.log(r2.exec(s), r2.exec(s));

var matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches);