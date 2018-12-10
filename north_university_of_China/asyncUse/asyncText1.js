async function f1() {
    return "hello world!";
}
f1().then(v => console.log(v));
async function f2() {
    throw new TypeError('出错了.');
}
f2().then(v => console.log(v), e => console.log(e));