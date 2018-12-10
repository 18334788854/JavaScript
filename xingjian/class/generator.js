class Foo {
    constructor(...args) {
        this.args = args;
        console.log(new.target === Foo);
    }

    * [Symbol.iterator]() {
        for (let i of this.args) {
            yield i;
        }
    }
}

for (let i of new Foo('xing', 'jian')) {
    console.log(i);
}