var Class = (function () {
    function create(classDefinition, parentPrototype) {
        var _newClass = function () {
                if (this.initialize && typeof this.initialize === 'function') {
                    this.initialize.apply(this, arguments);
                }
            },
            _name;
        if (parentPrototype) {
            _newClass.prototype = new parentPrototype.constructor();
            for (_name in parentPrototype) {
                if (parentPrototype.hasOwnProperty(_name)) {
                    _newClass.prototype[_name] = parentPrototype[_name];
                }
            }
        }
        function polymorph(thisFunction, parentFunction) {
            return function () {
                var output;
                this._parent = parentFunction;
                output = thisFunction.apply(this, arguments);
                delete this._parent;
                return output;
            }
        }

        for (_name in classDefinition) {
            if (classDefinition.hasOwnProperty(_name)) {
                if (parentPrototype && parentPrototype[_name] && typeof classDefinition[_name] === 'function') {
                    _newClass.prototype[_name] = polymorph(classDefinition[_name], parentPrototype[_name]);
                } else {
                    _newClass.prototype[_name] = classDefinition[_name];
                }
            }
        }
        _newClass.prototype.constructor = _newClass;
        _newClass.extend = extend;
        return _newClass;
    }

    function extend(classDefinition) {
        return create(classDefinition, this.prototype);
    }

    return {
        create: create
    }
}());

/**
 * 一个用于定义各种类型住宅（accommodation）的“类”
 *
 * @class Accommodation
 * @constructor
 */
var Accommodation = Class.create({
    /**
     * 表示住宅当前是否上锁
     *
     * @property {Boolean} isLocked
     */
    isLocked: true,
    /**
     * 表示住宅当前是否有警报系统——盗贼们注意了！
     *
     * @property {Boolean} isAlarmed
     */
    isAlarmed: true,
    /**
     * 上锁
     *
     * @method lock
     */
    lock: function () {
        this.isLocked = true;
    },
    /**
     * 开锁
     *
     * @method unlock
     */
    unlock: function () {
        this.isLocked = false;
    },
    /**
     * 在创建该类的对象实例时该方法自动执行
     * 开锁
     *
     * @method initialize
     */
    initialize: function () {
        this.unlock();
    }
});
var House = Accommodation.extend({
    floors: 2,
    lock: function () {
        this._parent();
        console.log(`Number of floors locked:${this.floors}`);
    }
});

var myAccommodation = new Accommodation();
console.log(myAccommodation instanceof Accommodation);
console.log(myAccommodation instanceof House);

var myHouse = new House();
console.log(myHouse.isLocked);
myHouse.lock();
console.log(myHouse.isLocked);
console.log(myHouse instanceof House);
console.log(myHouse instanceof Accommodation);