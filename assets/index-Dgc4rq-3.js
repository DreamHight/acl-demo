import{d as K,z as E,P as O,Q as V,v as Q,r as j,S as U,a0 as re,T as d,j as z,az as ve,o as Z,a1 as fe,a2 as de,M as he,N as ge,W as me,h as $,X as F,C as q,ao as R,ah as M,Z as we,_ as ye,ap as be,D as G,a9 as xe}from"./index-Fkz6oxSg.js";import{a as Se,u as J}from"./use-scope-id-_l-gnkbv.js";const[ee,I]=Q("swipe"),Te={loop:E,width:V,height:V,vertical:Boolean,autoplay:O(0),duration:O(500),touchable:E,lazyRender:Boolean,initialSwipe:O(0),indicatorColor:String,showIndicators:E,stopPropagation:E},te=Symbol(ee);var pe=K({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:b,slots:g}){const u=j(),h=j(),t=U({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=Se(),{children:m,linkChildren:s}=re(te),i=d(()=>m.length),o=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),y=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-o.value*i.value:0),_=d(()=>o.value?Math.ceil(Math.abs(y.value)/o.value):i.value),k=d(()=>i.value*o.value),S=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:"".concat(t.swiping?0:a.duration,"ms"),transform:"translate".concat(a.vertical?"Y":"X","(").concat(+t.offset.toFixed(2),"px)")};if(o.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]="".concat(k.value,"px"),e[n]=a[n]?"".concat(a[n],"px"):""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,_.value):l},X=(e,l=0)=>{let n=e*o.value;a.loop||(n=Math.min(n,-y.value));let f=l-n;return a.loop||(f=R(f,y.value,0)),f},w=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),C=X(c,l);if(a.loop){if(m[0]&&C!==y.value){const D=C<y.value;m[0].setOffset(D?k.value:0)}if(m[i.value-1]&&C!==0){const D=C>0;m[i.value-1].setOffset(D?-k.value:0)}}t.active=c,t.offset=C,n&&c!==f&&b("change",S.value)},A=()=>{t.swiping=!0,t.active<=-1?w({pace:i.value}):t.active>=i.value&&w({pace:-i.value})},ne=()=>{A(),r.reset(),M(()=>{t.swiping=!1,w({pace:-1,emitChange:!0})})},Y=()=>{A(),r.reset(),M(()=>{t.swiping=!1,w({pace:1,emitChange:!0})})};let N;const p=()=>clearTimeout(N),P=()=>{p(),+a.autoplay>0&&i.value>1&&(N=setTimeout(()=>{Y(),P()},+a.autoplay))},T=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!F(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=X(e),m.forEach(c=>{c.setOffset(0)}),P()};F(u)?q().then(l):l()},W=()=>T(t.active);let H;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,H=Date.now(),p(),A())},oe=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(be(e,a.stopPropagation),w({offset:v.value}),x||(b("dragStart",{index:S.value}),x=!0))))},L=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-H,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>o.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/o.value),w({pace:c,emitChange:!0})}else v.value&&w({pace:0});x=!1,t.swiping=!1,b("dragEnd",{index:S.value}),P()},se=(e,l={})=>{A(),r.reset(),M(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?M(()=>{t.swiping=!1}):t.swiping=!1,w({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===S.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return $("i",{style:f,class:I("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return $("div",{class:I("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return J({prev:ne,next:Y,state:t,resize:W,swipeTo:se}),s({size:o,props:a,count:i,activeIndicator:S}),z(()=>a.initialSwipe,e=>T(+e)),z(i,()=>T(t.active)),z(()=>a.autoplay,P),z([we,ye,()=>a.width,()=>a.height],W),z(ve(),e=>{e==="visible"?P():p()}),Z(T),fe(()=>T(t.active)),de(()=>T(t.active)),he(p),ge(p),me("touchmove",oe,{target:h}),()=>{var e;return $("div",{ref:u,class:I()},[$("div",{ref:h,style:ae.value,class:I("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:L,onTouchcancel:L},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ee=G(pe),[Pe,Ce]=Q("swipe-item");var ze=K({name:Pe,setup(a,{slots:b}){let g;const u=U({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=xe(te);if(!h)return;const x=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]="".concat(h.size.value,"px")),u.offset&&(s.transform="translate".concat(i?"Y":"X","(").concat(u.offset,"px)")),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const o=h.activeIndicator.value,v=h.count.value-1,y=o===0&&s?v:o-1,_=o===v&&s?0:o+1;return g=t.value===o||t.value===y||t.value===_,g}),m=s=>{u.offset=s};return Z(()=>{q(()=>{u.mounted=!0})}),J({setOffset:m}),()=>{var s;return $("div",{class:Ce(),style:x.value},[r.value?(s=b.default)==null?void 0:s.call(b):null])}}});const Me=G(ze);export{Ee as S,Me as a};
