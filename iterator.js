function Iterator(data) {
    var key;
    this.data = data || {};
    this.index = 0;
    this.keys = [];

    this.isArray = Object.prototype.toString.call(data) === "[object Array]";
    if (this.isArray) {
        this.length = data.length;
    } else {
        for (key in data) {
            if (data.hasOwnProperty(key)) {
                this.keys.push(key);
            }
        }
        this.length = this.keys.length;
    }
}
Iterator.prototype.rewind = function () {
    this.index = 0;
};
Iterator.prototype.current = function () {
    return this.isArray ? this.data[this.index] : this.data[this.keys[this.index]];
};
Iterator.prototype.next = function () {
    var value = this.current();
    this.index = this.index + 1;
    return value;
};
Iterator.prototype.hasNext = function () {
    return this.index < this.length;
};
Iterator.prototype.first = function () {
    this.rewind();
    return this.current();
};
Iterator.prototype.each = function (callback) {
    callback = typeof callback === "function" ? callback : function () {

    };

    for (this.rewind(); this.hasNext();) {
        callback(this.next());
    }
};

var user = {
        name: 'xing jian',
        occupation: 'Head of web development',
        company: 'tencent'
    },
    dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    userIterator = new Iterator(user),
    dayOfWeekIterator = new Iterator(dayOfWeek),
    output1 = [], output2 = [], output3 = [];
for (; userIterator.hasNext();) {
    output1.push(userIterator.next());
}
console.log(output1.join(","));
userIterator.rewind();
while (userIterator.hasNext()) {
    output2.push(userIterator.next());
}
console.log(output2.join(","));
dayOfWeekIterator.each(function (item) {
    output3.push(item);
});
console.log(output3.join(","));

