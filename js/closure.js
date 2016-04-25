function outer() {
  var largeObject = 5;
  return function () {
    // console.log(largeObject);
    window.eval('');
    debugger;
  };
}
var inner = outer();
