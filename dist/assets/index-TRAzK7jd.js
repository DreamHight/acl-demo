import{u as q,a as I}from"./use-route-D3cKCzsV.js";import{d as C,q as z,v as O,aO as R,h as o,I as D,ap as w,A as r,Q as L,D as N,ac as $}from"./index--t9azhna.js";import{L as U}from"./index-BLXt_GtL.js";import{r as l}from"./request-Bq1UqodM.js";const[_,i]=O("button"),A=z({},I,{tag:r("button"),text:String,icon:String,type:r("default"),size:r("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:r("button"),loadingSize:L,loadingText:String,loadingType:String,iconPosition:r("left")});var E=C({name:_,props:A,emits:["click"],setup(n,{emit:s,slots:t}){const m=q(),y=()=>t.loading?t.loading():o(U,{size:n.loadingSize,type:n.loadingType,class:i("loading")},null),d=()=>{if(n.loading)return y();if(t.icon)return o("div",{class:i("icon")},[t.icon()]);if(n.icon)return o(D,{name:n.icon,class:i("icon"),classPrefix:n.iconPrefix},null)},b=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return o("span",{class:i("text")},[e])},p=()=>{const{color:e,plain:c}=n;if(e){const a={color:c?e:"white"};return c||(a.background=e),e.includes("gradient")?a.border=0:a.borderColor=e,a}},S=e=>{n.loading?w(e):n.disabled||(s("click",e),m())};return()=>{const{tag:e,type:c,size:a,block:x,round:P,plain:h,square:k,loading:B,disabled:u,hairline:f,nativeType:T,iconPosition:g}=n,v=[i([c,a,{plain:h,block:x,round:P,square:k,loading:B,disabled:u,hairline:f}]),{[R]:f}];return o(e,{type:T,class:v,style:p(),disabled:u,onClick:S},{default:()=>[o("div",{class:i("content")},[g==="left"&&d(),b(),g==="right"&&d()])]})}}});const H=N(E);let Q=0;function J(){const n=$(),{name:s="unknown"}=(n==null?void 0:n.type)||{};return"".concat(s,"-").concat(++Q)}async function K(){return l("/prose")}async function M(n){return l("/complaint/complaint-info/create",{method:"POST",data:n})}async function W(n){return l("/complaint/complaint-info/get",{method:"POST",data:n})}async function X(n){return l("/complaint/complaint-info/captcha?token=".concat(n),{method:"get"})}export{H as B,M as a,W as b,X as g,K as q,J as u};
