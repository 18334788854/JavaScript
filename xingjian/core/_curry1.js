let isPlaceholder = require("./isPlaceholder");


module.exports = function (fn) {
    return function f1(...args) {
        if (args.length === 0) {
            console.log("args.lentth === 0");
            return f1;
        }
        if (args.length === 1) {
            console.log("args.lentth === 1");
            let a = args[0];
            if (isPlaceholder(a)) {
                return f1;
            } else {
                return fn.apply(this, args);
            }
        }
    }
};