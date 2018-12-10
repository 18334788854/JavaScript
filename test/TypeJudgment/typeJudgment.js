let class2type = {};

"Undefined Null Boolean String Number Object Date Error Array RegExp Function".split(" ").map(item => {
    class2type["[object " + item + "]"] = item.toLowerCase();
});

function type(obj) {
    if (obj === null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj
}

console.log(type(null));
console.log(type(undefined));
console.log(class2type.toString)


// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof true);
// console.log(typeof 28);
// console.log(typeof "xingjian");
// console.log(typeof {});
//
// function a() {
// }
//
// console.log(typeof a);
// console.log(Object.prototype.toString.call(undefined));
// console.log(Object.prototype.toString.call(null));
// console.log(Object.prototype.toString.call(true));
// console.log(Object.prototype.toString.call(1));
// console.log(Object.prototype.toString.call("xingjian"));
// console.log(Object.prototype.toString.call({}));
// console.log(Object.prototype.toString.call(a));
// console.log(Object.prototype.toString.call(JSON));

// class B{
//     constructor(){}
// }
// let b = new B();
// console.log(Object.prototype.toString.call(b));