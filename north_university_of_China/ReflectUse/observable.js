const queueObservers = new Set();
const observer = fn => queueObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queueObservers.forEach(observer => observer());
    return result;
}

const person = observable({
    name: "张三",
    age: 20
});

function print() {
    console.log(`${person.name}, ${person.age}.`);
}

observer(print);
person.name = "李四";