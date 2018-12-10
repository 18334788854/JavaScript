class A {
    constructor() {
        this.x = 1;
    }
}

class B extends A {
    constructor() {
        super();
        this.x = 2;
        super.x = 3;
        console.log(this.x);
        console.log(super.x);
    }
    toString(){
        console.log("1");
    }
}

new B();
console.log(B.prototype);
console.log(B.prototype.__proto__);