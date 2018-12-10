var myModule = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

myModule.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce " + who;
    }

    return {
        hello: hello
    };
});

myModule.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});
// console.log(myModule.get("bar"));
// console.log(myModule.get("foo"));
var bar = myModule.get("bar");
var foo = myModule.get("foo");
//

console.log(bar.hello("hippo"));
foo.awesome();

