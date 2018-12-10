var handler = {
    construct(target, args) {
        console.log(`called: ${Array.from(args).join(", ")}`);
        return {
            value: Array.from(args).reduce(function (result, nextValue) {
                return result + nextValue;
            }, 0)
        };
    }
};

var p = new Proxy(function () {

}, handler);
console.log((new p(10, 20, 30, 40, 50)).value);