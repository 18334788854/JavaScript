var _dec, _class;

var mixin = require("./decorator").mixin;

let Test = (_dec = mixin(true), _dec(_class = class Test {}) || _class);


console.log(Test.isMixin);
