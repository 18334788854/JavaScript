'use strict';
const eventEmitter = require("events");

const {graphql, buildSchema} = require("graphql");

let Schema = buildSchema(`
    type Query{
        hello:String,
    }`);

let root = {
    hello: () => "hello world!",
};

graphql(Schema, "{hello1}", root).then(function (response) {
    console.log(response);
});
var person = 'Mike';
var age = 28;
function myTag(strings, personExp, ageExp) {
    for(let string of strings){
        console.log(string);
    }
    var str0 = strings[0]; // "that "
    var str1 = strings[1]; // " is a "
    var ageStr;
    if (ageExp > 60){
        ageStr = 'old person';
    } else {
        ageStr = 'young person';
    }

    return str0 + personExp + str1 + ageStr;

}
var output = myTag`that ${ person } is a ${ age }`;
console.log(output);    // that Mike is a young person

class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name);