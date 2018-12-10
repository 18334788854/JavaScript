"use strict";

var _dec, _class;

var _mixins = require("./mixinsBundle");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = {
    foo: function foo() {
        console.log("foo");
    }
};

var MyClass = (_dec = (0, _mixins.mixins)(Foo), _dec(_class = function MyClass() {
    _classCallCheck(this, MyClass);
}) || _class);

console.log(Foo.prototype);
var obj = new MyClass();
obj.foo();
console.log(obj.prototype);
