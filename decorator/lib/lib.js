"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var counter = 3;
function incCounter() {
    exports.counter = counter += 1;
}
exports.counter = counter;
exports.incCounter = incCounter;