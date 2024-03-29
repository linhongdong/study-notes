import { createApp } from 'node_modules/vue/dist/vue.runtime.esm-bundler.js';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import About from './views/other/About.vue';

import 'ant-design-vue/dist/antd.css';
import { resolve } from 'path';

// console.log('App--------------------------------->>>', App);
const app = createApp(App).use(router).use(store).use(Antd).component('About', About);

// (app.config as any).productionTip = false;

export default app.mount('#app');

// console.log('createApp--------------------->>>', createApp);
// console.log('app----------------------------------------------------------->>>', app);

/**
 * 测试
 */
// import './views/javascript/commons';
// import '@/test/test';
// import '@/test/exportTest';
// import '@/test/heepPriorityQueueTest'; // 基于二叉堆的优先队列
// import '@/views/javascript/commons/functionExtension'; // 手写 apply、call、bind
// import '@/views/javascript/commons/functionExtensionJS'; // 适用于 es5 版本的手写 apply、call、bind
// import '@/views/javascript/commons/myPromise'; // 手写 promise
// import '@/test/parseUrlTest'; // 测试把 url 的拼接参数解析成对象
// import '@/test/binaryTreeSymbolTableTest'; // 基于二叉查找树的符号表
// import '@/test/printBinaryTree'; // 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行
// import '@/views/javascript/commons/functionCurrying'; // 函数柯里化
// import '@/views/javascript/commons/functionCompose'; // 函数组合
// import '@/test/testObject'; // 测试 Object
// import '@/test/testExtends'; // 测试 继承
// import '@/test/testFunction'; // 测试 函数
// import '@/test/finalizationRegistry'; // 测试 监听垃圾回收
// import '@/test/testPromise'; // 测试 Promise
// import '@/views/javascript/commons/iterableObj'; // 测试 迭代器
// import '@/views/javascript/commons/generator'; // 测试 生成器
// import '@/views/javascript/commons/async-await'; // 测试 async await
// import '@/views/javascript/commons/try-catch'; // 测试 try catch
// import '@/test/testJSONCopy'; // 测试 对象的拷贝
// import '@/views/javascript/commons/deepClone'; // 测试 自定义深拷贝函数
// import '@/test/testEvent'; // 测试 事件流 冒泡 捕获
// import '@/interviewQuestions/createObject'; // 测试 事件流 冒泡 捕获
// import '@/interviewQuestions/delimiter'; // 测试 分隔符
// import '@/commons/formatDate'; // 测试 时间格式化
// import '@/interviewQuestions/findDuplicates'; // 测试 查找重复元素
// import '@/interviewQuestions/highDataType'; // 测试 高频数据类型
// import '@/commons/rangeRandom'; // 测试 生成范围随机数
// import '@/leetcode/fullArray'; // 测试 全排列
// import '@/views/javascript/commons/arrayExtension'; // 测试 数组扩展方法
// import '@/views/javascript/commons/objectExtension'; // 测试 Object 扩展方法
// import '@/designPatterns/observer'; // 测试 观察者模式
// import '@/designPatterns/publishSubscribe'; // 测试 发布订阅模式
// import '@/interviewQuestions/testPromise'; // 测试 promise
// import '@/interviewQuestions/test'; // 测试 promise
// import '@/interviewQuestions/eligibleParentheses'; // 测试 合格括号
// import '@/test/testVue'; // 测试 Vue
// import '@/test/testThisBind'; // 测试 测试使用 bind 绑定 this 后,是否还能修改 this 的指向
// import '@/interviewQuestions/testThis'; // 测试 this 指向
// import '@/test/testAssignOrSpreadOperator'; // 测试 浅拷贝
// import '@/test/testMapOrObject'; // 测试 Map 和 Object 区别
// import '@/practice/handwriting';
// import '@/leetcode/find';
// import '@/leetcode/other';
// import '@/leetcode/sort';
// import '@/leetcode/tree';
// import '@/test/testThis'; // 测试 this
// import '@/test/testSCope'; // 测试 作用域
// import '@/practice/comply/algorithm'; // 算法实现
// import '@/practice/comply/logic'; // 逻辑实现
// import '@/practice/comply/outputResult'; // 结果输出
// import '@/leetcode/array';

