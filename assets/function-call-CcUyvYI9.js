import{m as I,u as B}from"./mount-component-DcarfxxX.js";import{d as T,Q as g,ad as C,A as k,aP as z,v as L,j as v,o as M,k as N,h as s,x as w,y as j,I as U,a4 as q,L as V,q as O,aJ as A,r as D,ac as H}from"./index-Fkz6oxSg.js";import{P as J}from"./index-CXI_WXjA.js";import{L as Q}from"./index-BY2_YVTF.js";let f=0;function _(e){e?(f||document.body.classList.add("van-toast--unclickable"),f++):f&&(f--,f||document.body.classList.remove("van-toast--unclickable"))}const[E,i]=L("toast"),F=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],G={icon:String,show:Boolean,type:k("text"),overlay:Boolean,message:g,iconSize:g,duration:z(2e3),position:k("middle"),teleport:[String,Object],wordBreak:String,className:C,iconPrefix:String,transition:k("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:C,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:g};var K=T({name:E,props:G,emits:["update:show"],setup(e,{emit:o,slots:a}){let l,c=!1;const r=()=>{const t=e.show&&e.forbidClick;c!==t&&(c=t,_(c))},d=t=>o("update:show",t),y=()=>{e.closeOnClick&&d(!1)},u=()=>clearTimeout(l),b=()=>{const{icon:t,type:n,iconSize:p,iconPrefix:P,loadingType:x}=e;if(t||n==="success"||n==="fail")return s(U,{name:t||n,size:p,class:i("icon"),classPrefix:P},null);if(n==="loading")return s(Q,{class:i("loading"),size:p,type:x},null)},S=()=>{const{type:t,message:n}=e;if(a.message)return s("div",{class:i("text")},[a.message()]);if(q(n)&&n!=="")return t==="html"?s("div",{key:0,class:i("text"),innerHTML:String(n)},null):s("div",{class:i("text")},[n])};return v(()=>[e.show,e.forbidClick],r),v(()=>[e.show,e.type,e.message,e.duration],()=>{u(),e.show&&e.duration>0&&(l=setTimeout(()=>{d(!1)},e.duration))}),M(r),N(r),()=>s(J,w({class:[i([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:u,"onUpdate:show":d},j(e,F)),{default:()=>[b(),S()]})}});const R={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let m=[],W=!1,h=O({},R);const X=new Map;function Y(e){return A(e)?e:{message:e}}function Z(){const{instance:e}=I({setup(){const o=D(""),{open:a,state:l,close:c,toggle:r}=B(),d=()=>{},y=()=>s(K,w(l,{onClosed:d,"onUpdate:show":r}),null);return v(o,u=>{l.message=u}),H().render=y,{open:a,close:c,message:o}}});return e}function $(){if(!m.length||W){const e=Z();m.push(e)}return m[m.length-1]}function se(e={}){if(!V)return{};const o=$(),a=Y(e);return o.open(O({},h,X.get(a.type||h.type),a)),o}export{se as s};
