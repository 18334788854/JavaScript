const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
    constructor(counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }

    dec() {
        let counter = _counter.get(this);
        if (counter < 0) {
            return;
        }
        counter = counter - 1;
        _counter.set(this, counter);
        if (counter === 0) {
            _action.get(this)(counter);
        }else{
            console.log(`-----------${counter}------------`);
        }
    }
}

const c = new Countdown(3,(counter)=>console.log(`-----------${counter}------------`));
c.dec();
c.dec();
c.dec();