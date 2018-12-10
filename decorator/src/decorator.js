function mixin(...list) {
    return (target) => {
        console.log(list);
        console.log(...list);
        Object.assign(target.prototype,...list);
    }
}

module.exports = {mixin};
