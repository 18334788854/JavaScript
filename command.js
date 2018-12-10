var cookie = (function () {
    var allCookies = document.cookie.split(";"),
        cookies = {},
        cookiesIndex = 0,
        cookiesLength = allCookies.length,
        cookie;
    for (; cookiesIndex < cookiesLength; cookiesIndex++) {
        cookie = allCookies[cookiesIndex].split("=");
        cookies[cookie[0]] = cookie[1];
    }
    return {
        get: function (name) {
            return cookies[name];
        },
        set: function (name, value) {
            cookies[name] = value;
            document.cookie = name + "=" + value;
        },
        remove: function (name) {
            delete cookies[name];
            document.cookie = name + "=; expires= Thu,01 Jan 1970 00:00:01 GMT";
        },
        excute: function (command, params) {
            if (this.hasOwnProperty(command) && typeof this[command] === "function") {
                return this[command].apply(this, params);
            }
        }
    }
}());

var command = (function () {
    var undoStack = [];
    return {
        excute: function (command, undoCommand) {
            if (command && typeof command === "function") {
                command();
                undoStack.push(undoCommand);
            }
        },
        undo: function () {
            var undoCommand = undoStack.pop();
            if (undoCommand && typeof undoCommand === "function") {
                undoCommand();
            }
        }
    }
}());

command.excute(function () {
    cookie.excute("set", ["name", "xingjian"]);
}, function () {
    cookie.excute("remove", ["name"]);
});
command.excute(function () {
    cookie.excute("set", ["company", "AAAAAA"]);
}, function () {
    cookie.excute("remove", ["company"]);
});
console.log(cookie.get('name'));
console.log(cookie.get("company"));

command.undo();
console.log(cookie.get('name'));
console.log(cookie.get("company"));

command.undo();
console.log(cookie.get('name'));
console.log(cookie.get("company"));
