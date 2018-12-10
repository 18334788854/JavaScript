function onlyOne() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += Number(!!arguments[i]);
    }
    return sum === 1;
}

function display(a, b) {
    for (let i of arguments) {
        console.log(i);
    }
}

// console.log(display.length);
// console.log(display(1, 2, 3, 4, 5, 6));

console.log(!{});

// var a, b;
// a = do {
//     if (true) {
//         b = 4 + 38;
//     }
// };

// function foo() {
//     bar:{
//         console.log("hello");
//         break bar;
//         console.log("never run!");
//     }
//     console.log("world");
// }
//
// foo();


