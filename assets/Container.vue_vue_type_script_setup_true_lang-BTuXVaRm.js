import{d as $,l as I,a as w,a$ as N,ag as x,b as a}from"./index-fMnOmPs1.js";var A=typeof global=="object"&&global&&global.Object===Object&&global,F=typeof self=="object"&&self&&self.Object===Object&&self,T=A||F||Function("return this")(),o=T.Symbol,j=Object.prototype,P=j.hasOwnProperty,B=j.toString,f=o?o.toStringTag:void 0;function M(t){var r=P.call(t,f),n=t[f];try{t[f]=void 0;var e=!0}catch(s){}var i=B.call(t);return e&&(r?t[f]=n:delete t[f]),i}var E=Object.prototype,X=E.toString;function k(t){return X.call(t)}var G="[object Null]",R="[object Undefined]",d=o?o.toStringTag:void 0;function W(t){return t==null?t===void 0?R:G:d&&d in Object(t)?M(t):k(t)}function _(t){return t!=null&&typeof t=="object"}var C="[object Symbol]";function S(t){return typeof t=="symbol"||_(t)&&W(t)==C}function z(t,r){for(var n=-1,e=t==null?0:t.length,i=Array(e);++n<e;)i[n]=r(t[n],n,t);return i}var H=Array.isArray,b=o?o.prototype:void 0,g=b?b.toString:void 0;function O(t){if(typeof t=="string")return t;if(H(t))return z(t,O)+"";if(S(t))return g?g.call(t):"";var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}var L=/\s/;function U(t){for(var r=t.length;r--&&L.test(t.charAt(r)););return r}var Y=/^\s+/;function q(t){return t&&t.slice(0,U(t)+1).replace(Y,"")}function l(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var u=NaN,D=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt;function h(t){if(typeof t=="number")return t;if(S(t))return u;if(l(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=l(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=q(t);var n=J.test(t);return n||K.test(t)?Q(t.slice(2),n?2:8):D.test(t)?u:+t}var V=1/0,Z=17976931348623157e292;function v(t){if(!t)return t===0?t:0;if(t=h(t),t===V||t===-1/0){var r=t<0?-1:1;return r*Z}return t===t?t:0}function tt(t){var r=v(t),n=r%1;return r===r?n?r-n:r:0}function y(t){return t==null?"":O(t)}var rt=T.isFinite,nt=Math.min;function et(t){var r=Math[t];return function(n,e){if(n=h(n),e=e==null?0:nt(tt(e),292),e&&rt(n)){var i=(y(n)+"e").split("e"),s=r(i[0]+"e"+(+i[1]+e));return i=(y(s)+"e").split("e"),+(i[0]+"e"+(+i[1]-e))}return r(n)}}var p=et("round");const m=375,it=600;function c(t){if(t===0)return t;const r=p(t*100/m,3),n=p(t*it/m,3),e=t>0?"min":"max";return"".concat(e,"(").concat(r,"vw, ").concat(n,"px)")}const ft=$({__name:"Container",props:{paddingT:{type:Number,default:46},paddingX:{type:Number,default:16}},setup(t){return(r,n)=>(w(),I("main",{class:"absolute left-0 h-full w-full overflow-y-auto",style:x("padding-top: ".concat(a(c)(t.paddingT),"; padding-left: ").concat(a(c)(t.paddingX),"; padding-right: ").concat(a(c)(t.paddingX)))},[N(r.$slots,"default")],4))}});export{ft as _,l as i,T as r,h as t};
