function dec(id) {
    console.log(`evaluated:${id}`);
    return function (target, property, descriptor) {
        console.log(`executed:${id}`);
    }
}

class Example {
    @dec(1)
    @dec(2)
    method() {
    }
}

let exa = new Example();
exa.method();