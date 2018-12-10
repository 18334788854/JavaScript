function ajaxCall(type, url, callback, data) {
    var xhr = (function () {
            try {
                return new XMLHttpRequest();
            } catch (e) {
            }
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.6.0');
            } catch (e) {
            }
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.3.0');
            } catch (e) {
            }
            try {
                return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
            }
        }()),
        STATE_LOADED = 4,
        STATUS_OK = 200;
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState !== STATE_LOADED) {
            return;
        }
        if (xhr.status === STATUS_OK) {
            callback(xhr.responseText);
        }
    }
    xhr.open(type.toUpperCase(), url);
    xhr.send(data);
}

ajaxCall('get', '/user/12345', function (response) {
    console.log(response);
});
ajaxCall('POST', 'user/12345', function (response) {
    console.log(response);
}, "company=AKQ&name=Den dell")