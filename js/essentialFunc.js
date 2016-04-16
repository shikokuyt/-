function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
    if (callNow) func.apply(context, args);
  };
}
var i=0;
var myEfficientFn = debounce(function () {
  console.log(i++);
}, 250);
window.addEventListener('resize', myEfficientFn, false);
/* Debounce End */

function poll(fn, callback, errback, timeout, interval) {
  var endTime = Number(new Date() + (timeout || 2000));
  interval = interval || 100;

  (function p() {
    // If the condition is met, we're done!
    if (fn()) {
      callback();
    }
    // If the condition isn't met but the timeout hasn't elapsed,go again
    else if (Number(new Date()) < endTime) {
      setTimeout(p, interval);
    }
    // Didn't match and too much time, reject
    else {
      errback(new Error('timed out for '+fn+': '+arguments));
    }
  })();
}

poll(
  function () {
    return false;
  },
  function () {
    console.log('Fuck You');
  },
  function () {
    console.log('Fuck Me');
  }
);
