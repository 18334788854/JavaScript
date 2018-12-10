var count = 1;
var container = document.getElementById("container");
var btn = document.getElementById("btn");

function getUserAction(e) {
    console.log(e);
    container.innerHTML = count++;
}

function debounce(func, wait, immediate) {
    var timeout, result;
    var debounced = function () {
        let context = this,
            args = arguments;
        if (timeout) {
            clearTimeout(timeout);
        }
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);
            if (callNow) result = func.apply(context, args)
        }
        else {
            timeout = setTimeout(function () {
                result = func.apply(context, args)
            }, wait);
        }

        return result;
    };
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
        count = 1;
    };
    return debounced;
}

var setUserAction = debounce(getUserAction, 500, true);

container.onmousemove = setUserAction;
btn.onclick = setUserAction.cancel;