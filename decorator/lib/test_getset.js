"use strict";

var obj = {
    _num: 0,
    get num() {
        return this._num;
    },
    set num(value) {
        if (this._num > value) {
            this._num++;
        } else {
            this._num = value;
        }
    }
};

var mix = function mix(object) {
    return {
        with: function _with() {
            for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
                mixins[_key] = arguments[_key];
            }

            return mixins.reduce(function (c, mixin) {
                return Object.create(c, Object.getOwnPropertyDescriptors(mixin));
            }, object);
        }
    };
};
var a = { a: "a" };
var b = { b: "b" };
var c = { c: "c" };
var d = mix(c).with(a, b);
console.log(d.a, d.b, d.c);

module.exports = { obj: obj, mix: mix };