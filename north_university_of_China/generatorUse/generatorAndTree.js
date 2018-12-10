function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            yield* iterTree(tree[i]);
        }
    } else {
        yield tree;
    }
}

var tree = ["a", ["b", "c"], [["d", "e"], "f", "g"]];
for (let i of iterTree(tree)) {
    console.log(i);
}