!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],o=document.querySelector('[data-action="start"]'),u=document.querySelector('[data-action="stop"]'),c=document.querySelector("body");o.addEventListener("click",(function(){n=setInterval((function(){var e,t,n=(e=0,t=r.length-1,Math.floor(Math.random()*(t-e+1)+e));console.log(r[n]),c.style.backgroundColor="".concat(r[n])}),1e3),o.setAttribute("disabled",!0)})),u.addEventListener("click",(function(){clearInterval(n),o.removeAttribute("disabled")}))}]);
//# sourceMappingURL=main.bundle.js.map