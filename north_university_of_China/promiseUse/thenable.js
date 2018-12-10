// let thenable = {
//     then: function (resolve, reject) {
//         resolve(42);
//     }
// };
// Promise.resolve(thenable).then(value => {
//     console.log(value);
// });

let thenable = {
    then(resolve, reject) {
        reject("出错了.");
    }
};
Promise.reject(thenable).catch(e => {
    console.log(e === thenable);
});