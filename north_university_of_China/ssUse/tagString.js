function tag(stringArr, ...value) {
    console.log(stringArr[0]);
    console.log(stringArr[1]);
    console.log(stringArr[2]);
    console.log(value[0]);
    console.log(value[1]);

    return "OK";
}
var a = 5;
var b = 10;
tag`Hello ${a + b} world ${a * b}`;