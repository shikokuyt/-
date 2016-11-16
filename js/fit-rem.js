var dpr, rem, scale;
var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector7('meta[name="viewport"]');

dpr = window.devicePixelRatio || 1;
rem = docEl.clientWidth * dpr / 10; // eg. iphone6 375 * 2 / 10 = 75
scale = 1 / dpr; /* Retina进行缩放 */

// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute(
    'content', 
    'width='+dpr*docEl.clientWidth+',initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale +',user-scalable=no'
);

// 设置data-dpr属性，留作css hack之用
docEl.setAttribute('data-dpr', dpr);

// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:'+rem+'px!important;}';

// rem和px的转换
window.rem2px = function(v) {
    v = parseFloat(v);
    return v * rem;
};
window.px2rem = function(v) {
    v = parseFloat(v);
    return v / rem;
};

// export
window.dpr = dpr;
window.rem = rem;
