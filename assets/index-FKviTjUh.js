import{d as x,r as s,al as y,s as N,l as q,a as k,h as a,w as n,e as B,g as _,b as c,p as z}from"./index-HRkRUuea.js";import{C as I}from"./index-Dud6JF33.js";import{F as U,a as w,_ as F}from"./Captcha.vue_vue_type_script_setup_true_lang-CzHMpsFq.js";import{b as P,B as R}from"./index-DltMUjKN.js";import{e as S,a as D,c as T}from"./index-fwtCpb42.js";import{s as d}from"./function-call-BRBg-ET9.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-route-CHu9NO_M.js";import"./use-scope-id-BRFPGAVs.js";import"./index-Dj2eEDf4.js";import"./request-B4Wy9ZdA.js";import"./mount-component-C1hiXRWo.js";import"./index-CrhLDmNn.js";import"./interceptor-Do3zmChb.js";const A=""+new URL("banner3x2-d0YzNsey.jpg",import.meta.url).href,E={class:"query"},G=["src"],J={style:{margin:"16px"}},L=x({__name:"index",setup(M){const t=s({cmpntName:"",cmpntPhone:"",cmpntIdCard:""}),g=y(),{token:v}=N(g),p=s(""),i=s();function h(l){console.log("failed",l),d(l.errors[0].message)}const r=s(!1),f=s(!1);function b(){r.value=!0;const l={...t.value,token:v.value,captcha:p.value};P(l).then(e=>{if(r.value=!1,console.log(e),e.code===0&&e.data.cmpntNum){const u=S(JSON.stringify({reqData:l,resData:e.data}));B.push({path:"/query/progress",query:{data:u}})}else e.code===100203e4?(d(e.msg),i.value.getCaptchaCode()):(d("未查询到信息"),i.value.getCaptchaCode())}).catch(e=>{r.value=!1,d(e.msg)})}return(l,e)=>{const u=I,m=w,V=R,C=U;return k(),q("div",E,[a(u,{inset:"",class:"group"},{default:n(()=>[_("img",{src:c(A),alt:""},null,8,G)]),_:1}),a(C,{required:"auto",disabled:f.value,onFailed:h,onSubmit:b},{default:n(()=>[a(u,{inset:""},{default:n(()=>[a(m,{modelValue:t.value.cmpntName,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value.cmpntName=o),name:"cmpntName",label:"姓名",placeholder:"",size:"large",rules:[{required:!0,message:"请输入姓名"}]},null,8,["modelValue"]),a(m,{modelValue:t.value.cmpntPhone,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.cmpntPhone=o),name:"cmpntPhone",label:"手机号",size:"large",type:"digit",maxlength:"11",rules:[{required:!0,validator:c(D)}]},null,8,["modelValue","rules"]),a(m,{modelValue:t.value.cmpntIdCard,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.cmpntIdCard=o),name:"cmpntIdCard",label:"身份证号码",size:"large",maxlength:"18",rules:[{required:!0,validator:c(T)}]},null,8,["modelValue","rules"]),a(m,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=o=>p.value=o),name:"captcha",label:"验证码",size:"large",placeholder:"请输入验证码",rules:[{required:!0,message:"请输入验证码"}]},{"right-icon":n(()=>[a(F,{ref_key:"captchaRef",ref:i},null,512)]),_:1},8,["modelValue"])]),_:1}),_("div",J,[a(V,{round:"",block:"",type:"primary",disabled:f.value,loading:r.value,"loading-text":"处理中...","native-type":"submit"},{default:n(()=>e[4]||(e[4]=[z(" 提交 ")])),_:1},8,["disabled","loading"])])]),_:1},8,["disabled"])])}}}),se=j(L,[["__scopeId","data-v-31c21f82"]]);export{se as default};
