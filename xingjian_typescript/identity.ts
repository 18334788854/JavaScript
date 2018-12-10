

function identity<T>(arg: T): T {
    return arg;
}

//----------------1-----------------
let output1 = identity<string>("myString1");
console.log(output1);
//----------------2-----------------
let output2 = identity("myString2");
console.log(output2);

interface lengthwise {
    length: number
}

function loggingIdentity<T extends lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity({length: 10, value: 3});

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!


enum Enum {
    A = 1,
    B,
    C
}

let b = Enum.B;
console.log(Enum[b]);


const enum Directions {
    Up = 1,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];