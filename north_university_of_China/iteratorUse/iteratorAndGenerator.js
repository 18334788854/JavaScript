var myIterator = {};
myIterator[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
for (let i of myIterator) {
    console.log(i);
}

var obj = {
    * [Symbol.iterator]() {
        yield "hello";
        yield "world";
    }
};
for (let i of obj) {
    console.log(i);
}