// var http = {
//     makeRequest: function (type, url, callback, data) {
//         var xhr = new XMLHttpRequest(),
//             STATE_LOADED = 4,
//             STATUS_OK = 200;
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState !== STATE_LOADED) {
//                 return;
//             }
//             if (xhr.status === STATUS_OK) {
//                 callback(xhr.responseText);
//             }
//         };
//         xhr.open(type.toUpperCase(), url);
//         xhr.send(data);
//     }
// };

var myProject = {
    data: {
        ajax: (function () {
            function createRequestObj(callback) {
                var xhr = new XMLHttpRequest(),
                    STATE_LOADED = 4,
                    STATUS_OK = 200;
                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== STATE_LOADED) {
                        return;
                    }
                    if (xhr.status === STATUS_OK) {
                        callback(xhr.responseText);
                    }
                };
                return xhr;
            }

            return {
                get: function (url, callback) {
                    var requestObj = createRequestObj(callback);
                    requestObj.open('GET', url);
                    requestObj.send();
                },
                post: function (url, data, callback) {
                    var requestObj = createRequestObj(callback);
                    requestObj.open('POST', url);
                    requestObj.send(data);
                }
            }
        }())
    }
};
function httpToAjaxAdapter(type, url, callback, data) {
    if (type.toLowerCase() === 'get') {
        myProject.data.ajax.get(url, callback);
    } else if (type.toLowerCase() === 'post') {
        myProject.data.ajax.post(url, data, callback);
    }
}
var http = {
    makeRequest: httpToAjaxAdapter
};