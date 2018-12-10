class Set1 {
    constructor() {
        this._set = new Set();
    }

    add(obj) {
        this._set.add(obj);
    }
}

let s = new Set1();
[1, 2, 2, 4, 5, 3, 1, 2].forEach(x => s.add(x));
for (let i of s._set) {
    console.log(i);
}