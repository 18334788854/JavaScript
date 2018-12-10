"use strict";

function mixin() {
    for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
        list[_key] = arguments[_key];
    }

    return function (target) {
        var _console;

        console.log(list);
        (_console = console).log.apply(_console, list);
        Object.assign.apply(Object, [target.prototype].concat(list));
    };
}

module.exports = { mixin: mixin };