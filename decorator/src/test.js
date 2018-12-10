let mixin = require("./decorator").mixin;

const Foo = {
    foo() { console.log('foo') }
};
@mixin(Foo)
class Test{

}

new Test().foo();

