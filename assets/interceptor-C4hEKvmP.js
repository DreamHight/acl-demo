import{aL as r,a_ as p}from"./index-C2yDlUML.js";function m(l,{args:t=[],done:i,canceled:s,error:a}){if(l){const f=l.apply(null,t);r(f)?f.then(o=>{o?i():s&&s()}).catch(a||p):f?i():s&&s()}else i()}export{m as c};
