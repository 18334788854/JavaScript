function map(...arg) {
    let fn = arg[0],
        array = arg[1];
    if (typeof fn !== "function") {
        throw new Error("The first argument is not a function!");
    }
    if (Object.prototype.toString.call(array) !== "[object Array]") {
        throw new Error("The second argument id not a array！");
    }
    let arr = [];
    for (let i in array) {
        arr[i] = fn.call(null, array[i]);
    }
    return arr;
}
module.exports=map;
// console.log(map(val => val * val, [1, 2, 3, 4, 5]));


