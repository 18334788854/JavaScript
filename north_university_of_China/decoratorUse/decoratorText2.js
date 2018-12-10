import {mixins} from "./mixinsBundle";

const Foo = {
    foo() {
        console.log("foo");
    }
};

@mixins(Foo)
class MyClass {
}

let obj = new MyClass();
obj.foo();