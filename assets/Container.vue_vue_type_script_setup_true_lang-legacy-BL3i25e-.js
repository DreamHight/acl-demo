System.register(["./index-legacy-CuzD0Ejf.js"],(function(t,e){"use strict";var r,n,o,i,u,a;return{setters:[t=>{r=t.d,n=t.f,o=t.a,i=t.s,u=t.p,a=t.b}],execute:function(){t({i:X,t:P});var e="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,f=t("r",e||l||Function("return this")()),c=f.Symbol,s=Object.prototype,p=s.hasOwnProperty,d=s.toString,v=c?c.toStringTag:void 0,b=Object.prototype.toString,g="[object Null]",y="[object Undefined]",j=c?c.toStringTag:void 0;function m(t){return null==t?void 0===t?y:g:j&&j in Object(t)?function(t){var e=p.call(t,v),r=t[v];try{t[v]=void 0;var n=!0}catch(i){}var o=d.call(t);return n&&(e?t[v]=r:delete t[v]),o}(t):function(t){return b.call(t)}(t)}var h="[object Symbol]";function O(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&m(t)==h}var $=Array.isArray,S=c?c.prototype:void 0,x=S?S.toString:void 0;function N(t){if("string"==typeof t)return t;if($(t))return function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,N)+"";if(O(t))return x?x.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}var w=/\s/,A=/^\s+/;function T(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&w.test(t.charAt(e)););return e}(t)+1).replace(A,""):t}function X(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var _=NaN,F=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,C=/^0o[0-7]+$/i,I=parseInt;function P(t){if("number"==typeof t)return t;if(O(t))return _;if(X(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=X(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=T(t);var r=M.test(t);return r||C.test(t)?I(t.slice(2),r?2:8):F.test(t)?_:+t}var U=1/0;function k(t){var e=function(t){return t?(t=P(t))===U||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),r=e%1;return e==e?r?e-r:e:0}function q(t){return null==t?"":N(t)}var z,B=f.isFinite,D=Math.min,E=(z=Math.round,function(t,e){if(t=P(t),(e=null==e?0:D(k(e),292))&&B(t)){var r=(q(t)+"e").split("e");return+((r=(q(z(r[0]+"e"+(+r[1]+e)))+"e").split("e"))[0]+"e"+(+r[1]-e))}return z(t)});function G(t){return 0===t?t:`${t>0?"min":"max"}(${E(100*t/375,3)}vw, ${E(600*t/375,3)}px)`}t("_",r({__name:"Container",props:{paddingT:{type:Number,default:46},paddingX:{type:Number,default:16}},setup:t=>(e,r)=>(o(),n("main",{class:"absolute left-0 h-full w-full overflow-y-auto",style:u(`padding-top: ${a(G)(t.paddingT)}; padding-left: ${a(G)(t.paddingX)}; padding-right: ${a(G)(t.paddingX)}`)},[i(e.$slots,"default")],4))}))}}}));
