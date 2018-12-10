var target = {
    _bar: "foo1",
    _prop: "foo2",
    prop: "foo3"
};
var handler = {
    ownKeys(target) {
        return Reflect.ownKeys(target).filter(prop => prop[0] !== "_");
    }
};
var p = new Proxy(target, handler);
for (let key of Object.keys(p)) {
    console.log(p[key]);
}

