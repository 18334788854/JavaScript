var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = [0, 1, null];
function identity(arg) {
    return arg;
}
//----------------1-----------------
var output1 = identity("myString1");
console.log(output1);
//----------------2-----------------
var output2 = identity("myString2");
console.log(output2);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 10, value: 3 });
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 1] = "A";
    Enum[Enum["B"] = 2] = "B";
    Enum[Enum["C"] = 3] = "C";
})(Enum || (Enum = {}));
var b = Enum.B;
console.log(Enum[b]);
var directions = [1 /* Up */, 2 /* Down */, 3 /* Left */, 4 /* Right */];
