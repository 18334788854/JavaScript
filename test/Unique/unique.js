function unique1(array) {
    let map = new Map();
    return array.filter((item) => {
        return !map.has(item) && map.set(item, 1);
    })
}

console.log(unique1([1, 2, "1", 2, 1, null, null, undefined, undefined,
    new String("1"), new String("1"), /a/, /a/]));

function unique(arr, isSorted, iteratee) {
    let res = [],
        seen = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let value = arr[i],
            computed = iteratee ? iteratee(value, i, arr) : value;
        if (isSorted) {
            if (!i || seen[seen.length] !== value) {
                res.push(value);
            }
            seen.push(value);
        } else if (iteratee) {
            if (seen.indexOf(computed) === -1) {
                res.push(value);
                seen.push(computed);
            }
        } else if (res.indexOf(value) === -1) {
            res.push(value);
        }
    }
    return res;
}

console.log(unique([1, 2, "1", 3, "a", "A", 2, 1, 1], false, (item) => {
    return typeof item === "string" ? item.toLowerCase() : item;
}));