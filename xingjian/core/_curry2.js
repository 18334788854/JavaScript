let isPlaceholder = require("./isPlaceholder");
let _curry1 = require("./_curry1");

module.exports = function (fn) {
    return function f2(...args) {
        switch (args.length) {
            case 0:
                return f2;
            case 1:
                return isPlaceholder(args[0]) ? f2 : _curry1(function (_b) {
                    return fn(args[0], _b);
                });
            case 2:
                return isPlaceholder(args[0]) && isPlaceholder(args[1]) ? f2
                    : isPlaceholder(args[0]) ? _curry1(function (_a) {return fn(_a, args[1]);})
                    : isPlaceholder(args[1]) ? _curry1(function (_b) {return fn(args[0], _b);})
                    : fn(...args);

        }
    }
};