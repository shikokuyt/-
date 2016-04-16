// 不使用Math.random来生成随机数

var rand = (function () {
    var today = new Date();
    var seed = today.getTime();
    function rnd() {
      seed = ( seed * 9301 + 49297 ) % 233280;
      return seed / (233280.0);
    }
    return function (number) {
      return Math.ceil(rnd(seed) * number);
    };
}());
