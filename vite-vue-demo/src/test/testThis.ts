// @ts-nocheck
/**
 * 测试 this
 */
// ----------------------------------------------------------------------------------
// function foo() {
//     console.log(this.a);
// }

// function doFoo() {
//     foo();
// }

// var obj = {
//     a: 1,
//     doFoo: doFoo,
// };

// var a = 2;
// obj.doFoo();
// 输出结果
// 2

// ----------------------------------------------------------------------------------
// var a = 10;
// var obj = {
//     a: 20,
//     say: () => {
//         console.log(this.a);
//     },
// };
// obj.say();

// var anotherObj = { a: 30 };
// obj.say.apply(anotherObj);
// 10 10

// ----------------------------------------------------------------------------------
// var a = 10;
// var obj = {
//     a: 20,
//     say() {
//         console.log(this.a);
//     },
// };
// obj.say();
// var anotherObj = { a: 30 };
// obj.say.apply(anotherObj);
// 20 30

// ----------------------------------------------------------------------------------
// 注意：浏览器中会输出 window 全局对象 ！！！！！
// 要注意的是，在严格模式中，null 就是 null，undefined 就是 undefined
// ES6的模块Module自动采用严格模式
// function a() {
//     console.log(this);
// }
// a.call(null);
// null

// 'use strict';

// function a() {
//     console.log(this);
// }
// a.call(null); // null
// a.call(undefined); // undefined

// ----------------------------------------------------------------------------------
// var obj = {
//     say: function () {
//         var f1 = () => {
//             console.log('1111', this);
//         };
//         f1();
//     },
//     pro: {
//         getPro: () => {
//             console.log(this);
//         },
//     },
// };
// var o = obj.say;
// o();
// obj.say();
// obj.pro.getPro();
// 注意： o() 的结果是 say 的执行环境 ！！！
// ----------------------------------------------------------------------------------
// var myObject = {
//     foo: 'bar',
//     func: function () {
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (function () {
//             console.log(this.foo);
//             console.log(self.foo);
//         })();
//     },
// };
// myObject.func();
// 注意：立即执行函数汇中 this 指向 window
// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------