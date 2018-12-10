let count = 0,
    container = document.getElementById("container"),
    throttleAction;

function getCount() {
    container.innerHTML = count;
    count++;
    console.log(count);
}

function throttle(func, wait, options = {}) {
    let timeout, context, args,
        previous = 0;
    let later = function () {
        previous = options.lending === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
        if (!timeout) {
            context = args = null;
        }
    };
    let throttled = function () {
        let now = Date.now();
        if (!previous && options.lending === false) {
            previous = now;
        }
        let remaining = wait - (now - previous);
        args = arguments;
        context = this;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) {
                console.log("context=args=null;");
                context = args = null;
            }
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    };
    return throttled;
}


throttleAction = throttle(getCount, 3000, {lending: false, trailing: true});
container.onmousemove = throttleAction;
