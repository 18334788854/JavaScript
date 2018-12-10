var cookie = (function () {
    var allCookies = document.cookie.split(";"),
        cookies = {},
        cookiesIndex = 0,
        cookiesLength = allCookies.length,
        cookie;
    for (; cookiesIndex < cookiesLength; cookiesIndex++) {
        cookie = allCookies[cookiesIndex].split("=");
        cookies[encodeURIComponent(cookie[0])] = encodeURIComponent(cookie[1]);
    }
    return {
        get: function (name) {
            return cookies[name] || "";
        },
        set: function (name, value) {
            cookies[name] = value;
            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        }
    }
}());

cookie.set('name','xingjian');
console.log(cookie.get('name'));