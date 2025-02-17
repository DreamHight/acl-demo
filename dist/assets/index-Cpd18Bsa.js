import{_ as ye}from"./Container.vue_vue_type_script_setup_true_lang-DT0PoKFB.js";import{v as H,q as P,a4 as _e,ao as ne,d as B,$ as N,B as z,Q as U,r as x,T as O,a9 as ve,aa as Ve,W as fe,h as v,ap as he,H as ae,z as ge,P as R,a0 as Se,U as Pe,j as L,C as le,y as ie,x as Ee,A as Ie,aq as De,ar as q,D as be,ad as Q,ak as Me,a3 as He,al as Be,i as W,m as $e,as as J,at as ce,c as se,a as X,w as A,l as Ne,b as _,au as Z,av as Ae,aw as Ue,ax as Re}from"./index--t9azhna.js";import{C as Le,a as Fe}from"./index-0uLhIlQC.js";/* empty css              */import{L as pe}from"./index-BLXt_GtL.js";import{a as ze,u as ke}from"./use-scope-id-BR9-4uhw.js";import{P as Ke}from"./index-DBY2agtR.js";import"./use-route-D3cKCzsV.js";import"./interceptor-Bpw39Mwb.js";const[Ye,w,ue]=H("picker"),Ce=e=>e.find(o=>!o.disabled)||e[0];function je(e,o){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(o.children in n)return"cascade"}return"default"}function F(e,o){o=ne(o,0,e.length);for(let n=o;n<e.length;n++)if(!e[n].disabled)return n;for(let n=o-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const re=(e,o,n)=>o!==void 0&&!!e.find(s=>s[n.value]===o);function oe(e,o,n){const s=e.findIndex(f=>f[n.value]===o),l=F(e,s);return e[l]}function Ge(e,o,n){const s=[];let l={[o.children]:e},f=0;for(;l&&l[o.children];){const r=l[o.children],b=n.value[f];if(l=_e(b)?oe(r,b,o):void 0,!l&&r.length){const d=Ce(r)[o.value];l=oe(r,d,o)}f++,s.push(r)}return s}function qe(e){const{transform:o}=window.getComputedStyle(e),n=o.slice(7,o.length-1).split(", ")[5];return Number(n)}function Qe(e){return P({text:"text",value:"value",children:"children"},e)}const de=200,me=300,We=15,[Oe,ee]=H("picker-column"),Te=Symbol(Oe);var Je=B({name:Oe,props:{value:U,fields:N(Object),options:z(),readonly:Boolean,allowHtml:Boolean,optionHeight:N(Number),swipeDuration:N(U),visibleOptionNum:N(U)},emits:["change","clickOption","scrollInto"],setup(e,{emit:o,slots:n}){let s,l,f,r,b;const d=x(),g=x(),m=x(0),c=x(0),p=ze(),k=()=>e.options.length,V=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,T=u=>{let t=F(e.options,u);const a=-t*e.optionHeight,i=()=>{t>k()-1&&(t=F(e.options,u));const y=e.options[t][e.fields.value];y!==e.value&&o("change",y)};s&&a!==m.value?b=i:i(),m.value=a},C=()=>e.readonly||!e.options.length,E=u=>{s||C()||(b=null,c.value=de,T(u),o("clickOption",e.options[u]))},h=u=>ne(Math.round(-u/e.optionHeight),0,k()-1),$=O(()=>h(m.value)),Y=(u,t)=>{const a=Math.abs(u/t);u=m.value+a/.003*(u<0?-1:1);const i=h(u);c.value=+e.swipeDuration,T(i)},I=()=>{s=!1,c.value=0,b&&(b(),b=null)},j=u=>{if(!C()){if(p.start(u),s){const t=qe(g.value);m.value=Math.min(0,t-V())}c.value=0,l=m.value,f=Date.now(),r=l,b=null}},G=u=>{if(C())return;p.move(u),p.isVertical()&&(s=!0,he(u,!0));const t=ne(l+p.deltaY.value,-(k()*e.optionHeight),e.optionHeight),a=h(t);a!==$.value&&o("scrollInto",e.options[a]),m.value=t;const i=Date.now();i-f>me&&(f=i,r=t)},D=()=>{if(C())return;const u=m.value-r,t=Date.now()-f;if(t<me&&Math.abs(u)>We){Y(u,t);return}const i=h(m.value);c.value=de,T(i),setTimeout(()=>{s=!1},0)},S=()=>{const u={height:"".concat(e.optionHeight,"px")};return e.options.map((t,a)=>{const i=t[e.fields.text],{disabled:y}=t,M=t[e.fields.value],we={role:"button",style:u,tabindex:y?-1:0,class:[ee("item",{disabled:y,selected:M===e.value}),t.className],onClick:()=>E(a)},xe={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:i};return v("li",we,[n.option?n.option(t,a):v("div",xe,null)])})};return ve(Te),ke({stopMomentum:I}),Ve(()=>{const u=s?Math.floor(-m.value/e.optionHeight):e.options.findIndex(i=>i[e.fields.value]===e.value),t=F(e.options,u),a=-t*e.optionHeight;s&&t<u&&I(),m.value=a}),fe("touchmove",G,{target:d}),()=>v("div",{ref:d,class:ee(),onTouchstartPassive:j,onTouchend:D,onTouchcancel:D},[v("ul",{ref:g,style:{transform:"translate3d(0, ".concat(m.value+V(),"px, 0)"),transitionDuration:"".concat(c.value,"ms"),transitionProperty:c.value?"all":"none"},class:ee("wrapper"),onTransitionend:I},[S()])])}});const[Xe]=H("picker-toolbar"),K={title:String,cancelButtonText:String,confirmButtonText:String},Ze=["cancel","confirm","title","toolbar"],et=Object.keys(K);var tt=B({name:Xe,props:K,emits:["confirm","cancel"],setup(e,{emit:o,slots:n}){const s=()=>{if(n.title)return n.title();if(e.title)return v("div",{class:[w("title"),"van-ellipsis"]},[e.title])},l=()=>o("cancel"),f=()=>o("confirm"),r=()=>{var d;const g=(d=e.cancelButtonText)!=null?d:ue("cancel");if(!(!n.cancel&&!g))return v("button",{type:"button",class:[w("cancel"),ae],onClick:l},[n.cancel?n.cancel():g])},b=()=>{var d;const g=(d=e.confirmButtonText)!=null?d:ue("confirm");if(!(!n.confirm&&!g))return v("button",{type:"button",class:[w("confirm"),ae],onClick:f},[n.confirm?n.confirm():g])};return()=>v("div",{class:w("toolbar")},[n.toolbar?n.toolbar():[r(),s(),b()]])}});const[nt,Ot]=H("picker-group"),ot=Symbol(nt);P({tabs:z(),activeTab:R(0),nextStepText:String,showToolbar:ge},K);const at=P({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:R(44),showToolbar:ge,swipeDuration:R(1e3),visibleOptionNum:R(6)},K),lt=P({},at,{columns:z(),modelValue:z(),toolbarPosition:Ie("top"),columnsFieldNames:Object});var it=B({name:Ye,props:lt,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:o,slots:n}){const s=x(),l=x(e.modelValue.slice(0)),{parent:f}=ve(ot),{children:r,linkChildren:b}=Se(Te);b();const d=O(()=>Qe(e.columnsFieldNames)),g=O(()=>Pe(e.optionHeight)),m=O(()=>je(e.columns,d.value)),c=O(()=>{const{columns:t}=e;switch(m.value){case"multiple":return t;case"cascade":return Ge(t,d.value,l);default:return[t]}}),p=O(()=>c.value.some(t=>t.length)),k=O(()=>c.value.map((t,a)=>oe(t,l.value[a],d.value))),V=O(()=>c.value.map((t,a)=>t.findIndex(i=>i[d.value.value]===l.value[a]))),T=(t,a)=>{if(l.value[t]!==a){const i=l.value.slice(0);i[t]=a,l.value=i}},C=()=>({selectedValues:l.value.slice(0),selectedOptions:k.value,selectedIndexes:V.value}),E=(t,a)=>{T(a,t),m.value==="cascade"&&l.value.forEach((i,y)=>{const M=c.value[y];re(M,i,d.value)||T(y,M.length?M[0][d.value.value]:void 0)}),le(()=>{o("change",P({columnIndex:a},C()))})},h=(t,a)=>{const i={columnIndex:a,currentOption:t};o("clickOption",P(C(),i)),o("scrollInto",i)},$=()=>{r.forEach(a=>a.stopMomentum());const t=C();return le(()=>{o("confirm",t)}),t},Y=()=>o("cancel",C()),I=()=>c.value.map((t,a)=>v(Je,{value:l.value[a],fields:d.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:g.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:i=>E(i,a),onClickOption:i=>h(i,a),onScrollInto:i=>{o("scrollInto",{currentOption:i,columnIndex:a})}},{option:n.option})),j=t=>{if(p.value){const a={height:"".concat(g.value,"px")},i={backgroundSize:"100% ".concat((t-g.value)/2,"px")};return[v("div",{class:w("mask"),style:i},null),v("div",{class:[De,w("frame")],style:a},null)]}},G=()=>{const t=g.value*+e.visibleOptionNum,a={height:"".concat(t,"px")};return!e.loading&&!p.value&&n.empty?n.empty():v("div",{ref:s,class:w("columns"),style:a},[I(),j(t)])},D=()=>{if(e.showToolbar&&!f)return v(tt,Ee(ie(e,et),{onConfirm:$,onCancel:Y}),ie(n,Ze))};L(c,t=>{t.forEach((a,i)=>{a.length&&!re(a,l.value[i],d.value)&&T(i,Ce(a)[d.value.value])})},{immediate:!0});let S;return L(()=>e.modelValue,t=>{!q(t,l.value)&&!q(t,S)&&(l.value=t.slice(0),S=t.slice(0))},{deep:!0}),L(l,t=>{q(t,e.modelValue)||(S=t.slice(0),o("update:modelValue",S))},{immediate:!0}),fe("touchmove",he,{target:s}),ke({confirm:$,getSelectedOptions:()=>k.value}),()=>{var t,a;return v("div",{class:w()},[e.toolbarPosition==="top"?D():null,e.loading?v(pe,{class:w("loading")},null):null,(t=n["columns-top"])==null?void 0:t.call(n),G(),(a=n["columns-bottom"])==null?void 0:a.call(n),e.toolbarPosition==="bottom"?D():null])}}});const ct=be(it),[st,te]=H("switch"),ut={size:U,loading:Boolean,disabled:Boolean,modelValue:Q,activeColor:String,inactiveColor:String,activeValue:{type:Q,default:!0},inactiveValue:{type:Q,default:!1}};var rt=B({name:st,props:ut,emits:["change","update:modelValue"],setup(e,{emit:o,slots:n}){const s=()=>e.modelValue===e.activeValue,l=()=>{if(!e.disabled&&!e.loading){const r=s()?e.inactiveValue:e.activeValue;o("update:modelValue",r),o("change",r)}},f=()=>{if(e.loading){const r=s()?e.activeColor:e.inactiveColor;return v(pe,{class:te("loading"),color:r},null)}if(n.node)return n.node()};return Me(()=>e.modelValue),()=>{var r;const{size:b,loading:d,disabled:g,activeColor:m,inactiveColor:c}=e,p=s(),k={fontSize:He(b),backgroundColor:p?m:c};return v("div",{role:"switch",class:te({on:p,loading:d,disabled:g}),style:k,tabindex:g?void 0:0,"aria-checked":p,onClick:l},[v("div",{class:te("node")},[f()]),(r=n.background)==null?void 0:r.call(n)])}}});const dt=be(rt),Tt=B({__name:"index",setup(e){const o=Be(),n=x(W.value);L(()=>W.value,m=>{n.value=m},{immediate:!0});function s(){Re(),o.switchMode(W.value?"dark":"light")}const{t:l}=$e(),f=x(!1),r=x([J.value]),b=O(()=>ce.find(m=>m.value===J.value).text);function d(m){J.value=m.selectedOptions[0].value,f.value=!1}const g=O(()=>[{title:l("home.mockGuide"),route:"mock"},{title:l("home.echartsDemo"),route:"charts"},{title:l("home.unocssExample"),route:"unocss"},{title:l("home.persistPiniaState"),route:"counter"},{title:l("home.404Demo"),route:"unknown"},{title:l("home.keepAlive"),route:"keepalive"}]);return(m,c)=>{const p=dt,k=Fe,V=ct,T=Ke,C=Le,E=ye;return X(),se(E,{"padding-x":0},{default:A(()=>[v(C,{inset:""},{default:A(()=>[v(k,{center:"",title:_(l)("home.darkMode")},{"right-icon":A(()=>[v(p,{modelValue:_(n),"onUpdate:modelValue":c[0]||(c[0]=h=>Z(n)?n.value=h:null),size:"20px","aria-label":"on/off Dark Mode",onClick:c[1]||(c[1]=h=>s())},null,8,["modelValue"])]),_:1},8,["title"]),v(k,{"is-link":"",title:_(l)("home.language"),value:_(b),onClick:c[2]||(c[2]=h=>f.value=!0)},null,8,["title","value"]),v(T,{show:_(f),"onUpdate:show":c[5]||(c[5]=h=>Z(f)?f.value=h:null),position:"bottom"},{default:A(()=>[v(V,{modelValue:_(r),"onUpdate:modelValue":c[3]||(c[3]=h=>Z(r)?r.value=h:null),columns:_(ce),onConfirm:d,onCancel:c[4]||(c[4]=h=>f.value=!1)},null,8,["modelValue","columns"])]),_:1},8,["show"]),(X(!0),Ne(Ae,null,Ue(_(g),h=>(X(),se(k,{key:h.route,title:h.title,to:h.route,"is-link":""},null,8,["title","to"]))),128))]),_:1})]),_:1})}}});export{Tt as default};
