// function consoleMsg(v) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(v);
//             resolve(v);
//         }, 1000);
//     });
// }
//
// async function foo(val) {
//     if (val > 1) {
//         // 递归委托
//         val = await foo( val - 1 );
//     }
//     return await consoleMsg(val);
// }
//
// async function bar() {
//     var r1 = await foo( 3 );
//     console.log( r1 );
// }
// bar();

// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, 2000);
//     });
// }
//
// async function add1(x) {
//     var a = await resolveAfter2Seconds(20);
//     var b = await resolveAfter2Seconds(30);
//     return x + a + b;
// }
//
// add1(10).then(v => {
//     console.log(v); // prints 60 after 4 seconds.
// });
//
// async function add2(x) {
//     var a = resolveAfter2Seconds(20);
//     var b = resolveAfter2Seconds(30);
//     return x + await a + await b;
// }
//
// add2(10).then(v => {
//     console.log(v);  // prints 60 after 2 seconds.
// });

// function *foo() {
//     console.log( "inside `*foo()`:", yield "B" );
//
//     console.log( "inside `*foo()`:", yield "C" );
//
//     return "D";
// }
//
// function *bar() {
//     console.log( "inside `*bar()`:", yield "A" );
//
//     // `yield`-委托！
//     console.log( "inside `*bar()`:", yield *foo() );
//
//     console.log( "inside `*bar()`:", yield "E" );
//
//     return "F";
// }
//
// var it = bar();
//
// console.log( "outside:", it.next().value );
// // outside: A
//
// console.log( "outside:", it.next( 1 ).value );
// // inside `*bar()`: 1
// // outside: B
//
// console.log( "outside:", it.next( 2 ).value );
// // inside `*foo()`: 2
// // outside: C
//
// console.log( "outside:", it.next( 3 ).value );
// // inside `*foo()`: 3
// // inside `*bar()`: D
// // outside: E
//
// console.log( "outside:", it.next( 4 ).value );

const events = require("events");

if(!Number.isNaN){
    Number.isNaN=function(value){
        return typeof value==="number"&& isNaN(value);
    }
}
