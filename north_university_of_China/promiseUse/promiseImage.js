function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.src = url;
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function () {
            reject(new Error(`Could not load image at ${url}.`));
        };
    });
}