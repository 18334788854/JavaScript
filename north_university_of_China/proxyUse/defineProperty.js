var handler = {
    defineProperty(target, prop, descriptor) {
        return false;
    }
};
var target = {};
var p = new Proxy(target, handler);
p.foo1 = "bar1";
Object.defineProperty(p, "foo", {value: "bar"});