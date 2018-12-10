var twice = {
    apply(target, ctx, args) {
        console.log(args, ...arguments);
        return Reflect.apply(...arguments) * 2;
    }
};

function sum(x, y) {
    return x + y;
}

var proxy = new Proxy(sum, twice);
console.log(proxy(1, 2));
console.log(Reflect.apply(sum, undefined, [1, 2]));