var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar;
    }
};
var myReceiverObject = {
    foo: 4,
    bar: 4
};
console.log(Reflect.get(myObject, "foo"), Reflect.get(myObject, "bar"), Reflect.get(myObject, "baz"));
console.log(Reflect.get(myObject, "baz", myReceiverObject));