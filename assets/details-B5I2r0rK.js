import{a as xe,I as we,_ as be}from"./product_3-D5TGmXBa.js";import{m as Ie,p as Se,q as O,s as U,d as A,x as b,y as S,z as $,A as le,B as Oe,i,C as Be,D as N,E as F,G as M,r as C,T as W,H as Fe,I as ce,J as Pe,K as P,L as Te,M as re,N as ie,O as ue,P as de,Q as ze,R as Y,w as X,v as G,o as K,S as Le,F as Z,U as De,V,W as Ae,X as ve,Y as He,Z as Ee,_ as Me,$ as Ve,a0 as $e,a1 as Ne,a2 as Re,a3 as je,a4 as Ze,a5 as Ue,f as x,a as w,g as n,a6 as Ye,u as Xe,h as Ge,b as y,t as T,j as J,n as ee,a7 as Ke}from"./index-DoiBBo9m.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";function qe(e,{args:t=[],done:o,canceled:s,error:l}){if(e){const a=e.apply(null,t);Ie(a)?a.then(r=>{r?o():s&&s()}).catch(l||Se):a?o():s&&s()}else o()}function fe(e){const t=U();t&&O(t.proxy,e)}const[Qe,D]=$("loading"),We=Array(12).fill(null).map((e,t)=>i("i",{class:D("line",String(t+1))},null)),Je=i("svg",{class:D("circular"),viewBox:"25 25 50 50"},[i("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),et={size:b,type:S("circular"),color:String,vertical:Boolean,textSize:b,textColor:String};var tt=A({name:Qe,props:et,setup(e,{slots:t}){const o=le(()=>O({color:e.color},Oe(e.size))),s=()=>{const a=e.type==="spinner"?We:Je;return i("span",{class:D("spinner",e.type),style:o.value},[t.icon?t.icon():a])},l=()=>{var a;if(t.default)return i("span",{class:D("text"),style:{fontSize:Be(e.textSize),color:(a=e.textColor)!=null?a:e.color}},[t.default()])};return()=>{const{type:a,vertical:r}=e;return i("div",{class:D([a,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[s(),l()])}}});const ot=N(tt),nt={show:Boolean,zIndex:b,overlay:F,duration:b,teleport:[String,Object],lockScroll:F,lazyRender:F,beforeClose:Function,overlayStyle:Object,overlayClass:M,transitionAppear:Boolean,closeOnClickOverlay:F};function at(e,t){return e>t?"horizontal":t>e?"vertical":""}function st(){const e=C(0),t=C(0),o=C(0),s=C(0),l=C(0),a=C(0),r=C(""),u=C(!0),p=()=>r.value==="vertical",g=()=>r.value==="horizontal",f=()=>{o.value=0,s.value=0,l.value=0,a.value=0,r.value="",u.value=!0};return{move:v=>{const h=v.touches[0];o.value=(h.clientX<0?0:h.clientX)-e.value,s.value=h.clientY-t.value,l.value=Math.abs(o.value),a.value=Math.abs(s.value);const _=10;(!r.value||l.value<_&&a.value<_)&&(r.value=at(l.value,a.value)),u.value&&(l.value>W||a.value>W)&&(u.value=!1)},start:v=>{f(),e.value=v.touches[0].clientX,t.value=v.touches[0].clientY},reset:f,startX:e,startY:t,deltaX:o,deltaY:s,offsetX:l,offsetY:a,direction:r,isVertical:p,isHorizontal:g,isTap:u}}let z=0;const te="van-overflow-hidden";function lt(e,t){const o=st(),s="01",l="10",a=f=>{o.move(f);const c=o.deltaY.value>0?l:s,d=Te(f.target,e.value),{scrollHeight:v,offsetHeight:h,scrollTop:_}=d;let k="11";_===0?k=h>=v?"00":"01":_+h>=v&&(k="10"),k!=="11"&&o.isVertical()&&!(parseInt(k,2)&parseInt(c,2))&&re(f)},r=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",a,{passive:!1}),z||document.body.classList.add(te),z++},u=()=>{z&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",a),z--,z||document.body.classList.remove(te))},p=()=>t()&&r(),g=()=>t()&&u();Fe(p),ce(g),Pe(g),P(t,f=>{f?r():u()})}function me(e){const t=C(!1);return P(e,o=>{o&&(t.value=o)},{immediate:!0}),o=>()=>t.value?o():null}const oe=()=>{var e;const{scopeId:t}=((e=U())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[ct,rt]=$("overlay"),it={show:Boolean,zIndex:b,duration:b,className:M,lockScroll:F,lazyRender:F,customStyle:Object,teleport:[String,Object]};var ut=A({name:ct,props:it,setup(e,{slots:t}){const o=C(),s=me(()=>e.show||!e.lazyRender),l=r=>{e.lockScroll&&re(r)},a=s(()=>{var r;const u=O(ze(e.zIndex),e.customStyle);return Y(e.duration)&&(u.animationDuration="".concat(e.duration,"s")),X(i("div",{ref:o,style:u,class:[rt(),e.className]},[(r=t.default)==null?void 0:r.call(t)]),[[G,e.show]])});return ie("touchmove",l,{target:o}),()=>{const r=i(ue,{name:"van-fade",appear:!0},{default:a});return e.teleport?i(de,{to:e.teleport},{default:()=>[r]}):r}}});const dt=N(ut),vt=O({},nt,{round:Boolean,position:S("center"),closeIcon:S("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:S("top-right"),destroyOnClose:Boolean,safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[ft,ne]=$("popup");var mt=A({name:ft,inheritAttrs:!1,props:vt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:s}){let l,a;const r=C(),u=C(),p=me(()=>e.show||!e.lazyRender),g=le(()=>{const m={zIndex:r.value};if(Y(e.duration)){const I=e.position==="center"?"animationDuration":"transitionDuration";m[I]="".concat(e.duration,"s")}return m}),f=()=>{l||(l=!0,r.value=e.zIndex!==void 0?+e.zIndex:De(),t("open"))},c=()=>{l&&qe(e.beforeClose,{done(){l=!1,t("close"),t("update:show",!1)}})},d=m=>{t("clickOverlay",m),e.closeOnClickOverlay&&c()},v=()=>{if(e.overlay)return i(dt,V({show:e.show,class:e.overlayClass,zIndex:r.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},oe(),{onClick:d}),{default:s["overlay-content"]})},h=m=>{t("clickCloseIcon",m),c()},_=()=>{if(e.closeable)return i(ve,{role:"button",tabindex:0,name:e.closeIcon,class:[ne("close-icon",e.closeIconPosition),Ae],classPrefix:e.iconPrefix,onClick:h},null)};let k;const pe=()=>{k&&clearTimeout(k),k=setTimeout(()=>{t("opened")})},he=()=>t("closed"),ye=m=>t("keydown",m),ge=p(()=>{var m;const{destroyOnClose:I,round:j,position:H,safeAreaInsetTop:_e,safeAreaInsetBottom:ke,show:Q}=e;if(!(!Q&&I))return X(i("div",V({ref:u,style:g.value,role:"dialog",tabindex:0,class:[ne({round:j,[H]:H}),{"van-safe-area-top":_e,"van-safe-area-bottom":ke}],onKeydown:ye},o,oe()),[(m=s.default)==null?void 0:m.call(s),_()]),[[G,Q]])}),q=()=>{const{position:m,transition:I,transitionAppear:j}=e,H=m==="center"?"van-fade":"van-popup-slide-".concat(m);return i(ue,{name:I||H,appear:j,onAfterEnter:pe,onAfterLeave:he},{default:ge})};return P(()=>e.show,m=>{m&&!l&&(f(),o.tabindex===0&&He(()=>{var I;(I=u.value)==null||I.focus()})),!m&&l&&(l=!1,t("close"))}),fe({popupRef:u}),lt(u,()=>e.show&&e.lockScroll),ie("popstate",()=>{e.closeOnPopstate&&(c(),a=!1)}),K(()=>{e.show&&f()}),Le(()=>{a&&(t("update:show",!0),a=!1)}),ce(()=>{e.show&&e.teleport&&(c(),a=!0)}),Ee(Me,()=>e.show),()=>e.teleport?i(de,{to:e.teleport},{default:()=>[v(),q()]}):i(Z,null,[v(),q()])}});const Ct=N(mt);let L=0;function pt(e){e?(L||document.body.classList.add("van-toast--unclickable"),L++):L&&(L--,L||document.body.classList.remove("van-toast--unclickable"))}const[ht,B]=$("toast"),yt=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],gt={icon:String,show:Boolean,type:S("text"),overlay:Boolean,message:b,iconSize:b,duration:Ve(2e3),position:S("middle"),teleport:[String,Object],wordBreak:String,className:M,iconPrefix:String,transition:S("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:M,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:b};var Ce=A({name:ht,props:gt,emits:["update:show"],setup(e,{emit:t,slots:o}){let s,l=!1;const a=()=>{const c=e.show&&e.forbidClick;l!==c&&(l=c,pt(l))},r=c=>t("update:show",c),u=()=>{e.closeOnClick&&r(!1)},p=()=>clearTimeout(s),g=()=>{const{icon:c,type:d,iconSize:v,iconPrefix:h,loadingType:_}=e;if(c||d==="success"||d==="fail")return i(ve,{name:c||d,size:v,class:B("icon"),classPrefix:h},null);if(d==="loading")return i(ot,{class:B("loading"),size:v,type:_},null)},f=()=>{const{type:c,message:d}=e;if(o.message)return i("div",{class:B("text")},[o.message()]);if(Y(d)&&d!=="")return c==="html"?i("div",{key:0,class:B("text"),innerHTML:String(d)},null):i("div",{class:B("text")},[d])};return P(()=>[e.show,e.forbidClick],a),P(()=>[e.show,e.type,e.message,e.duration],()=>{p(),e.show&&e.duration>0&&(s=setTimeout(()=>{r(!1)},e.duration))}),K(a),$e(a),()=>i(Ct,V({class:[B([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:u,onClosed:p,"onUpdate:show":r},Ne(e,yt)),{default:()=>[g(),f()]})}});function _t(){const e=je({show:!1}),t=l=>{e.show=l},o=l=>{O(e,l,{transitionAppear:!0}),t(!0)},s=()=>t(!1);return fe({open:o,close:s,toggle:t}),{open:o,close:s,state:e,toggle:t}}function kt(e){const t=Re(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}const xt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let E=[],wt=!1,ae=O({},xt);const bt=new Map;function It(e){return Ue(e)?e:{message:e}}function St(){const{instance:e}=kt({setup(){const t=C(""),{open:o,state:s,close:l,toggle:a}=_t(),r=()=>{},u=()=>i(Ce,V(s,{onClosed:r,"onUpdate:show":a}),null);return P(t,p=>{s.message=p}),U().render=u,{open:o,close:l,message:t}}});return e}function Ot(){if(!E.length||wt){const e=St();E.push(e)}return E[E.length-1]}function Bt(e={}){if(!Ze)return{};const t=Ot(),o=It(e);return t.open(O({},ae,bt.get(o.type||ae.type),o)),t}N(Ce);const Ft=""+new URL("ficus_discovery-D6oSYlm7.png",import.meta.url).href,Pt=""+new URL("product_1-BeSyDQl9.jpg",import.meta.url).href,Tt=""+new URL("product_logo-D7BgkMYz.jpeg",import.meta.url).href,zt={},Lt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function Dt(e,t){return w(),x("svg",Lt,t[0]||(t[0]=[n("path",{d:"M12.6092 13.2989C12.5163 13.3926 12.4057 13.467 12.2838 13.5177C12.1619 13.5685 12.0312 13.5947 11.8992 13.5947C11.7672 13.5947 11.6365 13.5685 11.5147 13.5177C11.3928 13.467 11.2822 13.3926 11.1892 13.2989L6.60923 8.70885C6.51627 8.61512 6.40567 8.54073 6.28381 8.48996C6.16195 8.43919 6.03124 8.41305 5.89923 8.41305C5.76722 8.41305 5.63651 8.43919 5.51465 8.48996C5.39279 8.54073 5.28219 8.61512 5.18923 8.70885C5.00298 8.89621 4.89844 9.14967 4.89844 9.41385C4.89844 9.67804 5.00298 9.93149 5.18923 10.1189L9.77923 14.7089C10.3417 15.2707 11.1042 15.5862 11.8992 15.5862C12.6942 15.5862 13.4567 15.2707 14.0192 14.7089L18.6092 10.1189C18.794 9.93259 18.8981 9.68119 18.8992 9.41885C18.9 9.28725 18.8748 9.15678 18.825 9.03494C18.7752 8.91311 18.7019 8.80229 18.6092 8.70885C18.5163 8.61512 18.4057 8.54073 18.2838 8.48996C18.1619 8.43919 18.0312 8.41305 17.8992 8.41305C17.7672 8.41305 17.6365 8.43919 17.5147 8.48996C17.3928 8.54073 17.2822 8.61512 17.1892 8.70885L12.6092 13.2989Z",fill:"currentColor"},null,-1)]))}const se=R(zt,[["render",Dt]]),At={},Ht={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"};function Et(e,t){return w(),x("svg",Ht,t[0]||(t[0]=[n("g",{"clip-path":"url(#clip0_268_1194)"},[n("path",{d:"M16.6667 5.83333H15.2183C15.6895 5.418 16.0635 4.90407 16.3138 4.328C16.5641 3.75193 16.6846 3.12784 16.6667 2.5C16.6667 2.27899 16.5789 2.06702 16.4226 1.91074C16.2663 1.75446 16.0543 1.66667 15.8333 1.66667C15.6123 1.66667 15.4004 1.75446 15.2441 1.91074C15.0878 2.06702 15 2.27899 15 2.5C15 4.685 13.0242 5.44167 11.5217 5.70083C12.0762 4.71755 12.4101 3.62531 12.5 2.5C12.5 1.83696 12.2366 1.20107 11.7678 0.732233C11.2989 0.263392 10.663 0 10 0C9.33696 0 8.70107 0.263392 8.23223 0.732233C7.76339 1.20107 7.5 1.83696 7.5 2.5C7.58992 3.62531 7.92376 4.71755 8.47833 5.70083C6.97583 5.44167 5 4.685 5 2.5C5 2.27899 4.9122 2.06702 4.75592 1.91074C4.59964 1.75446 4.38768 1.66667 4.16667 1.66667C3.94565 1.66667 3.73369 1.75446 3.57741 1.91074C3.42113 2.06702 3.33333 2.27899 3.33333 2.5C3.31543 3.12784 3.4359 3.75193 3.6862 4.328C3.9365 4.90407 4.3105 5.418 4.78167 5.83333H3.33333C2.44928 5.83333 1.60143 6.18452 0.976311 6.80964C0.35119 7.43476 0 8.28261 0 9.16667L0 10C0 10.442 0.175595 10.8659 0.488155 11.1785C0.800716 11.4911 1.22464 11.6667 1.66667 11.6667V15.8333C1.66799 16.938 2.1074 17.997 2.88852 18.7782C3.66963 19.5593 4.72867 19.9987 5.83333 20H14.1667C15.2713 19.9987 16.3304 19.5593 17.1115 18.7782C17.8926 17.997 18.332 16.938 18.3333 15.8333V11.6667C18.7754 11.6667 19.1993 11.4911 19.5118 11.1785C19.8244 10.8659 20 10.442 20 10V9.16667C20 8.28261 19.6488 7.43476 19.0237 6.80964C18.3986 6.18452 17.5507 5.83333 16.6667 5.83333ZM10 1.66667C10.221 1.66667 10.433 1.75446 10.5893 1.91074C10.7455 2.06702 10.8333 2.27899 10.8333 2.5C10.7327 3.38569 10.4489 4.24076 10 5.01083C9.55106 4.24076 9.26726 3.38569 9.16667 2.5C9.16667 2.27899 9.25446 2.06702 9.41074 1.91074C9.56702 1.75446 9.77899 1.66667 10 1.66667ZM1.66667 9.16667C1.66667 8.72464 1.84226 8.30072 2.15482 7.98816C2.46738 7.67559 2.89131 7.5 3.33333 7.5H9.16667V10H1.66667V9.16667ZM3.33333 15.8333V11.6667H9.16667V18.3333H5.83333C5.17029 18.3333 4.53441 18.0699 4.06557 17.6011C3.59673 17.1323 3.33333 16.4964 3.33333 15.8333ZM16.6667 15.8333C16.6667 16.4964 16.4033 17.1323 15.9344 17.6011C15.4656 18.0699 14.8297 18.3333 14.1667 18.3333H10.8333V11.6667H16.6667V15.8333ZM10.8333 10V7.5H16.6667C17.1087 7.5 17.5326 7.67559 17.8452 7.98816C18.1577 8.30072 18.3333 8.72464 18.3333 9.16667V10H10.8333Z",fill:"currentColor"})],-1),n("defs",null,[n("clipPath",{id:"clip0_268_1194"},[n("rect",{width:"20",height:"20",fill:"currentColor"})])],-1)]))}const Mt=R(At,[["render",Et]]),Vt={},$t={xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"};function Nt(e,t){return w(),x("svg",$t,t[0]||(t[0]=[Ye('<circle cx="16" cy="16" r="15.5" stroke="black"></circle><path d="M17.5 12.5V11.5C17.5 11.2348 17.3946 10.9804 17.2071 10.7929C17.0196 10.6054 16.7652 10.5 16.5 10.5H15.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 19.5H10.5C10.2348 19.5 9.98043 19.3946 9.79289 19.2071C9.60536 19.0196 9.5 18.7652 9.5 18.5V11.5C9.5 11.2348 9.60536 10.9804 9.79289 10.7929C9.98043 10.6054 10.2348 10.5 10.5 10.5H11.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.5 14.5H16.5C15.9477 14.5 15.5 14.9477 15.5 15.5V21.5C15.5 22.0523 15.9477 22.5 16.5 22.5H21.5C22.0523 22.5 22.5 22.0523 22.5 21.5V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.34 11.12C15.548 10.2981 14.9268 9.5 14.0789 9.5H12.9211C12.0732 9.5 11.452 10.2981 11.66 11.12V11.12C11.685 11.2284 11.7461 11.3251 11.8333 11.3942C11.9206 11.4633 12.0287 11.5006 12.14 11.5H14.86C14.9713 11.5006 15.0794 11.4633 15.1666 11.3942C15.2539 11.3251 15.315 11.2284 15.34 11.12V11.12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 17.5H20.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 19.5H20.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>',7)]))}const Rt=R(Vt,[["render",Nt]]),jt={class:"nav-back"},Zt={class:"product-image"},Ut=["src"],Yt={class:"text-center"},Xt=["src"],Gt=["src"],Kt={class:"block-box already-scan flex-between"},qt={class:"already-scan__text"},Qt={class:"block-box ticket-box"},Wt={class:"flex-between"},Jt={class:"ticket-list__btn flex-center"},eo={class:"ticket-num"},to={class:"num"},oo={class:"flex-between product-box"},no={class:"flex-1 product-box__left"},ao={class:"pro-name"},so={class:"flex-shrink-0 flex-center product-box__right"},lo=["src"],co={class:"parameter-box"},ro={class:"name"},io=A({__name:"details",setup(e){const t=Xe(),o=[{id:"1",productName:"潮迹潮汕-潮汕牛肉丸",images:Pt,certified:!0,scanTime:"此產品已在30/12/2024於北京市掃瞄過",ticketList:["310842600132413000"],parameterList:[{color:"#F00",name:"品牌",value:"百威236"},{color:"#FCC864",name:"酒精度",value:"3.6%"},{color:"#9747FF",name:"淨含量",value:"236ml x24"},{color:"#0FA388",name:"儲藏方法",value:"5度-25度"},{color:"#6307DC",name:"生產廠家",value:"百威英博"},{color:"#FF47AA",name:"包裝方式",value:"箱體"},{color:"#37CFFF",name:"產地",value:"四川省資陽市"},{color:"#B7B343",name:"貨號",value:"GB/T4927"},{color:"#FF47ED",name:"類型",value:"啤酒"},{color:"#42737E",name:"商品條型碼",value:"563746876989789985"},{color:"#D48D22",name:"原料與配料",value:"水,麥芽,大米,啤酒花"},{color:"#FF4747",name:"生產日期",value:"見瓶身"},{color:"#FF47ED",name:"產品包裝日期",value:"見瓶身"}]},{id:"2",productName:"L&S-DEAR.SARA",images:xe,certified:!0,scanTime:"此產品已在30/12/2024於北京市掃瞄過",ticketList:["310842600132413600","310842600132413599"],parameterList:[{color:"#F00",name:"品牌",value:"百威236"},{color:"#FCC864",name:"酒精度",value:"3.6%"},{color:"#9747FF",name:"淨含量",value:"236ml x24"},{color:"#0FA388",name:"儲藏方法",value:"5度-25度"},{color:"#6307DC",name:"生產廠家",value:"百威英博"},{color:"#FF47AA",name:"包裝方式",value:"箱體"},{color:"#37CFFF",name:"產地",value:"四川省資陽市"},{color:"#B7B343",name:"貨號",value:"GB/T4927"},{color:"#FF47ED",name:"類型",value:"啤酒"},{color:"#42737E",name:"商品條型碼",value:"563746876989789985"},{color:"#D48D22",name:"原料與配料",value:"水,麥芽,大米,啤酒花"},{color:"#FF4747",name:"生產日期",value:"見瓶身"},{color:"#FF47ED",name:"產品包裝日期",value:"見瓶身"}]}],s=C(o[0]),l=C("danger"),a=C(!1);function r(){a.value=!a.value}async function u(f){if(!!navigator.clipboard)try{await navigator.clipboard.writeText(f),Bt("复制成功")}catch(d){console.error("Failed to copy: ",d)}}const p=C("product-parameters--hide");function g(){p.value=p.value==="product-parameters--hide"?"product-parameters--show":"product-parameters--hide"}return K(()=>{const f=t.query.id,c=o.find(d=>d.id===f);c&&(s.value=c)}),(f,c)=>{const d=be;return w(),x("div",{class:ee(["container",["container--"+y(l)]])},[n("div",jt,[i(d)]),c[5]||(c[5]=n("div",{class:"flex-between pt-50px mx-20px"},[n("div",{class:"title__line"}),n("p",{class:"title__title"},"产品基本资料"),n("div",{class:"title__line"})],-1)),n("div",Zt,[n("img",{width:"100px",height:"100px",src:y(we)},null,8,Ut),n("div",Yt,[n("img",{width:"263px",src:y(s).images},null,8,Xt)]),y(s).certified?(w(),x("img",{key:0,class:"ficus_discovery",width:"153px",height:"153px",src:y(Ft)},null,8,Gt)):Ge("",!0)]),n("div",Kt,[c[0]||(c[0]=n("span",{style:{display:"flex","align-items":"center","justify-content":"center",width:"53px",height:"53px","border-radius":"50%","background-color":"#F8B2B2"}},[n("span",{style:{display:"flex","align-items":"center","justify-content":"center",width:"39px",height:"39px","border-radius":"50%","background-color":"#F28686"}},[n("span",{style:{display:"inline-block",width:"29px",height:"29px","line-height":"29px","text-align":"center","border-radius":"50%","background-color":"#D84040","font-family":"Inter","font-size":"20px","font-style":"normal","font-weight":"700"}},"!")])],-1)),n("span",qt,T(y(s).scanTime),1)]),n("div",Qt,[n("div",Wt,[n("div",Jt,[i(Mt),c[1]||(c[1]=n("span",{class:"ml-8px"},"兑换彩票",-1))]),c[2]||(c[2]=n("span",{class:"ticket-list__desc"},"彩票号码列表",-1)),i(se,{class:"ticket-list__icon",onClick:r})]),X(n("div",eo,[(w(!0),x(Z,null,J(y(s).ticketList,(v,h)=>(w(),x("div",{key:h,class:"ticket-num__item flex-between"},[c[3]||(c[3]=n("span",{class:"name"},"彩票号码",-1)),n("span",to,T(v),1),i(Rt,{onClick:_=>u(v)},null,8,["onClick"])]))),128))],512),[[G,y(a)]])]),n("div",oo,[n("div",no,[c[4]||(c[4]=n("div",{class:"pro-title"},"产品名称",-1)),n("div",ao,T(y(s).productName),1)]),n("div",so,[n("img",{width:"75px",height:"75px",src:y(Tt)},null,8,lo)])]),n("div",{class:ee(["product-parameters",[y(p)]])},[n("h4",{class:"parameter-title text-center",onClick:g},"产品参数"),n("div",{class:"parameter-icon",onClick:g},[i(se)]),n("div",co,[(w(!0),x(Z,null,J(y(s).parameterList,(v,h)=>(w(),x("div",{key:h,class:"parameter-item"},[n("div",{class:"rounded",style:Ke({backgroundColor:v.color})},null,4),n("div",ro,T(v.name),1),n("div",null,T(v.value),1)]))),128))])],2)],2)}}}),mo=R(io,[["__scopeId","data-v-8287efd2"]]);export{mo as default};
