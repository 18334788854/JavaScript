// var http = (function () {
//     return {
//         post: function (url, data) {
//             var promise = new Promise(function (resolve, reject) {
//                 var xhr = new XMLHttpRequest(),
//                     STATE_LOADED = 4,
//                     STATUS_OK = 200;
//                 xhr.onreadystatechange = function () {
//                     if (xhr.readyState !== STATE_LOADED) {
//                         return;
//                     }
//                     if (xhr.status === STATUS_OK) {
//                         resolve(xhr.responseText);
//                     } else {
//                         reject("For the url '" + url + "',the sercer responsed with: " + xhr.status);
//                     }
//                 };
//                 xhr.open("POST", url);
//                 xhr.send(data);
//             });
//             return promise;
//         }
//     }
// }());
// http.post("/user/12345", "name=xingjian&password=tencent").then(function (response) {
//     console.log(response);
// });

// var promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("new promise.");
//         resolve(Math.random() * 100);
//     }, 2000)
// });
// var promise2 = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("new promise2.");
//         resolve(promise);
//     },2000)
// });
// promise2.then(function (value) {
//     console.log(value);
// }, function (error) {
//     console.log(error);
// });
function print() {
    var args = Array.prototype.slice.apply(arguments);
    var result = args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
    console.log(result);
}
function curring() {
    var f = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        args.push.apply(args, arguments);
        return f.apply(this, args);
    }
}
var print2 = curring(print, 11);
print2(2, 3, 4);