function Memento() {
    this.storage = {};
}
Memento.prototype.saveState = function (key, obj) {
    this.storage[key] = JSON.stringify(obj);
};
Memento.prototype.restoreState = function (key) {
    var output = {};
    if (this.storage.hasOwnProperty(key)) {
        output = this.storage[key];
        output = JSON.parse(output);
    }
    return output;
};
var memento = new Memento(),
    user = {
        name: 'xingjian',
        age: 22
    };
memento.saveState("user", user);
console.log(memento.storage["user"]);
user.name="aaaaaaaaa";
user.age=100;
console.log(JSON.stringify(user));
user=memento.restoreState("user");
console.log(JSON.stringify(user));
