function getFoo() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    });
}

var g = function* () {
    try {
        var foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run(generator) {
    var it = generator();

    function go(result) {
        if (result.done) {
            return result.value;
        }
        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);