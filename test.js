var R = require("ramda");
var isOdd = (x) => x % 2 === 1;
var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
console.log(R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 4)));
console.log(R.take(2)(R.range(0,100)));

var o = { then: function(){} };
// 使`v`用`[[Prototype]]`链接到`o`
var v = Object.create( o );
v.someStuff = "cool";
v.otherStuff = "not so cool";
v.hasOwnProperty( "then" );     // false

// function *foo(x) {
//     var y = x * (yield);
//     return y;
// }
// var it = foo( 6 );
// // 开始`foo(..)`
// it.next();
// var res = it.next( 7 );
// res.value;      // 42


// 填补的安全检查
if (!Promise.wrap) {
    Promise.wrap = function(fn) {
        return function() {
            var args = [].slice.call( arguments );

            return new Promise( function(resolve,reject){
                fn.apply(
                    null,
                    args.concat( function(err,v){
                        if (err) {
                            reject( err );
                        }
                        else {
                            resolve( v );
                        }
                    } )
                );
            } );
        };
    };
}

// 填补的安全检查
if (!Promise.observe) {
    Promise.observe = function(pr,cb) {
        // 从侧面观察`pr`的解析
        pr.then(
            function fulfilled(msg){
                // 异步安排回调（作为Job）
                Promise.resolve( msg ).then( cb );
            },
            function rejected(err){
                // 异步安排回调（作为Job）
                Promise.resolve( err ).then( cb );
            }
        );
        // 返回原本的promise
        return pr;
    };
}

Promise.race( [
    Promise.observe(
        foo(),                  // 尝试`foo()`
        function cleanup(msg){
            // 在`foo()`之后进行清理，即便它没有及时完成
        }
    ),
    timeoutPromise( 3000 )  // 给它3秒钟
] );

function run(gen) {
    var args = [].slice.call( arguments, 1), it;
    // 在当前的上下文环境中初始化generator
    it = gen.apply( this, args );
    // 为generator的完成返回一个promise
    return Promise.resolve()
        .then( function handleNext(value){
            // 运行至下一个让出的值
            var next = it.next( value );
            return (function handleResult(next){
                // generator已经完成运行了？
                if (next.done) {
                    return next.value;
                }
                /// / 否则继续执行
                else {
                    return Promise.resolve( next.value )
                        .then(
                            // 在成功的情况下继续异步循环，将解析的值送回generator
                            handleNext,
                            // 如果`value`是一个拒绝的promise，就将错误传播回generator自己的错误处理g
                            function handleErr(err) {
                                return Promise.resolve(it.throw( err )).then( handleResult );
                            }
                        );
                }
            })(next);
        } );
}

// function *bar() {
//     console.log( "inside `*bar()`:", yield "A" );
//
//     // `yield`-委托至一个非generator
//     console.log( "inside `*bar()`:", yield *[ "B", "C", "D" ] );
//
//     console.log( "inside `*bar()`:", yield "E" );
//
//     return "F";
// }
// var it = bar();
// console.log( "outside:", it.next().value );
// // outside: A
// console.log( "outside:", it.next( 1 ).value );
// // inside `*bar()`: 1
// // outside: B
// console.log( "outside:", it.next( 2 ).value );
// // outside: C
// console.log( "outside:", it.next( 3 ).value );
// // outside: D
// console.log( "outside:", it.next( 4 ).value );
// // inside `*bar()`: undefined
// // outside: E
// console.log( "outside:", it.next( 5 ).value );
// // inside `*bar()`: 5
// // outside: F

// function asyncify(fn) {
//     var orig_fn = fn,
//         intv = setTimeout( function(){
//             intv = null;
//             if (fn) fn();
//         }, 0 );
//     fn = null;
//     return function() {
//         // 触发太快，在`intv`计时器触发来
//         // 表示异步回合已经过去之前？
//         if (intv) {
//             fn = orig_fn.bind.apply(
//                 orig_fn,
//                 // 将包装函数的`this`加入`bind(..)`调用的
//                 // 参数，同时currying其他所有的传入参数
//                 [this].concat( [].slice.call( arguments ) )
//             );
//         }
//         // 已经是异步
//         else {
//             // 调用原版的函数
//             orig_fn.apply( this, arguments );
//         }
//     };
// }



// console.log(require('fs').readFileSync('./vue/shuffle.html', 'utf-8'));
//
// const renderer = require('vue-server-renderer').createRenderer({
//     // template:require('fs').readFileSync('./vue/shuffle.html', 'utf-8')
// });
// const Vue = require('vue');
// var app = new Vue({
//     template:require('fs').readFileSync('./vue/shuffle.html', 'utf-8')
// });
// renderer.renderToString(app,(err,html)=>{
//     console.log(html);
// });


