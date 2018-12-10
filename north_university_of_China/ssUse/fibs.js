function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [a, b, c, d, e, f] = fibs();
console.log(a, b, c, d, e, f);//0,1,1,2,3,5

let {foo: baz} = {foo: 'aaa', bar: 'bbb'};//baz:'aaa'
let {first: f, last: l} = {first: 'hello', last: 'world'};//f:'hello'  l:'world'
