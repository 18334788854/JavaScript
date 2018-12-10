class A {}
class B extends A{}
var a = new A();
var b = new B();
console.log(a.__proto__);
console.log(a.__proto__ === A.prototype);//true
console.log(b.__proto__);
console.log(b.__proto__.__proto__===A.prototype);//true