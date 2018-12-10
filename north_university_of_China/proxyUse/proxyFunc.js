//get和set拦截操作示例
// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//         console.log(`getting ${key}`);
//         return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//         console.log(`setting ${key}`);
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// obj.count = 1;
// ++obj.count;

// var handler = {
//     get: function (target, key) {
//         if (key === "prototype") {
//             return Object.prototype;
//         }
//         return "hello " + key;
//     },
//     apply: function (target, thisbinding, args) {
//         return Object.prototype.toString.call(thisbinding) + "  " + args[0];
//     },
//     construct: function (target, args) {
//         return {value: args[1]}
//     }
// };
// var fproxy = new Proxy(function (x, y) {
//     return x + y;
// }, handler);
//
// console.log(fproxy(1, 2));
// console.log(new fproxy(1, 2));
//has和deleteProperty拦截操作示例
var handler = {
    // has(target, key) {
    //     if (key === "a") {
    //         return false;
    //     }
    //     return true;
    // },
    deleteProperty(target, key) {
        if (key === "b") {
            console.log(key);
            return false;
        }
        console.log(key);
        return true;
    }
};

var proxy = new Proxy({a: 1, b: 2}, handler);
// console.log("a" in proxy, "b" in proxy);
delete proxy.a;
delete proxy.b;
console.log(proxy);

