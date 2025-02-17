import{d as U,z as X,Q as j,v as le,a0 as we,h,ap as W,aH as oe,D as re,aI as Te,aJ as Be,a6 as Pe,aK as Me,aL as _e,q as Ae,S as Le,r as $,a9 as Re,T as P,a3 as Z,j as Ne,o as se,C as O,W as Fe,a4 as M,aB as ze,ao as Oe,I as K,p as We,A as D,P as $e,ad as De,x as ee,aC as je,aM as te,aj as qe,aN as He,al as Ke,s as Je,l as Ue,a as Ye,g as Qe}from"./index-fMnOmPs1.js";import{u as ce}from"./use-scope-id-DsuUg-9z.js";import{a as pe,c as Ge}from"./index-DJS7Xxcg.js";import{u as Xe,g as Ze}from"./index-BaVd1Y8B.js";import{s as ne}from"./function-call-Du9m6zob.js";const[et,tt]=le("form"),nt={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:j,labelAlign:String,inputAlign:String,scrollToError:Boolean,scrollToErrorPosition:String,validateFirst:Boolean,submitOnEnter:X,showErrorMessage:X,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var at=U({name:et,props:nt,emits:["submit","failed"],setup(e,{emit:n,slots:r}){const{children:c,linkChildren:o}=we(oe),u=a=>a?c.filter(s=>a.includes(s.name)):c,v=a=>new Promise((s,f)=>{const S=[];u(a).reduce((H,A)=>H.then(()=>{if(!S.length)return A.validate().then(L=>{L&&S.push(L)})}),Promise.resolve()).then(()=>{S.length?f(S):s()})}),T=a=>new Promise((s,f)=>{const S=u(a);Promise.all(S.map(b=>b.validate())).then(b=>{b=b.filter(Boolean),b.length?f(b):s()})}),y=a=>{const s=c.find(f=>f.name===a);return s?new Promise((f,S)=>{s.validate().then(b=>{b?S(b):f()})}):Promise.reject()},V=a=>typeof a=="string"?y(a):e.validateFirst?v(a):T(a),g=a=>{typeof a=="string"&&(a=[a]),u(a).forEach(f=>{f.resetValidation()})},q=()=>c.reduce((a,s)=>(a[s.name]=s.getValidationStatus(),a),{}),_=(a,s)=>{c.some(f=>f.name===a?(f.$el.scrollIntoView(s),!0):!1)},R=()=>c.reduce((a,s)=>(s.name!==void 0&&(a[s.name]=s.formValue.value),a),{}),N=()=>{const a=R();V().then(()=>n("submit",a)).catch(s=>{n("failed",{values:a,errors:s});const{scrollToError:f,scrollToErrorPosition:S}=e;f&&s[0].name&&_(s[0].name,S?{block:S}:void 0)})},B=a=>{W(a),N()};return o({props:e}),ce({submit:N,validate:V,getValues:R,scrollToField:_,resetValidation:g,getValidationStatus:q}),()=>{var a;return h("form",{class:tt(),onSubmit:B},[(a=r.default)==null?void 0:a.call(r)])}}});const St=re(at);function ue(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function it(e,n){if(ue(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function lt(e,n){return new Promise(r=>{const c=n.validator(e,n);if(_e(c)){c.then(r);return}r(c)})}function ae(e,n){const{message:r}=n;return Me(r)?r(e,n):r||""}function ot({target:e}){e.composing=!0}function ie({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function rt(e,n){const r=Te();e.style.height="auto";let c=e.scrollHeight;if(Be(n)){const{maxHeight:o,minHeight:u}=n;o!==void 0&&(c=Math.min(c,o)),u!==void 0&&(c=Math.max(c,u))}c&&(e.style.height="".concat(c,"px"),Pe(r))}function st(e,n){return e==="number"&&(e="text",n!=null||(n="decimal")),e==="digit"&&(e="tel",n!=null||(n="numeric")),{type:e,inputmode:n}}function x(e){return[...e].length}function J(e,n){return[...e].slice(0,n).join("")}const[ct,I]=le("field"),ut={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:j,max:Number,min:Number,formatter:Function,clearIcon:D("clear"),modelValue:$e(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:D("focus"),formatTrigger:D("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},inputmode:String},dt=Ae({},Ge,ut,{rows:j,type:D("text"),rules:Array,autosize:[Boolean,Object],labelWidth:j,labelClass:De,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var ft=U({name:ct,props:dt,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:r}){const c=Xe(),o=Le({status:"unvalidated",focused:!1,validateMessage:""}),u=$(),v=$(),T=$(),{parent:y}=Re(oe),V=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(M(e[t]))return e[t];if(y&&M(y.props[t]))return y.props[t]},q=P(()=>{const t=g("readonly");if(e.clearable&&!t){const i=V()!=="",l=e.clearTrigger==="always"||e.clearTrigger==="focus"&&o.focused;return i&&l}return!1}),_=P(()=>T.value&&r.input?T.value():e.modelValue),R=P(()=>{var t;const i=g("required");return i==="auto"?(t=e.rules)==null?void 0:t.some(l=>l.required):i}),N=t=>t.reduce((i,l)=>i.then(()=>{if(o.status==="failed")return;let{value:d}=_;if(l.formatter&&(d=l.formatter(d,l)),!it(d,l)){o.status="failed",o.validateMessage=ae(d,l);return}if(l.validator)return ue(d)&&l.validateEmpty===!1?void 0:lt(d,l).then(m=>{m&&typeof m=="string"?(o.status="failed",o.validateMessage=m):m===!1&&(o.status="failed",o.validateMessage=ae(d,l))})}),Promise.resolve()),B=()=>{o.status="unvalidated",o.validateMessage=""},a=()=>n("endValidate",{status:o.status,message:o.validateMessage}),s=(t=e.rules)=>new Promise(i=>{B(),t?(n("startValidate"),N(t).then(()=>{o.status==="failed"?(i({name:e.name,message:o.validateMessage}),a()):(o.status="passed",i(),a())})):i()}),f=t=>{if(y&&e.rules){const{validateTrigger:i}=y.props,l=te(i).includes(t),d=e.rules.filter(m=>m.trigger?te(m.trigger).includes(t):l);d.length&&s(d)}},S=t=>{var i;const{maxlength:l}=e;if(M(l)&&x(t)>+l){const d=V();if(d&&x(d)===+l)return d;const m=(i=u.value)==null?void 0:i.selectionEnd;if(o.focused&&m){const E=[...t],w=E.length-+l;return E.splice(m-w,w),E.join("")}return J(t,+l)}return t},b=(t,i="onChange")=>{var l,d;const m=t;t=S(t);const E=x(m)-x(t);if(e.type==="number"||e.type==="digit"){const k=e.type==="number";if(t=ze(t,k,k),i==="onBlur"&&t!==""&&(e.min!==void 0||e.max!==void 0)){const C=Oe(+t,(l=e.min)!=null?l:-1/0,(d=e.max)!=null?d:1/0);+t!==C&&(t=C.toString())}}let w=0;if(e.formatter&&i===e.formatTrigger){const{formatter:k,maxlength:C}=e;if(t=k(t),M(C)&&x(t)>+C&&(t=J(t,+C)),u.value&&o.focused){const{selectionEnd:z}=u.value,G=J(m,z);w=x(k(G))-x(G)}}if(u.value&&u.value.value!==t)if(o.focused){let{selectionStart:k,selectionEnd:C}=u.value;if(u.value.value=t,M(k)&&M(C)){const z=x(t);E?(k-=E,C-=E):w&&(k+=w,C+=w),u.value.setSelectionRange(Math.min(k,z),Math.min(C,z))}}else u.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},H=t=>{t.target.composing||b(t.target.value)},A=()=>{var t;return(t=u.value)==null?void 0:t.blur()},L=()=>{var t;return(t=u.value)==null?void 0:t.focus()},F=()=>{const t=u.value;e.type==="textarea"&&e.autosize&&t&&rt(t,e.autosize)},de=t=>{o.focused=!0,n("focus",t),O(F),g("readonly")&&A()},fe=t=>{o.focused=!1,b(V(),"onBlur"),n("blur",t),!g("readonly")&&(f("onBlur"),O(F),je())},Y=t=>n("clickInput",t),ge=t=>n("clickLeftIcon",t),me=t=>n("clickRightIcon",t),he=t=>{W(t),n("update:modelValue",""),n("clear",t)},Q=P(()=>{if(typeof e.error=="boolean")return e.error;if(y&&y.props.showError&&o.status==="failed")return!0}),be=P(()=>{const t=g("labelWidth"),i=g("labelAlign");if(t&&i!=="top")return{width:Z(t)}}),ve=t=>{t.keyCode===13&&(!(y&&y.props.submitOnEnter)&&e.type!=="textarea"&&W(t),e.type==="search"&&A()),n("keypress",t)},p=()=>e.id||"".concat(c,"-input"),ye=()=>o.status,Se=()=>{const t=I("control",[g("inputAlign"),{error:Q.value,custom:!!r.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(r.input)return h("div",{class:t,onClick:Y},[r.input()]);const i={id:p(),ref:u,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?"".concat(c,"-label"):void 0,"data-allow-mismatch":"attribute",onBlur:fe,onFocus:de,onInput:H,onClick:Y,onChange:ie,onKeypress:ve,onCompositionend:ie,onCompositionstart:ot};return e.type==="textarea"?h("textarea",ee(i,{inputmode:e.inputmode}),null):h("input",ee(st(e.type,e.inputmode),i),null)},Ie=()=>{const t=r["left-icon"];if(e.leftIcon||t)return h("div",{class:I("left-icon"),onClick:ge},[t?t():h(K,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},Ce=()=>{const t=r["right-icon"];if(e.rightIcon||t)return h("div",{class:I("right-icon"),onClick:me},[t?t():h(K,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ke=()=>{if(e.showWordLimit&&e.maxlength){const t=x(V());return h("div",{class:I("word-limit")},[h("span",{class:I("word-num")},[t]),We("/"),e.maxlength])}},Ve=()=>{if(y&&y.props.showErrorMessage===!1)return;const t=e.errorMessage||o.validateMessage;if(t){const i=r["error-message"],l=g("errorMessageAlign");return h("div",{class:I("error-message",l)},[i?i({message:t}):t])}},xe=()=>{const t=g("labelWidth"),i=g("labelAlign"),l=g("colon")?":":"";if(r.label)return[r.label(),l];if(e.label)return h("label",{id:"".concat(c,"-label"),for:r.input?void 0:p(),"data-allow-mismatch":"attribute",onClick:d=>{W(d),L()},style:i==="top"&&t?{width:Z(t)}:void 0},[e.label+l])},Ee=()=>[h("div",{class:I("body")},[Se(),q.value&&h(K,{ref:v,name:e.clearIcon,class:I("clear")},null),Ce(),r.button&&h("div",{class:I("button")},[r.button()])]),ke(),Ve()];return ce({blur:A,focus:L,validate:s,formValue:_,resetValidation:B,getValidationStatus:ye}),qe(He,{customValue:T,resetValidation:B,validateWithTrigger:f}),Ne(()=>e.modelValue,()=>{b(V()),B(),f("onChange"),O(F)}),se(()=>{b(V(),e.formatTrigger),O(F)}),Fe("touchstart",he,{target:P(()=>{var t;return(t=v.value)==null?void 0:t.$el})}),()=>{const t=g("disabled"),i=g("labelAlign"),l=Ie(),d=()=>{const m=xe();return i==="top"?[l,m].filter(Boolean):m||[]};return h(pe,{size:e.size,class:I({error:Q.value,disabled:t,["label-".concat(i)]:i}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:be.value,valueClass:I("value"),titleClass:[I("label",[i,{required:R.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:l&&i!=="top"?()=>l:null,title:d,value:Ee,extra:r.extra})}}});const It=re(ft),gt=["src"],Ct=U({__name:"Captcha",setup(e,{expose:n}){const r=Ke(),{token:c}=Je(r),o=$("");n({token:c,getCaptchaCode:u});function u(){Ze(c.value).then(v=>{v.token&&v.captcha?(console.log(v),r.setToken(v.token),o.value="data:image/png;base64,".concat(v.captcha)):ne("获取验证码失败")}).catch(v=>{ne("获取验证码失败"),console.log(v)})}return se(()=>{u()}),(v,T)=>(Ye(),Ue("div",null,[Qe("img",{src:o.value,alt:"获取验证码",style:{width:"100px",height:"40px"},onClick:u},null,8,gt)]))}});export{St as F,Ct as _,It as a};
