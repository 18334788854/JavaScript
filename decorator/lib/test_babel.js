"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _dec, _class;

var mixin = require("./decorator").mixin;

var Test = (_dec = mixin(true), _dec(_class = function Test() {
  _classCallCheck(this, Test);
}) || _class);

console.log(Test.isMixin);