System.register(["./index-legacy-CuzD0Ejf.js","./use-scope-id-legacy-GkkIn1zg.js","./index-legacy-UxrbngJo.js","./index-legacy-BP93u1VM.js","./function-call-legacy-D9RHy-qg.js"],(function(e,t){"use strict";var a,l,r,n,o,i,s,u,c,d,g,m,f,p,v,h,b,y,k,x,S,w,C,V,B,M,E,I,A,P,T,j,z,$,L,W,q,F,O,D,N,H,K,R,_,G,J,Y;return{setters:[e=>{a=e.d,l=e.K,r=e.Z,n=e.E,o=e.a9,i=e.i,s=e.at,u=e.aI,c=e.O,d=e.aJ,g=e.aK,m=e.af,f=e.aL,p=e.aM,v=e.D,h=e.$,b=e.r,y=e.ai,k=e.a0,x=e.ac,S=e.y,w=e.o,C=e.N,V=e.a3,B=e.ad,M=e.aC,E=e.as,I=e.I,A=e.l,P=e.L,T=e.Y,j=e.al,z=e.G,$=e.aD,L=e.aN,W=e.ao,q=e.aO,F=e.aq,O=e.C,D=e.f,N=e.a,H=e.g},e=>{K=e.u},e=>{R=e.a,_=e.c},e=>{G=e.u,J=e.g},e=>{Y=e.s}],execute:function(){const[t,Z]=n("form"),Q={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:r,labelAlign:String,inputAlign:String,scrollToError:Boolean,scrollToErrorPosition:String,validateFirst:Boolean,submitOnEnter:l,showErrorMessage:l,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var U=a({name:t,props:Q,emits:["submit","failed"],setup(e,{emit:t,slots:a}){const{children:l,linkChildren:r}=o(u),n=e=>e?l.filter((t=>e.includes(t.name))):l,c=t=>{return"string"==typeof t?(e=>{const t=l.find((t=>t.name===e));return t?new Promise(((e,a)=>{t.validate().then((t=>{t?a(t):e()}))})):Promise.reject()})(t):e.validateFirst?(a=t,new Promise(((e,t)=>{const l=[];n(a).reduce(((e,t)=>e.then((()=>{if(!l.length)return t.validate().then((e=>{e&&l.push(e)}))}))),Promise.resolve()).then((()=>{l.length?t(l):e()}))}))):(e=>new Promise(((t,a)=>{const l=n(e);Promise.all(l.map((e=>e.validate()))).then((e=>{(e=e.filter(Boolean)).length?a(e):t()}))})))(t);var a},d=(e,t)=>{l.some((a=>a.name===e&&(a.$el.scrollIntoView(t),!0)))},g=()=>l.reduce(((e,t)=>(void 0!==t.name&&(e[t.name]=t.formValue.value),e)),{}),m=()=>{const a=g();c().then((()=>t("submit",a))).catch((l=>{t("failed",{values:a,errors:l});const{scrollToError:r,scrollToErrorPosition:n}=e;r&&l[0].name&&d(l[0].name,n?{block:n}:void 0)}))},f=e=>{s(e),m()};return r({props:e}),K({submit:m,validate:c,getValues:g,scrollToField:d,resetValidation:e=>{"string"==typeof e&&(e=[e]),n(e).forEach((e=>{e.resetValidation()}))},getValidationStatus:()=>l.reduce(((e,t)=>(e[t.name]=t.getValidationStatus(),e)),{})}),()=>{var e;return i("form",{class:Z(),onSubmit:f},[null==(e=a.default)?void 0:e.call(a)])}}});function X(e){return Array.isArray(e)?!e.length:0!==e&&!e}function ee(e,t){const{message:a}=t;return f(a)?a(e,t):a||""}function te({target:e}){e.composing=!0}function ae({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function le(e){return[...e].length}function re(e,t){return[...e].slice(0,t).join("")}e("F",c(U));const[ne,oe]=n("field"),ie={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:r,max:Number,min:Number,formatter:Function,clearIcon:P("clear"),modelValue:T(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:P("focus"),formatTrigger:P("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},inputmode:String},se=v({},_,ie,{rows:r,type:P("text"),rules:Array,autosize:[Boolean,Object],labelWidth:r,labelClass:j,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var ue=a({name:ne,props:se,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:t,slots:a}){const l=G(),r=h({status:"unvalidated",focused:!1,validateMessage:""}),n=b(),o=b(),c=b(),{parent:f}=y(u),v=()=>{var t;return String(null!=(t=e.modelValue)?t:"")},P=t=>B(e[t])?e[t]:f&&B(f.props[t])?f.props[t]:void 0,T=k((()=>{const t=P("readonly");if(e.clearable&&!t){const t=""!==v(),a="always"===e.clearTrigger||"focus"===e.clearTrigger&&r.focused;return t&&a}return!1})),j=k((()=>c.value&&a.input?c.value():e.modelValue)),F=k((()=>{var t;const a=P("required");return"auto"===a?null==(t=e.rules)?void 0:t.some((e=>e.required)):a})),O=e=>e.reduce(((e,t)=>e.then((()=>{if("failed"===r.status)return;let{value:e}=j;if(t.formatter&&(e=t.formatter(e,t)),!function(e,t){if(X(e)){if(t.required)return!1;if(!1===t.validateEmpty)return!0}return!(t.pattern&&!t.pattern.test(String(e)))}(e,t))return r.status="failed",void(r.validateMessage=ee(e,t));if(t.validator){if(X(e)&&!1===t.validateEmpty)return;return function(e,t){return new Promise((a=>{const l=t.validator(e,t);p(l)?l.then(a):a(l)}))}(e,t).then((a=>{a&&"string"==typeof a?(r.status="failed",r.validateMessage=a):!1===a&&(r.status="failed",r.validateMessage=ee(e,t))}))}}))),Promise.resolve()),D=()=>{r.status="unvalidated",r.validateMessage=""},N=()=>t("endValidate",{status:r.status,message:r.validateMessage}),H=(a=e.rules)=>new Promise((l=>{D(),a?(t("startValidate"),O(a).then((()=>{"failed"===r.status?(l({name:e.name,message:r.validateMessage}),N()):(r.status="passed",l(),N())}))):l()})),_=t=>{if(f&&e.rules){const{validateTrigger:a}=f.props,l=L(a).includes(t),r=e.rules.filter((e=>e.trigger?L(e.trigger).includes(t):l));r.length&&H(r)}},J=(a,l="onChange")=>{var o,i;const s=a;a=(t=>{var a;const{maxlength:l}=e;if(B(l)&&le(t)>+l){const e=v();if(e&&le(e)===+l)return e;const o=null==(a=n.value)?void 0:a.selectionEnd;if(r.focused&&o){const e=[...t],a=e.length-+l;return e.splice(o-a,a),e.join("")}return re(t,+l)}return t})(a);const u=le(s)-le(a);if("number"===e.type||"digit"===e.type){const t="number"===e.type;if(a=M(a,t,t),"onBlur"===l&&""!==a&&(void 0!==e.min||void 0!==e.max)){const t=E(+a,null!=(o=e.min)?o:-1/0,null!=(i=e.max)?i:1/0);+a!==t&&(a=t.toString())}}let c=0;if(e.formatter&&l===e.formatTrigger){const{formatter:t,maxlength:l}=e;if(a=t(a),B(l)&&le(a)>+l&&(a=re(a,+l)),n.value&&r.focused){const{selectionEnd:e}=n.value,a=re(s,e);c=le(t(a))-le(a)}}if(n.value&&n.value.value!==a)if(r.focused){let{selectionStart:e,selectionEnd:t}=n.value;if(n.value.value=a,B(e)&&B(t)){const l=le(a);u?(e-=u,t-=u):c&&(e+=c,t+=c),n.value.setSelectionRange(Math.min(e,l),Math.min(t,l))}}else n.value.value=a;a!==e.modelValue&&t("update:modelValue",a)},Y=e=>{e.target.composing||J(e.target.value)},Z=()=>{var e;return null==(e=n.value)?void 0:e.blur()},Q=()=>{var e;return null==(e=n.value)?void 0:e.focus()},U=()=>{const t=n.value;"textarea"===e.type&&e.autosize&&t&&function(e,t){const a=d();e.style.height="auto";let l=e.scrollHeight;if(g(t)){const{maxHeight:e,minHeight:a}=t;void 0!==e&&(l=Math.min(l,e)),void 0!==a&&(l=Math.max(l,a))}l&&(e.style.height=`${l}px`,m(a))}(t,e.autosize)},ne=e=>{r.focused=!0,t("focus",e),C(U),P("readonly")&&Z()},ie=e=>{r.focused=!1,J(v(),"onBlur"),t("blur",e),P("readonly")||(_("onBlur"),C(U),$())},se=e=>t("clickInput",e),ue=e=>t("clickLeftIcon",e),ce=e=>t("clickRightIcon",e),de=k((()=>"boolean"==typeof e.error?e.error:!(!f||!f.props.showError||"failed"!==r.status)||void 0)),ge=k((()=>{const e=P("labelWidth"),t=P("labelAlign");if(e&&"top"!==t)return{width:x(e)}})),me=a=>{13===a.keyCode&&(f&&f.props.submitOnEnter||"textarea"===e.type||s(a),"search"===e.type&&Z()),t("keypress",a)},fe=()=>e.id||`${l}-input`,pe=()=>{const t=oe("control",[P("inputAlign"),{error:de.value,custom:!!a.input,"min-height":"textarea"===e.type&&!e.autosize}]);if(a.input)return i("div",{class:t,onClick:se},[a.input()]);const r={id:fe(),ref:n,name:e.name,rows:void 0!==e.rows?+e.rows:void 0,class:t,disabled:P("disabled"),readonly:P("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${l}-label`:void 0,"data-allow-mismatch":"attribute",onBlur:ie,onFocus:ne,onInput:Y,onClick:se,onChange:ae,onKeypress:me,onCompositionend:ae,onCompositionstart:te};return"textarea"===e.type?i("textarea",z(r,{inputmode:e.inputmode}),null):i("input",z((o=e.type,s=e.inputmode,"number"===o&&(o="text",null!=s||(s="decimal")),"digit"===o&&(o="tel",null!=s||(s="numeric")),{type:o,inputmode:s}),r),null);var o,s},ve=()=>{const t=a["right-icon"];if(e.rightIcon||t)return i("div",{class:oe("right-icon"),onClick:ce},[t?t():i(I,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},he=()=>{if(e.showWordLimit&&e.maxlength){const t=le(v());return i("div",{class:oe("word-limit")},[i("span",{class:oe("word-num")},[t]),A("/"),e.maxlength])}},be=()=>{if(f&&!1===f.props.showErrorMessage)return;const t=e.errorMessage||r.validateMessage;if(t){const e=a["error-message"],l=P("errorMessageAlign");return i("div",{class:oe("error-message",l)},[e?e({message:t}):t])}},ye=()=>[i("div",{class:oe("body")},[pe(),T.value&&i(I,{ref:o,name:e.clearIcon,class:oe("clear")},null),ve(),a.button&&i("div",{class:oe("button")},[a.button()])]),he(),be()];return K({blur:Z,focus:Q,validate:H,formValue:j,resetValidation:D,getValidationStatus:()=>r.status}),W(q,{customValue:c,resetValidation:D,validateWithTrigger:_}),S((()=>e.modelValue),(()=>{J(v()),D(),_("onChange"),C(U)})),w((()=>{J(v(),e.formatTrigger),C(U)})),V("touchstart",(e=>{s(e),t("update:modelValue",""),t("clear",e)}),{target:k((()=>{var e;return null==(e=o.value)?void 0:e.$el}))}),()=>{const t=P("disabled"),r=P("labelAlign"),n=(()=>{const t=a["left-icon"];if(e.leftIcon||t)return i("div",{class:oe("left-icon"),onClick:ue},[t?t():i(I,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])})();return i(R,{size:e.size,class:oe({error:de.value,disabled:t,[`label-${r}`]:r}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:ge.value,valueClass:oe("value"),titleClass:[oe("label",[r,{required:F.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:n&&"top"!==r?()=>n:null,title:()=>{const t=(()=>{const t=P("labelWidth"),r=P("labelAlign"),n=P("colon")?":":"";return a.label?[a.label(),n]:e.label?i("label",{id:`${l}-label`,for:a.input?void 0:fe(),"data-allow-mismatch":"attribute",onClick:e=>{s(e),Q()},style:"top"===r&&t?{width:x(t)}:void 0},[e.label+n]):void 0})();return"top"===r?[n,t].filter(Boolean):t||[]},value:ye,extra:a.extra})}}});e("a",c(ue));const ce=["src"];e("_",a({__name:"Captcha",setup(e,{expose:t}){const a=F(),{token:l}=O(a),r=b("");function n(){J(l.value).then((e=>{e.token&&e.captcha?(console.log(e),a.setToken(e.token),r.value=`data:image/png;base64,${e.captcha}`):Y("获取验证码失败")})).catch((e=>{Y("获取验证码失败"),console.log(e)}))}return t({token:l,getCaptchaCode:n}),w((()=>{n()})),(e,t)=>(N(),D("div",null,[H("img",{src:r.value,alt:"获取验证码",style:{width:"100px",height:"40px"},onClick:n},null,8,ce)]))}}))}}}));
