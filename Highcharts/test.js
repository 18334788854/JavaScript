var func = require('./extends');
console.log(func);
var a = {
    x: 1,
    y: 1,
    z: () => {
        return 1;
    },
    n: () => {
        return 1;
    }
};
var b = {
    x: 2,
    y: () => {
        return 2;
    },
    z: 2,
    n: 2
};
class C{
    constructor(){
       this.index = 0;
    }
    get(){
        return 1;
    }
}
function D(){
    this.index = 0;
}
D.prototype={
    get(){
        return 2;
    }
};
var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(func);
console.log(C.name,D.name,D.name!=="Object");
console.log(func.extend(a, b));
console.log(func.erase(arr,5));
console.log(func.splat(1));
console.log(func.pick(10,2,3,4,5));
console.log(func.pad(100,5,""));
console.log(func.test("10%"));
