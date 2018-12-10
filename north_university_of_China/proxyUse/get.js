var pipe = (function () {
    return function getProp(value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get: function (target, fnName) {
                if (fnName === "get") {
                    return funcStack.reduce(function (val, fn) {
                        return fn(val);
                    }, value);
                }
                if (fnName in windowp) {
                    funcStack.push(windowp[fnName]);
                }
                console.log(funcStack);
                return oproxy;
            }
        });
        return oproxy;
    }
})();

var windowp = {
    double(n) {
        return n * 2;
    },
    pow(n) {
        return n * n;
    },
    reverseInt(n) {
        return n.toString().split("").reverse().join("") | 0;
    }
};

console.log(pipe(3).double.pow.reverseInt.get);