function* foo(x) {
    var y = 2 * (yield(x + 1));
    var z = yield (y / 3);
    return x + y + z;
}

var gen = foo(5);
console.log(gen.next());
console.log(gen.next(12));
console.log(gen.next(13));
