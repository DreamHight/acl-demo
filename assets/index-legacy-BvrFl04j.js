System.register([],(function(e,r){"use strict";return{execute:function(){e({a:function(e){if(11!==e.length)return"请输入11位手机号码"},c:function(e){if(18!==e.length)return"请输入18位身份证号码";for(let a=0;a<17;a++)if(!/^\d+$/.test(e[a]))return"身份证号码前17位必须为数字";const r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];let t=0;for(let a=0;a<17;a++)t+=Number.parseInt(e[a],10)*r[a];let n="";switch(t%11){case 0:n="1";break;case 1:n="0";break;case 2:n="X";break;case 3:n="9";break;case 4:n="8";break;case 5:n="7";break;case 6:n="6";break;case 7:n="5";break;case 8:n="4";break;case 9:n="3";break;case 10:n="2"}return e[17].toUpperCase()===n?"":"身份证号码不正确"},d:function(e){const r=atob(e),t=new Uint8Array(r.length);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return(new TextDecoder).decode(t)},e:function(e){return btoa(String.fromCharCode(...new Uint8Array((new TextEncoder).encode(e))))}})}}}));
