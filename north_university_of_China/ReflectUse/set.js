// var myObject = {
//     foo: 1,
//     set bar(value) {
//         return this.foo = value;
//     }
// };
// var myReceiverObject = {
//     foo: 4
// };
//
// Reflect.set(myObject, "bar", 2, myReceiverObject);
// console.log(myObject.foo);
// console.log(myReceiverObject.foo);

let p = {
    a: "a"
};
let handler = {
    set(target, key, value, receiver) {
        console.log("set");
        Reflect.set(target, key, value, receiver);
    },
    defineProperty(target, key, attrs) {
        console.log("defineProperty");
        Reflect.defineProperty(target, key, attrs);
    }
};

let obj = new Proxy(p, handler);
obj.a = "A";