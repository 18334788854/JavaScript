var handler = {
    getOwnPropertyDescriptor(target, prop) {
        if (prop[0] === "_") {
            return;
        }
        return Object.getOwnPropertyDescriptor(target, prop);
    }
};
var target = {_prop: "foo1", prop: "foo2"};
var proxy = new Proxy(target, handler);

console.log(Object.getOwnPropertyDescriptor(proxy, "_prop"));
console.log(Object.getOwnPropertyDescriptor(proxy, "prop"));