"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
    function Queue() {
        var constants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, Queue);

        this._queue = constants;
    }

    _createClass(Queue, [{
        key: "pop",
        value: function pop() {
            var value = this._queue[0];
            this._queue.splice(0, 1);
            return value;
        }
    }]);

    return Queue;
}();

var PeekableQueue = function (_Queue) {
    _inherits(PeekableQueue, _Queue);

    function PeekableQueue() {
        _classCallCheck(this, PeekableQueue);

        return _possibleConstructorReturn(this, (PeekableQueue.__proto__ || Object.getPrototypeOf(PeekableQueue)).apply(this, arguments));
    }

    _createClass(PeekableQueue, [{
        key: "peek",
        value: function peek() {
            return this._queue[0];
        }
    }]);

    return PeekableQueue;
}(Queue);

var queue = new PeekableQueue([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(queue, queue.peek());