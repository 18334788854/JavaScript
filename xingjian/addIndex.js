function addIndex(...arg) {
    let fn = arg[0],
        array = arg[1];
    if (typeof fn !== "function") {
        throw new Error("The first argument is not a function!");
    }
    if (array && Object.prototype.toString.call(array) !== "[object Array]") {
        throw new Error("The second argument id not a array！");
    }
    if (fn && array === undefined) {
        return function (...arg1) {
            let fn = arg1[0],
                array = arg1[1];
            if (typeof fn !== "function") {
                throw new Error("The first argument is not a function!");
            }
            if (Object.prototype.toString.call(array) !== "[object Array]") {
                throw new Error("The second argument id not a array！");
            }
            let arr = [];
            for (let i in array) {
                arr[i] = fn.call(null, array[i], i);
            }
            return arr;
        }
    }
}

module.exports=addIndex;