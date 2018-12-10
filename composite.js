var elements = {
    get: function (tag) {
        var elems = document.getElementsByTagName(tag),
            elemsIndex = 0,
            elemsLength = elems.length,
            output = [];
        for (; elemsIndex < elemsLength; elemsIndex++) {
            output.push(elems[elemsIndex]);
        }
        return output.length === 1 ? output[0] : output;
    },
    addClass: function (elems, newClassName) {
        var elemIndex = 0,
            elemLength = elems.length,
            elem;
        if (Object.prototype.toString.call(elems) === "[object Array]") {
            for (; elemIndex < elemLength; elemIndex++) {
                elem = elems[elemIndex];
                elem.className += (elem.className === "" ? "" : " ") + newClassName;
            }
        } else {
            elems.className += (elem.className === "" ? "" : " ") + newClassName;
        }
    }
};

var body = elements.get('body'),
    links = elements.get('a');

elements.addClass(body, 'has-js');
elements.addClass(links, 'custom-link');