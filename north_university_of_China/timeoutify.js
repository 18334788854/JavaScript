function timeoutify(fn, delay) {
    var intv = setTimeout(function () {
        intv = null;
        fn(new Error("Timeout"));
    }, delay);
    return function () {
        if (intv) {
            clearTimeout(intv);
            fn.apply(this, arguments);
        }
    }
}