// const Vue = require('vue');
// const server = require('express')();
// const renderer = require('vue-server-renderer').createRenderer();
//
// server.get('*', (req, res) => {
//     const app = new Vue({
//         data: {
//             url: req.url
//         },
//         template: `<div>The visited URL is: {{ url }}</div>`
//     });
//
//     renderer.renderToString(app, (err, html) => {
//         if (err) {
//             res.status(500).end('Internal Server Error');
//             return
//         }
//         res.end(`
//       <!DOCTYPE html>
//       <html lang="en">
//         <head><title>Hello</title></head>
//         <body>${html}</body>
//       </html>
//     `)
//     })
// });
//
// server.listen(8080);


// const Vue = require('vue');
// const renderer = require('vue-server-renderer').createRenderer();
// var app = new Vue({
//    template:"<div>Hello world!</div>"
// });
// renderer.renderToString(app,(err,html)=>{
//     if(err){
//         throw err;
//     }
//     console.log(`${html}`);
// });


// var _ = require('lodash');
// var array = [1];
// console.log(_.concat(array,2,[3],[[4]],[[[5]]]));
// console.log(_.indexOf([{'a':1},{'b':2},{'c':3}],'a'));

// var a = 0x31;
// var b = 0x0f;
// console.log(a.toString(2));
// console.log(b.toString(2));
// console.log(a & b);
// console.log(parseInt("11"));
// var obj = {a: 1};
// var obj1 = Object.create(null, {a: {value: 1}});
// obj1.a = 2;
// console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// console.log(Object.getOwnPropertyDescriptor(obj1, "a"));

// var c = '_index'.charCodeAt(0);
// console.log(c);
// console.log([1,2,3,4].slice());
// function test(val1,val2) {
//     if(!val1){
//         return val2;
//     }
// }
// console.log(test("",2));
// function* somewords(){
//     yield "hello";
//     yield "world";
// }
// for(let name of somewords()){
//     console.log(name);
// }

/// / function* fibs() {
//     var a = 0;
//     var b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
// var [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
// console.log(fifth);
// console.log(sixth);

// function* quips(name) {
//     yield "你好 " + name + "!";
//     yield "希望你能喜欢这篇介绍ES6的译文";
//     if (name.startsWith("X")) {
//         yield "你的名字 " + name + "  首字母是X，这很酷！";
//     }
//     yield "我们下次再见！";
// }
// let cc=quips("邢健");
// console.log(cc.next().value);
// console.log(cc.next().value);
// console.log(cc.next().value);

// var obj={
//     book:"js1111111",
//     info:function () {
//         console.log(this);
//         return this.book;
//     }
// };
// var book="js22222222";
// console.log(obj.info());
// console.log(setTimeout(obj.info,10));
// console.log(setTimeout(obj.info,10));
// console.log(setTimeout(obj.info,10));
// console.log(setTimeout(obj.info,10));
// console.log(setTimeout(obj.info,10));

// console.log(++'5'[0]);

// function sum(item) {
//     var cur = item;
//     var inner = function (next) {
//         if (next != null) {
//             cur += next;
//         }
//         return inner;
//     }
//     inner.toString = function () {
//         return cur;
//     }
//     return inner;
// }
// console.log(sum(1)(2)(3).toString());

// [1,2,[2,3,[4,5]]]=>[1,2,2,3,4,5]
// function flatten(arr) {
//     if(!Array.isArray(arr)||!arr.length){
//         return [];
//     }else{
//         return Array.prototype.concat.apply([],arr.map(function (val) {
//             if(Array.isArray(val)){
//                 return flatten(val);
//             }else{
//                 return val;
//             }
//         }))
//     }
// }
// console.log(flatten([1,2,[2,3,[4,5]]]));

// var x = 20;
// var temp = {
//     x: 40,
//     foo: function () {
//         var x = 10;
//         return this.x;
//     }
// };
// console.log((temp.foo,temp.foo)());

// console.log(parseInt(0.000008));
// console.log(parseInt(0.0000008));

// var o =(function () {
//     var person={
//         name:'xingjian',
//         age:18
//     };
//     return {
//         run:function (k) {
//             return person[k];
//         }
//     }
// }());

// Object.defineProperty(Object.prototype,'self',{
//     get:function () {
//         return this;
//     },
//     configurable:true
// });
// console.log(o.run('self'));

// var o={age:18};
// Object.defineProperty(o,'name',{value:'xingjian'});
// console.log(Object.getOwnPropertyDescriptor(o,'name'));
// console.log(Object.getOwnPropertyDescriptor(o,'age'));