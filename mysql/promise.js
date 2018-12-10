"use strict";
function mult(num) {
    return Promise.resolve(num*num);
}

function add(...rest) {
    var sum = 0;
    for (let n of rest) {
        sum += n;
    }
    return Promise.resolve(mult(sum));

}
(async () => {
    console.log(await add(1, 2, 3, 4, 5));
})();