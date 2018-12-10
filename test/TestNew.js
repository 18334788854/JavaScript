const prototype = require("./prototype");

function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
    console.log("console");
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

prototype(Child, Parent);
// function F() {
// }
// F.prototype = Parent.prototype;
// Child.prototype = new F();
// Child.prototype.constructor = Child;
let child1 = new Child("xingjian", 999);
console.log(child1);

