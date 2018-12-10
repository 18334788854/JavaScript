const fs = require("mz/fs");
module.exports = async () => {
    let expression = await fs.readFile("./hello.txt","utf-8");
    let fn = new Function(expression);
    let r = fn();
    console.log(r.toString());
    return r;
};
