function coo(gen) {
    var generator = gen();

    function next(nextF) {
        try {
            var next = nextF();
        } catch (e) {
            return reject(e);
        }
        if (next.done) {
            return resolve(next.value);
        }
        Promise.resolve(next.value).then(function (v) {
            next(function () {
                return generator.next(v);
            })
        }, function (e) {
            next(function (e) {
                return generator.next(e);
            })
        })
    }
    next(function () {
        return generator.next(undefined);
    })
}