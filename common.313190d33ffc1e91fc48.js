(self.webpackChunkmp_data=self.webpackChunkmp_data||[]).push([[592],{5177:(t,e,o)=>{"use strict";o.d(e,{g:()=>l});var r=o(5917),c=o(111),a=o(3018);let l=(()=>{class t{constructor(){}getAll(){const t=JSON.parse(localStorage.getItem("blocks")||"[]");return(0,r.of)(t)}createBlock(t){const e=JSON.parse(localStorage.getItem("blocks")||"[]");return e.push(Object.assign(Object.assign({},t),{id:(0,c.w)()})),localStorage.setItem("blocks",JSON.stringify(e)),(0,r.of)()}modifyBlock(t){const e=JSON.parse(localStorage.getItem("blocks")||"[]").map(e=>e.id===t.id?t:e);return localStorage.setItem("blocks",JSON.stringify(e)),(0,r.of)()}deleteBlock(t){const e=JSON.parse(localStorage.getItem("blocks")||"[]").filter(e=>e.id===t);return localStorage.setItem("blocks",JSON.stringify(e)),(0,r.of)()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},891:(t,e,o)=>{"use strict";o.d(e,{O:()=>a});var r=o(5917),c=o(3018);let a=(()=>{class t{constructor(){}getAll(){const t=JSON.parse(localStorage.getItem("context")||"[]");return(0,r.of)(t)}createBlock(t){const e=JSON.parse(localStorage.getItem("context")||"[]");return e.push(t),localStorage.setItem("context",JSON.stringify(e)),(0,r.of)()}modifyBlock(t){const e=JSON.parse(localStorage.getItem("context")||"[]").map(e=>e.id===t.id?t:e);return localStorage.setItem("context",JSON.stringify(e)),(0,r.of)()}deleteBlock(t){const e=JSON.parse(localStorage.getItem("context")||"[]").filter(e=>t===e.id);return localStorage.setItem("context",JSON.stringify(e)),(0,r.of)()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},111:(t,e,o)=>{"use strict";function r(){return(1e4*Math.random()).toString(16).replace(/\./gi,"")}o.d(e,{w:()=>r})}}]);