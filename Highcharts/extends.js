var func = {
    isArray: (arr) => {
        var arrString = Object.prototype.toString.call(arr);
        return arrString === "[object Array]"
    },
    extend: (a, b) => {
        var n;
        if (!a) {
            a = {};
        }
        for (n in b) {
            if (a.hasOwnProperty(n)) {
                a[n] = b[n];
            }
        }
        return a;
    },
    erase: (arr, item) => {
        if (func.isArray(arr)) {
            var len = arr.length;
            while (len--) {
                if (arr[len] === item) {
                    arr.splice(len, 1);
                    break;
                }
            }
            return arr;
        } else {
            return arr;
        }
    },
    splat: (obj) => {
        return func.isArray(obj) ? obj : [obj];
    },
    pick: function () {
        var args = arguments,
            arg,
            i,
            len = args.length;
        console.log(args);
        for (i = 0; i < len; i++) {
            arg = args[i];
            if (arg !== undefined && arg !== null) {
                return arg;
            }
        }
    },
    pad: function (number, length, padder) {
        // console.log(number,length,padder);
        return new Array((length || 2) + 1 - String(number).length).join(padder || 0) + number;
    },
    test: (str) => {
        return /%$/.test(str) ? str : "0";
    }
};
function wrap(obj,method,func){
    var proceed = obj[method];
    obj[method] = function() {
        var args = Array.prototype.slice.call(arguments),
            outerArgs = arguments,
            ctx = this,
            ret;
        ctx.proceed = function() {
            proceed.apply(ctx, arguments.length ? arguments : outerArgs);
        };
        args.unshift(proceed);
        ret = func.apply(this, args);
        ctx.proceed = null;
        return ret;
    };
}
wrap(func,add,function(a,b){
    return a+b;
});
module.exports = func;