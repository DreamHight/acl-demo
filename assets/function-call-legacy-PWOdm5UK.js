System.register(["./mount-component-legacy-CrskDjG3.js","./index-legacy-sy5T4190.js","./index-legacy-DE2h8knL.js","./index-legacy-C3pbXZkM.js"],(function(e,o){"use strict";var n,t,s,a,i,l,c,r,d,u,y,p,v,g,m,k,f,C,x,h,w,S,b;return{setters:[e=>{n=e.m,t=e.u},e=>{s=e.d,a=e.Q,i=e.ad,l=e.A,c=e.aP,r=e.v,d=e.j,u=e.o,y=e.k,p=e.h,v=e.x,g=e.y,m=e.I,k=e.a4,f=e.L,C=e.q,x=e.aJ,h=e.r,w=e.ac},e=>{S=e.P},e=>{b=e.L}],execute:function(){e("s",(function(e={}){if(!f)return{};const o=function(){if(!T.length||L){const e=function(){const{instance:e}=n({setup(){const e=h(""),{open:o,state:n,close:s,toggle:a}=t(),i=()=>{},l=()=>p(P,v(n,{onClosed:i,"onUpdate:show":a}),null);return d(e,(e=>{n.message=e})),w().render=l,{open:o,close:s,message:e}}});return e}();T.push(e)}return T[T.length-1]}(),s=x(a=e)?a:{message:a};var a;return o.open(C({},I,N.get(s.type||I.type),s)),o}));let o=0;const[O,B]=r("toast"),j=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],z={icon:String,show:Boolean,type:l("text"),overlay:Boolean,message:a,iconSize:a,duration:c(2e3),position:l("middle"),teleport:[String,Object],wordBreak:String,className:i,iconPrefix:String,transition:l("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:i,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:a};var P=s({name:O,props:z,emits:["update:show"],setup(e,{emit:n,slots:t}){let s,a=!1;const i=()=>{const n=e.show&&e.forbidClick;a!==n&&(a=n,a?(o||document.body.classList.add("van-toast--unclickable"),o++):o&&(o--,o||document.body.classList.remove("van-toast--unclickable")))},l=e=>n("update:show",e),c=()=>{e.closeOnClick&&l(!1)},r=()=>clearTimeout(s),f=()=>{const{icon:o,type:n,iconSize:t,iconPrefix:s,loadingType:a}=e;return o||"success"===n||"fail"===n?p(m,{name:o||n,size:t,class:B("icon"),classPrefix:s},null):"loading"===n?p(b,{class:B("loading"),size:t,type:a},null):void 0},C=()=>{const{type:o,message:n}=e;return t.message?p("div",{class:B("text")},[t.message()]):k(n)&&""!==n?"html"===o?p("div",{key:0,class:B("text"),innerHTML:String(n)},null):p("div",{class:B("text")},[n]):void 0};return d((()=>[e.show,e.forbidClick]),i),d((()=>[e.show,e.type,e.message,e.duration]),(()=>{r(),e.show&&e.duration>0&&(s=setTimeout((()=>{l(!1)}),e.duration))})),u(i),y(i),()=>p(S,v({class:[B([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:c,onClosed:r,"onUpdate:show":l},g(e,j)),{default:()=>[f(),C()]})}});let T=[],L=!1,I=C({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1});const N=new Map}}}));
