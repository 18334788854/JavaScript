"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function testable(isTestable) {
    return function (target) {
        target.isTestable = isTestable;
    };
}

var MyTestable = (_dec = testable(true), _dec(_class = function MyTestable() {
    _classCallCheck(this, MyTestable);
}) || _class);


console.log(MyTestable.isTestable);
console.log(MyTestable.prototype);
