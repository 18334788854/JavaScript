const crypto = require("crypto");

// function md5_crypto1(info) {
//     const hash = crypto.createHash("md5");
//     hash.update(info);
//     return hash.digest("base64");
// }

function md5_crypto2(info) {
    const hash = crypto.createHash("md5");
    hash.update(info);
    return hash.digest("hex");
}

// function md5_crypto3(info) {
//     const hash = crypto.createHash("md5");
//     hash.update(info);
//     return hash.digest();
// }
//
// let encrypto = md5_crypto2("hello world");
//
// console.log(md5_crypto2("cdrsys888888"));
// console.log(md5_crypto2("cdrsysabs234"));

// console.log(encrypto);
// console.log(md5_crypto3(encrypto));

// console.log(Buffer.isBuffer(md5_crypto1("cdrsys999999")));
// console.log(md5_crypto1("cdrsys999999"));
// console.log(Buffer.from(md5_crypto1("cdrsys999999")));
// // console.log(Buffer.from(md5_crypto1("cdrsys999999")).swap16());
// console.log(Buffer.from(md5_crypto1("cdrsys999999"),"base64"));
// console.log(md5_crypto2("cdrsys999999"));
//
// console.log(md5_crypto3("2286cb5a54a729c0d46f74a610b5b7d8"));

// let pem = "MIICXgIBAAKBgQC+xyFx0fwRO0eXo7w8mpSjQn5kbBAUHq1UASjAaT3nn6r5CGxk\n" +
// "tJnxYFaSqPM5HDzK+/kIHz/96UjDHlbkUJuNr6TyPmDuU6K38LWfGNZw25RBSBuI\n" +
// "IQxll25vY1juKMiZ9ZX88pmgedwZuQLBVbFHJBxj4Ci6k18XyI9DPLGDQwIDAQAB\n" +
// "AoGBAKIO19svDBe7KoKmxQUaLr9Mgb9eiH3+3S/p2CsyezKh0IPBYwpc3BRNyNzG\n" +
// "he3yjbXEO3Rpz1sqavPMdvV1f9xvBCIop2YsqxzPGjbemCxh21L6AFG5/taCazd1\n" +
// "N76RnhGUFWxpxPCRCv5ngFH7qQEjfUT2RgBImTYFIRutoOB5AkEA94BK1SjfHN3N\n" +
// "/Wq1x13F9WN582zbo9NzhpQbSFhZOQQuwVgn7340tvG+kAtSqId372R+WcCdafBH\n" +
// "UeuMzco2nQJBAMVUM3iuVQutBKXfg83KRF9Dq3jPmZMFZQogZ6DjwCH5iNTF8ZmL\n" +
// "KV5/JCyVCYUaCtFhgOdqZ+4HI7ineG8Ai18CQAxaW+HNu20OaQSX+eCsfn/j6idL\n" +
// "LJ89o4t5Au+WcUWWPtspkjyy2OC0qiU4W3TL5iGNq3zBT1oFQxoEnq96w0UCQQCL\n" +
// "95vC4DVm4MTJO2/sSqqQwBkiym5ugIcY1b9rueCQuMU712P1u2YOpzRrgxOLm9tM\n" +
// "hVK/0xQBHINT+UZNxh8VAkEAvt+1qZAaCgWs1ZtoYYJhXW1vXRb99fANlqezB84N\n" +
// "VvIe+lFMy0mOa9UFuwlvZvz4h3izmWZ0Q98hIv1RYtOg1A==\n";
// console.log(pem.toString("utf-8"));
let obj = {},
    numberString = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowerLetterString = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperLetterString = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numberStringLength = numberString.length,
    lowerLetterStringLength = lowerLetterString.length,
    upperLetterStringLength = upperLetterString.length;
for (let i = 0; i < 1000000; i++) {
    let str = numberString[Math.floor(Math.random() * numberStringLength)]+numberString[Math.floor(Math.random() * numberStringLength)]+upperLetterString[Math.floor(Math.random() * upperLetterStringLength)] + upperLetterString[Math.floor(Math.random() * upperLetterStringLength)] + lowerLetterString[Math.floor(Math.random() * lowerLetterStringLength)]+lowerLetterString[Math.floor(Math.random() * lowerLetterStringLength)];
    let cryptoStr = "cdrsys" + str;
    let encrypt = md5_crypto2(cryptoStr);
    console.log(encrypt," : ",str);
    obj[encrypt] = str;
}
// console.log("2286cb5a54a729c0d46f74a610b5b7d8" in obj);
console.log("9e3400b7b2bbcb06c002fd396b315fd9" in obj);
if ("9e3400b7b2bbcb06c002fd396b315fd9" in obj) {
    console.log(obj["9e3400b7b2bbcb06c002fd396b315fd9"]);
}
// if("2286cb5a54a729c0d46f74a610b5b7d8" in obj){
//     console.log(obj["2286cb5a54a729c0d46f74a610b5b7d8"]);
// }

// var eventLoop = [ ];
// var event;
// // “永远”执行
// while (true) {
//     // 执行一个"tick"
//     if (eventLoop.length > 0) {
//         // 在队列中取得下一个事件
//         event = eventLoop.shift();
//
//         // 现在执行下一个事件
//         try {
//             event();
//         }
//         catch (err) {
//             reportError(err);
//         }
//     }
// }

// var res = [];
// // `response(..)`从Ajax调用收到一个结果数组
// function response(data) {
//     // 我们一次只处理1000件
//     var chunk = data.splice( 0, 1000 );
//     // 连接到既存的`res`数组上
//     res = res.concat(
//         // 制造一个新的变形过的数组，所有的`data`值都翻倍
//         chunk.map( function(val){
//             return val * 2;
//         } )
//     );
//     // 还有东西要处理吗？
//     if (data.length > 0) {
//         // 异步规划下一个批处理
//         setTimeout( function(){
//             response( data );
//         }, 0 );
//     }
// }
// // ajax(..) 是某个包中任意的Ajax函数
// ajax( "http://some.url.1", response );
// ajax( "http://some.url.2", response );

