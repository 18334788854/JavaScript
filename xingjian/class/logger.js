class Logger {
    constructor() {
        this.printName = this.printName.bind(this);
    }

    printName(name = 'xingjian') {
        this.print(`Hello ${name}`);
    }

    print(content) {
        console.log(content);
    }
}

let logger = new Logger();
let {printName} = logger;

printName();