var target = function () {
    return "I am the target."
};
var handler = {
    apply(target, ctx, args) {
        return "I am the proxy."
    }
};
var p = new Proxy(target, handler);
console.log(p(), p.call({}), p.apply({}));