let _curry1 = require("./core/_curry1");

module.exports = _curry1(function (value) {
    return function () {
        return value;
    }
});