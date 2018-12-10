"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mixin = require("./decorator").mixin;

var Foo = {
    foo: function foo() {
        console.log('foo');
    }
};
var Test = (_dec = mixin(Foo), _dec(_class = function Test() {
    _classCallCheck(this, Test);
}) || _class);


new Test().foo();