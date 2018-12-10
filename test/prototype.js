function create(o) {
    function F() {

    }

    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    let prototype = create(parent.prototype);
    child.prototype = prototype;
    child.prototype.constructor = child;
}

module.exports = prototype;