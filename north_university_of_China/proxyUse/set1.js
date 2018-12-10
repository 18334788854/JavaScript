var validator = {
    set(target, prop, value) {
        if (prop === "age") {
            if (!Number.isInteger(value)) {
                throw new TypeError("The age is not an integer!");
            }
            if (value > 200) {
                throw new RangeError("The age seems invalid!");
            }
        }
        target[prop] = value;
    }
};
var person = new Proxy({}, validator);
person.age = 100;
console.log(person.age);
//person.age = "young";
//person.age = 300;
