var obj = {
    _num: 0,
    get num() {
        return this._num;
    },
    set num(value) {
        if (this._num > value) {
            this._num++;
        } else {
            this._num = value;
        }
    }
};

let mix = (object) => {
    return {
        with: (...mixins) => mixins.reduce(
            (c, mixin) => {
                return Object.create(c, Object.getOwnPropertyDescriptors(mixin));
            }, object)
    }
};
let a = {a: "a"};
let b = {b: "b"}
let c = {c: "c"};
let d = mix(c).with(a, b);
console.log(d.a, d.b, d.c);

module.exports = {obj, mix};