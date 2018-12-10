interface SquareConfig {
    width?: number;
    color?: string;
    [prop: string]: any
}

interface createSquareConfig {
    (config1: SquareConfig): any
}

let createSquare: createSquareConfig = function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = {color: 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};

console.log(createSquare({colour: 'black', width: 100}));