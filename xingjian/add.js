let __ = require("./__");
let _curry2 = require("./core/_curry2");

module.exports = _curry2(function (a, b) {
    return Number(a) + Number(b);
});




// function add(...args) {
//     if (args.length === 2) {
//         let num1 = args[0],
//             num2 = args[1];
//         if (typeof num1 === "number" && typeof num2 === "number") {
//             return num1 + num2;
//         }
//         if (typeof num1 === "number" && num2.placeholder) {
//             return function (args) {
//                 if (args && typeof args === "number") {
//                     return num1 + args;
//                 }
//             }
//         }
//         if (typeof num2 === "number" && num1.placeholder) {
//             return function (args) {
//                 if (args && typeof args === "number") {
//                     return num2 + args;
//                 }
//             }
//         }
//     }
//     if (args.length === 1) {
//         let num = args[0];
//         return function (args) {
//             if (args && typeof args === "number") {
//                 return num + args;
//             }
//         }
//     }
// }

