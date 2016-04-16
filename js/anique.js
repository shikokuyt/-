(function (window, undefined) {
    var $ = function (selector) { return document.querySelector(selector); },
        $$ = function (selectors) { return document.querySelectorAll(selectors); };
    var data = [],
        isAnimation = false;
    
    function sort_partition(left, right) {
        var piovot = data[Math.floor((left + right) / 2)];
        if (left >= right) return ;
        
    }
    function sort(left, right) {
        
    }
    
    function getInputValue() {
        var inStr = $('#entry').value;
        if (isNaN(inStr)) throw new Error('只能是数字');
        return inStr;
    }
    function deal(fn, callback) {
        var args = [].slice.call(arguments, 2);
        return function (e) {
            try {
                var arg = args.map(function (item) {
                    return typeof item === 'function'?item(e):item;
                });
                var result = fn.call(data, arg);
                if (callback != null) {
                    callback(result);
                }
            } catch (ex) {
                if (ex.message != '') {
                    window.alert(ex.message);
                }
            }
            render();
        }; 
    }
    function render() {
        $('#result').innerHTML = data.map(function (d) {
            return '<div style="height:'+d*5+'px"></div>';
        }).join('');
        console.log(data.map(function (d) {
            return '<div>'+d+'</div>';
        }).join(''));
    }
    window.onload = function () {
        $('#left-in').onclick = deal([].unshift, null, getInputValue);
    };
}(window));