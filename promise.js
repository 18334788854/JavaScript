var promise = (function () {
    var state = {
        PENDING: 'pending',
        FULFILLED: 'fulfilled',
        REJECTED: 'rejected'
    };

    function Promise(asyncFunction) {
        var that = this;
        this.state = state.PENDING;
        this.callbacks = [];
        this.value = null;
        this.error = null;
        function success(value) {
            that.resolve(value);
        }

        function failure(reason) {
            that.reject(reason);
        }

        if (typeof asyncFunction === "function") {
            asyncFunction(success, failure);
        }
    }

    Promise.prototype.then = function (onFulfilled, onRejected) {
        var promise = new Promise(),
            callback = {
                promise: promise
            };
        if (typeof onFulfilled === "function") {
            callback.fulfill = onFulfilled;
        }
        if (typeof onRejected === "function") {
            callback.reject = onRejected;
        }
        this.callbacks.push(callback);
        this.executeCallbacks();
        return promise;
    };
    Promise.prototype.executeCallbacks = function () {
        var that = this,
            value,
            callback;

        function fulfill(value) {
            return value;
        }

        function reject(reason) {
            return reason;
        }

        if (this.state !== state.PENDING) {
            setTimeout(function () {
                while (that.callbacks.length) {
                    callback = that.callbacks.shift();
                    try {
                        if (that.state === state.FULFILLED) {
                            value = (callback.fulfill || fulfill)(that.value);
                        } else {
                            value = (callback.reject || reject)(that.error);
                        }
                    } catch (reason) {
                        callback.promise.reject(reason);
                    }
                }
            }, 0)
        }
    };
    Promise.prototype.fulfill = function (value) {
        if (this.state === state.PENDING && arguments.length) {
            this.state = state.FULFILLED;
            this.value = value;
            this.executeCallbacks();
        }
    };
    Promise.prototype.reject = function (reason) {
        if (this.state === state.PENDING && arguments.length) {
            this.state = state.REJECTED;
            this.error = reason;
            this.executeCallbacks();
        }
    };
    promise.prototype.resolve = function (value) {
        var promise = this,
            valueIsThisPromise = promise === value,
            valueIsAPromise = value && value.constructor === Promise,
            valueIsThenable = value && (typeof value === "object" || typeof value === "function"),
            isExecuted = false,
            then;
        if (valueIsThisPromise) {
            promise.reject(new TypeError());
        } else if (valueIsAPromise) {
            if (value.state === state.FULFILLED) {
                promise.fulfill(value.value);
            } else if (value.state === state.REJECTED) {
                promise.reject(value.error);
            } else {
                value.then(function (value) {
                    promise.resolve(value);
                }, function (reason) {
                    promise.reject(reason);
                });
            }
        } else if (valueIsThenable) {
            try {
                then = value.then;
                if (typeof then === "function") {
                    then.call(value, function (successValue) {
                        if (!isExecuted) {
                            isExecuted = true;
                            promise.resolve(successValue);
                        }
                    }, function (reason) {
                        if (!isExecuted) {
                            isExecuted = true;
                            promise.reject(reason);
                        }
                    })
                } else {
                    promise.fulfill(value);
                }
            } catch (reason) {
                if (!isExecuted) {
                    isExecuted = true;
                    promise.reject(reason);
                }
            }
        } else {
            promise.fulfill(value);
        }
    };
    Promise.all = function (promises) {
        var index = 0,
            promiseCount = promises.length;
        return new Promise(function (fulfill, reject) {
            var promise,
                results = [],
                resultsCount = [];

            function onSuccess(result, index) {
                results[index] = result;
                resultsCount++;
                if (resultsCount === promiseCount) {
                    fulfill(results);
                }
            }

            function onError(error) {
                reject(error);
            }

            function resolvePromise(index, promise) {
                promise.then(function (value) {
                    onSuccess(value, index);
                }, onError);
            }

            for (; index < promiseCount; index++) {
                promise = promises[index];
                resolvePromise(index, promise);
            }
        })
    }
    return Promise;
}());
