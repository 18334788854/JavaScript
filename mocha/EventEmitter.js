var EventEmitter = require("events").EventEmitter;

var eventtest = new EventEmitter();

eventtest.on("something", function (a, b) {
    if(typeof a!=="number"){
        a=0;
    }
    if(typeof b!=="number"){
        b=0;
    }
    if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
});

console.log("第一次触发");
eventtest.emit("something", "1", 2);
console.log("第一次触发");
eventtest.emit("something", 3, 4);