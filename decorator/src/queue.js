class Queue{
    constructor(constants=[]){
        this._queue = constants;
    }
    pop(){
        let value = this._queue[0];
        this._queue.splice(0,1);
        return value;
    }
}

class PeekableQueue extends Queue{
    peek(){
        return this._queue[0];
    }
}

var queue = new PeekableQueue([1,2,3,4,5,6,7,8,9]);
console.log(queue,queue.peek());