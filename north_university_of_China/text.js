var textString1 = "I am a student1!";
console.log(typeof textString1);
console.log(textString1 instanceof String);

var textString2 = new String("I am a student2!");
console.log(typeof textString2);
console.log(textString2 instanceof String);

var myObject = {
    a: 2,
    b: 3
};
Object.defineProperty(myObject, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
        var o = this;
        var idx = 0;
        var ks = Object.keys(o);
        return {
            next: function () {
                // console.log(idx);
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                };
            }
        };
    }
});

var it = myObject[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (var v of myObject) {
    console.log(v);
}

console.log(JSON.stringify(myObject));
console.log(myObject);