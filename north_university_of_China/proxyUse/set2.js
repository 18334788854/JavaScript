var handler = {
    get(target, prop) {
        invariant(prop, "get");
        return target[prop];
    },
    set(target, prop, value) {
        invariant(prop, "set");
        target[prop] = value;
        return true;
    }
};

function invariant(key, action) {
    if (key[0] === "_") {
        console.log(`Invalid attempt to ${action} private "${key}" property`);
    }
}

var target = {};
var proxy = new Proxy(target, handler);
proxy._prop;
proxy._prop = 100;
