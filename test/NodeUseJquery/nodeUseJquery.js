var value = "xingjian";
Function.prototype.call2 = function (obj, ...rest) {
    obj.fn = this;
    obj.fn(...rest);
    delete obj.fn;
};
var obj = {
    value: 1
};

function bar(a, b, c, d, e) {
    console.log(this.value);
}

bar.call2(obj, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// require(["jsdom"],function(jsdom){
//     jsdom.env("", (err, window) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//
//         let $ = require("jquery")(window);
//         console.log($.fn.jquery);
//     })
// });
require("jsdom").env("", (err, window) => {
    if (err) {
        console.log(err);
        return;
    }

    let $ = require("jquery")(window);
    console.log($.fn.jquery);
});


// let {JSDOM} = require("jsdom");
// let window = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// let $ = require("jquery");
// console.log($);