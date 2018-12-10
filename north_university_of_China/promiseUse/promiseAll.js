var getJSON = require("./promiseAjax");

var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
    return getJSON("/post/" + id + ".json");
});
Promise.all(promises).then(function (posts) {

}).catch(function (error) {
    console.log(error);
});