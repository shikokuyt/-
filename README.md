# 收集站

1. [模拟栈与队列](/js/mnzd.js)，call/apply的优雅写法
2. [移动端REM适配](/js/fitMobile.js)
3. [REM适配方案代码块](/js/fit-rem.js)
4. [new的替代](/js/newPrinciple.js)
5. [多行文字居中](/html/多行文字居中.html)
6. [在Node和浏览器环境获取全局变量的模式](/js/getGlobal.js)


---

## JavaScript技巧

1. 生成随机的字母数字字符串
``` js
Math.random().toString(36).substr(2)
```
2. 逗号操作符
``` js
var first = 0;
var second = ( first++, 100 );
// first = 1 second = 100
```