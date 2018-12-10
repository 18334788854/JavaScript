var handler = {
    has(target, prop) {
        if (prop[0] === "_") {
            return false;
        }
        return prop in target;
    }
};
var target = {_prop: "foo1", prop: "foo2"};
var proxy = new Proxy(target, handler);
console.log("_prop" in proxy, "prop" in proxy,proxy["_prop"]);