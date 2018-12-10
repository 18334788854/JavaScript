var jquery = require("jquery");

function extend() {
    // 默认不进行深拷贝
    var deep = false;
    var name, options, src, copy, clone, copyIsArray;
    var length = arguments.length;
    // 记录要复制的对象的下标
    var i = 1;
    // 第一个参数不传布尔值的情况下，target 默认是第一个参数
    var target = arguments[0] || {};
    // 如果第一个参数是布尔值，第二个参数是 target
    if (typeof target == 'boolean') {
        deep = target;
        target = arguments[i] || {};
        i++;
    }
    // 如果target不是对象，我们是无法进行复制的，所以设为 {}
    if (typeof target !== "object" && !isFunction(target)) {
        target = {};
    }

    // 循环遍历要复制的对象们
    for (; i < length; i++) {
        // 获取当前对象
        options = arguments[i];
        // 要求不能为空 避免 extend(a,,b) 这种情况
        if (options != null) {
            for (name in options) {
                // 目标属性值
                src = target[name];
                // 要复制的对象的属性值
                copy = options[name];

                // 解决循环引用
                if (target === copy) {
                    continue;
                }

                // 要递归的对象必须是 plainObject 或者数组
                if (deep && copy && (isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))) {
                    // 要复制的对象属性值类型需要与目标属性值相同
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];

                    } else {
                        clone = src && isPlainObject(src) ? src : {};
                    }

                    target[name] = extend(deep, clone, copy);

                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    return target;
}

console.log(extend(true,[1,2,3,4,5,6],[7,8,9]));

// var flatten = function flatten(arr) {
//     let result = [];
//     for (let i of arr) {
//         if (Array.isArray(i)) {
//             value = flatten(i);
//             for (let j of value) {
//                 result[result.length] = j;
//             }
//         }
//         else {
//             result[result.length] = i;
//         }
//     }
//     return result;
// };
// var arr = [1, [2, 3, [4, 5, 6, [7], 8], 9], 10];
// console.log(flatten(arr));

// let count = new Array(10000).fill('').map((_, index) => index + 1).filter(item => /0/.test(item)).reduce((count, item) => {
//     console.log(String(item).match(/0/g));
//     return count + (String(item).match(/0/g) || []).length
// }, 0);
// console.log(count);

// process.nextTick(() => {
//
//     console.log('nextTick')
//
// });
//
// Promise.resolve()
//
//     .then(() => {
//
//         console.log('then')
//
//     });
//
// setImmediate(() => {
//
//     console.log('setImmediate')
//
// });
//
// console.log('end');


// const request = require("request");
// const appConfig = require("./appConfig");
//
// request("https://api.weixin.qq.com/sns/oauth2/access_token?"+
//     "?appid"+appConfig.appID+
//     "&secret"+appConfig.secret+
//     "&code"+"111111111"+
//     "&grant_type=authorization_code",(err,response,body)=>{
//     console.log(response.sta);
//     console.log(body);
// })

// let obj = {};
// let obj1={b:1};
// Object.defineProperty(obj,
//     "a", {
//         get() {
//             return obj1;
//         },
//         set(val) {
//             console.log(val);
//         },
//         configurable: true,
//     }
// );
//
// obj.a.b=2;
// console.log(obj.a.b);