import{d as x,r as s,al as y,s as N,l as q,a as k,h as a,w as n,e as B,g as _,b as c,p as z}from"./index-C2yDlUML.js";import{C as I}from"./index-BYLfVkEJ.js";import{F,a as P,_ as S}from"./Captcha.vue_vue_type_script_setup_true_lang-DHrkgp9r.js";import{b as U,B as w}from"./index-OMlHT8OT.js";import{e as D,a as R,c as T}from"./index-fwtCpb42.js";import{s as m}from"./function-call-1oTOVryN.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-route-DDMnJuEj.js";import"./use-scope-id-DsqDXJPP.js";import"./index-D5pAafem.js";import"./request-CUPl2lnM.js";import"./mount-component-B5SAtAjR.js";import"./index-DB5K5s_2.js";import"./interceptor-C4hEKvmP.js";const A="/assets/banner3x2-d0YzNsey.jpg",E={class:"query"},G=["src"],J={style:{margin:"16px"}},M=x({__name:"index",setup(O){const t=s({cmpntName:"",cmpntPhone:"",cmpntIdCard:""}),g=y(),{token:v}=N(g),p=s(""),i=s();function h(l){console.log("failed",l),m(l.errors[0].message)}const r=s(!1),f=s(!1);function b(){r.value=!0;const l={...t.value,token:v.value,captcha:p.value};U(l).then(e=>{if(r.value=!1,console.log(e),e.code===0&&e.data.cmpntNum){const u=D(JSON.stringify({reqData:l,resData:e.data}));B.push({path:"/query/progress",query:{data:u}})}else e.code===100203e4?(m(e.msg),i.value.getCaptchaCode()):(m("未查询到信息"),i.value.getCaptchaCode())}).catch(e=>{r.value=!1,m(e.msg)})}return(l,e)=>{const u=I,d=P,V=w,C=F;return k(),q("div",E,[a(u,{inset:"",class:"group"},{default:n(()=>[_("img",{src:c(A),alt:""},null,8,G)]),_:1}),a(C,{required:"auto",disabled:f.value,onFailed:h,onSubmit:b},{default:n(()=>[a(u,{inset:""},{default:n(()=>[a(d,{modelValue:t.value.cmpntName,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value.cmpntName=o),name:"cmpntName",label:"姓名",placeholder:"",size:"large",rules:[{required:!0,message:"请输入姓名"}]},null,8,["modelValue"]),a(d,{modelValue:t.value.cmpntPhone,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.cmpntPhone=o),name:"cmpntPhone",label:"手机号",size:"large",type:"digit",maxlength:"11",rules:[{required:!0,validator:c(R)}]},null,8,["modelValue","rules"]),a(d,{modelValue:t.value.cmpntIdCard,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.cmpntIdCard=o),name:"cmpntIdCard",label:"身份证号码",size:"large",maxlength:"18",rules:[{required:!0,validator:c(T)}]},null,8,["modelValue","rules"]),a(d,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=o=>p.value=o),name:"captcha",label:"验证码",size:"large",placeholder:"请输入验证码",rules:[{required:!0,message:"请输入验证码"}]},{"right-icon":n(()=>[a(S,{ref_key:"captchaRef",ref:i},null,512)]),_:1},8,["modelValue"])]),_:1}),_("div",J,[a(V,{round:"",block:"",type:"primary",disabled:f.value,loading:r.value,"loading-text":"处理中...","native-type":"submit"},{default:n(()=>e[4]||(e[4]=[z(" 提交 ")])),_:1},8,["disabled","loading"])])]),_:1},8,["disabled"])])}}}),se=j(M,[["__scopeId","data-v-31c21f82"]]);export{se as default};
