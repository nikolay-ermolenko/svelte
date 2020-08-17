!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).app=e()}(this,(function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}function s(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function i(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function u(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function $(){return d(" ")}function m(){return d("")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e,n){e in t?t[e]=n:h(t,e,n)}function v(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let y;function w(t){y=t}function k(){const t=function(){if(!y)throw new Error("Function called outside component initialization");return y}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}const E=[],_=[],C=[],z=[],B=Promise.resolve();let N=!1;function A(t){C.push(t)}let D=!1;const I=new Set;function O(){if(!D){D=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];w(e),L(e.$$)}for(E.length=0;_.length;)_.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];I.has(e)||(I.add(e),e())}C.length=0}while(E.length);for(;z.length;)z.pop()();N=!1,D=!1,I.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const M=new Set;let j;function q(){j={r:0,c:[],p:j}}function P(){j.r||o(j.c),j=j.p}function S(t,e){t&&t.i&&(M.delete(t),t.i(e))}function T(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),j.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function F(t){t&&t.c()}function H(t,n,c){const{fragment:l,on_mount:s,on_destroy:i,after_update:u}=t.$$;l&&l.m(n,c),A(()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(A)}function R(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(E.push(t),N||(N=!0,B.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,r,c,l,s,i,u=[-1]){const p=y;w(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:u};let $=!1;if(d.ctx=c?c(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),$&&V(e,t)),n}):[],d.update(),$=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();r.intro&&S(e.$$.fragment),H(e,r.target,r.anchor),O()}w(p)}class Y{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const G=[];function J(t,e){return{subscribe:K(t,e).subscribe}}function K(e,n=t){let o;const r=[];function l(t){if(c(e,t)&&(e=t,o)){const t=!G.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),G.push(n,e)}if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(c,s=t){const i=[c,s];return r.push(i),1===r.length&&(o=n(l)||t),c(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Q(e,n,c){const l=!Array.isArray(e),s=l?[e]:e,i=n.length<2;return J(c,e=>{let c=!1;const u=[];let p=0,a=t;const f=()=>{if(p)return;a();const o=n(l?u[0]:u,e);i?e(o):a=r(o)?o:t},d=s.map((e,n)=>function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(e,t=>{u[n]=t,p&=~(1<<n),c&&f()},()=>{p|=1<<n}));return c=!0,f(),function(){o(d),a()}})}function U(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const W=J(U(),(function(t){const e=()=>{t(U())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));Q(W,t=>t.location),Q(W,t=>t.querystring);function Z(t){let e,n;const o=t[1].default,r=l(o,t,t[0],null);return{c(){e=f("div"),r&&r.c(),h(e,"class","sv-viewport svelte-1muyxis")},m(t,o){p(t,e,o),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&1&e&&r.p(s(o,t,t[0],null),i(o,t[0],e,null))},i(t){n||(S(r,t),n=!0)},o(t){T(r,t),n=!1},d(t){t&&a(e),r&&r.d(t)}}}function tt(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class et extends Y{constructor(t){super(),X(this,t,tt,Z,c,{})}}function nt(t,e,n){const o=t.slice();return o[4]=e[n].color,o[5]=e[n].left,o[6]=e[n].top,o[7]=e[n].bubbleDim,o}function ot(t){let e;return{c(){e=f("div"),h(e,"class","sv-ripple sv-ripple-bubble svelte-1458aub"),x(e,"background-color",t[4]),x(e,"left",t[5]+"px"),x(e,"top",t[6]+"px"),x(e,"width",t[7]+"px"),x(e,"height",t[7]+"px")},m(t,n){p(t,e,n)},p(t,n){1&n&&x(e,"background-color",t[4]),1&n&&x(e,"left",t[5]+"px"),1&n&&x(e,"top",t[6]+"px"),1&n&&x(e,"width",t[7]+"px"),1&n&&x(e,"height",t[7]+"px")},d(t){t&&a(e)}}}function rt(e){let n,o,r=e[0],c=[];for(let t=0;t<r.length;t+=1)c[t]=ot(nt(e,r,t));return{c(){n=f("div");for(let t=0;t<c.length;t+=1)c[t].c();h(n,"class","sv-ripple svelte-1458aub")},m(t,r,l){p(t,n,r);for(let t=0;t<c.length;t+=1)c[t].m(n,null);l&&o(),o=g(n,"mousedown",e[1])},p(t,[e]){if(1&e){let o;for(r=t[0],o=0;o<r.length;o+=1){const l=nt(t,r,o);c[o]?c[o].p(l,e):(c[o]=ot(l),c[o].c(),c[o].m(n,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=r.length}},i:t,o:t,d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(c,t),o()}}}function ct(t,e,n){let o=[],r=null,{center:c=!1}=e;return t.$set=t=>{"center"in t&&n(2,c=t.center)},[o,function(t){const{pageX:e,pageY:l,path:s,currentTarget:i}=t;let u=i;i.classList.contains("sv-ripple-bubble")&&(u=i.parentNode);const{top:p,left:a,width:f,height:d}=u.getBoundingClientRect(),{color:$,width:m,height:g,display:h}=u.ownerDocument.defaultView.getComputedStyle(u.parentNode),b=h.indexOf("inline")>-1?3*Math.min(parseInt(m),parseInt(g)):Math.max(parseInt(m),parseInt(g));n(0,o=o.concat([{left:c?.5*f-.5*b:e-a-.5*b,top:c?.5*d-.5*b:l-p-.5*b,color:$,bubbleDim:b}])),r=+new Date,setTimeout(()=>{+new Date-r>1e3&&n(0,o=[])},1100)},c]}class lt extends Y{constructor(t){super(),X(this,t,ct,rt,c,{center:2})}}function st(t){let e;const n=new lt({});return{c(){F(n.$$.fragment)},m(t,o){H(n,t,o),e=!0},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function it(t){let e,n,o,r,c=t[0]&&st();const d=t[2].default,m=l(d,t,t[1],null);return{c(){e=f("div"),c&&c.c(),n=$(),m&&m.c(),h(e,"class",o="sv-header "+(t[0]?"sv-ripple-el":"")+" svelte-1ompt61")},m(t,o){p(t,e,o),c&&c.m(e,null),u(e,n),m&&m.m(e,null),r=!0},p(t,[l]){t[0]?c?1&l&&S(c,1):(c=st(),c.c(),S(c,1),c.m(e,n)):c&&(q(),T(c,1,1,()=>{c=null}),P()),m&&m.p&&2&l&&m.p(s(d,t,t[1],null),i(d,t[1],l,null)),(!r||1&l&&o!==(o="sv-header "+(t[0]?"sv-ripple-el":"")+" svelte-1ompt61"))&&h(e,"class",o)},i(t){r||(S(c),S(m,t),r=!0)},o(t){T(c),T(m,t),r=!1},d(t){t&&a(e),c&&c.d(),m&&m.d(t)}}}function ut(t,e,n){let{ripple:o=!1}=e,{$$slots:r={},$$scope:c}=e;return t.$set=t=>{"ripple"in t&&n(0,o=t.ripple),"$$scope"in t&&n(1,c=t.$$scope)},[o,c,r]}class pt extends Y{constructor(t){super(),X(this,t,ut,it,c,{ripple:0})}}const at=t=>({}),ft=t=>({}),dt=t=>({}),$t=t=>({});function mt(t){let e;const n=new pt({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}});return{c(){F(n.$$.fragment)},m(t,o){H(n,t,o),e=!0},p(t,e){const o={};9&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function gt(t){let e;return{c(){e=d(t[0])},m(t,n){p(t,e,n)},p(t,n){1&n&&v(e,t[0])},d(t){t&&a(e)}}}function ht(t){let e;const n=new lt({});return{c(){F(n.$$.fragment)},m(t,o){H(n,t,o),e=!0},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function bt(t){let e,n,o,r,c,d;const g=t[2].header,b=l(g,t,t[3],$t),v=b||function(t){let e,n,o=t[0]&&mt(t);return{c(){o&&o.c(),e=m()},m(t,r){o&&o.m(t,r),p(t,e,r),n=!0},p(t,n){t[0]?o?(o.p(t,n),1&n&&S(o,1)):(o=mt(t),o.c(),S(o,1),o.m(e.parentNode,e)):o&&(q(),T(o,1,1,()=>{o=null}),P())},i(t){n||(S(o),n=!0)},o(t){T(o),n=!1},d(t){o&&o.d(t),t&&a(e)}}}(t);let x=t[1]&&ht();const y=t[2].body,w=l(y,t,t[3],ft);return{c(){e=f("div"),v&&v.c(),n=$(),o=f("div"),x&&x.c(),r=$(),w&&w.c(),h(o,"class",c="sv-container-body "+(t[1]?"sv-ripple-el":"")+" svelte-zvvc9z"),h(e,"class","sv-container svelte-zvvc9z")},m(t,c){p(t,e,c),v&&v.m(e,null),u(e,n),u(e,o),x&&x.m(o,null),u(o,r),w&&w.m(o,null),d=!0},p(t,[e]){b?b.p&&8&e&&b.p(s(g,t,t[3],$t),i(g,t[3],e,dt)):v&&v.p&&1&e&&v.p(t,e),t[1]?x?2&e&&S(x,1):(x=ht(),x.c(),S(x,1),x.m(o,r)):x&&(q(),T(x,1,1,()=>{x=null}),P()),w&&w.p&&8&e&&w.p(s(y,t,t[3],ft),i(y,t[3],e,at)),(!d||2&e&&c!==(c="sv-container-body "+(t[1]?"sv-ripple-el":"")+" svelte-zvvc9z"))&&h(o,"class",c)},i(t){d||(S(v,t),S(x),S(w,t),d=!0)},o(t){T(v,t),T(x),T(w,t),d=!1},d(t){t&&a(e),v&&v.d(t),x&&x.d(),w&&w.d(t)}}}function vt(t,e,n){let{header:o=""}=e,{ripple:r=!1}=e,{$$slots:c={},$$scope:l}=e;return t.$set=t=>{"header"in t&&n(0,o=t.header),"ripple"in t&&n(1,r=t.ripple),"$$scope"in t&&n(3,l=t.$$scope)},[o,r,c,l]}class xt extends Y{constructor(t){super(),X(this,t,vt,bt,c,{header:0,ripple:1})}}function yt(t){let e;const n=new lt({props:{center:t[1]}});return{c(){F(n.$$.fragment)},m(t,o){H(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.center=t[1]),n.$set(o)},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function wt(t){let e,n,o,r,c,l,s,i=!t[2]&&t[0]&&yt(t);return{c(){e=f("button"),i&&i.c(),n=$(),o=f("div"),r=d(t[3]),h(o,"class","sv-button-content svelte-71k0lg"),h(e,"class",c="sv-button "+(!t[2]&&t[0]?"sv-ripple-el":"")+" svelte-71k0lg"),e.disabled=t[2]},m(c,a,f){var d;p(c,e,a),i&&i.m(e,null),u(e,n),u(e,o),u(o,r),l=!0,f&&s(),s=g(e,"click",(d=t[4],function(t){return t.stopPropagation(),d.call(this,t)}))},p(t,[o]){!t[2]&&t[0]?i?(i.p(t,o),5&o&&S(i,1)):(i=yt(t),i.c(),S(i,1),i.m(e,n)):i&&(q(),T(i,1,1,()=>{i=null}),P()),(!l||8&o)&&v(r,t[3]),(!l||5&o&&c!==(c="sv-button "+(!t[2]&&t[0]?"sv-ripple-el":"")+" svelte-71k0lg"))&&h(e,"class",c),(!l||4&o)&&(e.disabled=t[2])},i(t){l||(S(i),l=!0)},o(t){T(i),l=!1},d(t){t&&a(e),i&&i.d(),s()}}}function kt(t,e,n){const o=k();let{ripple:r=!0}=e,{rippleCenter:c=!1}=e,{disabled:l=!1}=e,{text:s=""}=e;return t.$set=t=>{"ripple"in t&&n(0,r=t.ripple),"rippleCenter"in t&&n(1,c=t.rippleCenter),"disabled"in t&&n(2,l=t.disabled),"text"in t&&n(3,s=t.text)},[r,c,l,s,function(t){o("click",{disabled:l,text:s,event:t})}]}class Et extends Y{constructor(t){super(),X(this,t,kt,wt,c,{ripple:0,rippleCenter:1,disabled:2,text:3})}}function _t(t){let e,n;const o=new lt({props:{center:!0}});return{c(){e=f("div"),F(o.$$.fragment),h(e,"class","sv-checkbox-ripple svelte-1w8gpe4")},m(t,r){p(t,e,r),H(o,e,null),n=!0},i(t){n||(S(o.$$.fragment,t),n=!0)},o(t){T(o.$$.fragment,t),n=!1},d(t){t&&a(e),R(o)}}}function Ct(t){let e;return{c(){e=d(t[3])},m(t,n){p(t,e,n)},p(t,n){8&n&&v(e,t[3])},d(t){t&&a(e)}}}function zt(t){let e,n,o,r,c,d,g,v,x,y,w,k,E,_=!t[1]&&t[0]&&_t();const C=t[7].default,z=l(C,t,t[6],null),B=z||function(t){let e,n=t[3]&&Ct(t);return{c(){n&&n.c(),e=m()},m(t,o){n&&n.m(t,o),p(t,e,o)},p(t,o){t[3]?n?n.p(t,o):(n=Ct(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&a(e)}}}(t);return{c(){e=f("mat-checkbox"),n=f("label"),o=f("div"),r=f("input"),d=$(),_&&_.c(),g=$(),v=f("div"),x=$(),y=f("span"),B&&B.c(),h(r,"type","checkbox"),h(r,"id",c="checkbox-"+t[4]),h(r,"class","sv-checkbox-input svelte-1w8gpe4"),h(v,"class","sv-checkbox-frame svelte-1w8gpe4"),h(o,"class","sv-checkbox-inner-container svelte-1w8gpe4"),h(y,"class","sv-checkbox-label"),h(n,"class","sv-checkbox-layout svelte-1w8gpe4"),h(n,"for",w="checkbox-"+t[4]),b(e,"class",k="sv-checkbox "+(t[2]?"sv-checkbox-label-before":"")+" svelte-1w8gpe4")},m(t,c){p(t,e,c),u(e,n),u(n,o),u(o,r),u(o,d),_&&_.m(o,null),u(o,g),u(o,v),u(n,x),u(n,y),B&&B.m(y,null),E=!0},p(t,[n]){!t[1]&&t[0]?_?3&n&&S(_,1):(_=_t(),_.c(),S(_,1),_.m(o,g)):_&&(q(),T(_,1,1,()=>{_=null}),P()),z?z.p&&64&n&&z.p(s(C,t,t[6],null),i(C,t[6],n,null)):B&&B.p&&8&n&&B.p(t,n),(!E||4&n&&k!==(k="sv-checkbox "+(t[2]?"sv-checkbox-label-before":"")+" svelte-1w8gpe4"))&&b(e,"class",k)},i(t){E||(S(_),S(B,t),E=!0)},o(t){T(_),T(B,t),E=!1},d(t){t&&a(e),_&&_.d(),B&&B.d(t)}}}function Bt(t,e,n){const o=k(),r=+new Date+(""+Math.random()).replace(".","");let{ripple:c=!0}=e,{disabled:l=!1}=e,{labelBefore:s=!1}=e,{text:i=""}=e,{$$slots:u={},$$scope:p}=e;return t.$set=t=>{"ripple"in t&&n(0,c=t.ripple),"disabled"in t&&n(1,l=t.disabled),"labelBefore"in t&&n(2,s=t.labelBefore),"text"in t&&n(3,i=t.text),"$$scope"in t&&n(6,p=t.$$scope)},[c,l,s,i,r,o,p,u]}class Nt extends Y{constructor(t){super(),X(this,t,Bt,zt,c,{ripple:0,disabled:1,labelBefore:2,text:3})}}function At(t){let e,n,o,r;const c=new Et({props:{text:"info",rippleCenter:!0}});return{c(){e=f("span"),n=d(t[0]),o=$(),F(c.$$.fragment)},m(t,l){p(t,e,l),u(e,n),p(t,o,l),H(c,t,l),r=!0},p(t,e){(!r||1&e)&&v(n,t[0])},i(t){r||(S(c.$$.fragment,t),r=!0)},o(t){T(c.$$.fragment,t),r=!1},d(t){t&&a(e),t&&a(o),R(c,t)}}}function Dt(t){let e,n;const o=new pt({props:{$$slots:{default:[At]},$$scope:{ctx:t}}});return{c(){e=f("div"),F(o.$$.fragment),h(e,"slot","header")},m(t,r){p(t,e,r),H(o,e,null),n=!0},p(t,e){const n={};9&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(S(o.$$.fragment,t),n=!0)},o(t){T(o.$$.fragment,t),n=!1},d(t){t&&a(e),R(o)}}}function It(t){let e;return{c(){e=d("Item 1")},m(t,n){p(t,e,n)},d(t){t&&a(e)}}}function Ot(t){let e,n,o,r,c,l,s,i,m,g;const b=new Et({props:{text:"check bill"}});b.$on("click",t[2]);const x=new Et({props:{text:"check disabled",disabled:qt}}),y=new Nt({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),w=new Nt({props:{text:"Item 2",labelBefore:!0}});return{c(){e=f("div"),n=f("h1"),n.textContent="Hello svelte",o=$(),r=f("p"),c=d(t[0]),l=$(),F(b.$$.fragment),s=$(),F(x.$$.fragment),i=$(),F(y.$$.fragment),m=$(),F(w.$$.fragment),h(n,"class","svelte-7v38dp"),h(r,"class","version svelte-7v38dp"),h(e,"slot","body")},m(t,a){p(t,e,a),u(e,n),u(e,o),u(e,r),u(r,c),u(e,l),H(b,e,null),u(e,s),H(x,e,null),u(e,i),H(y,e,null),u(e,m),H(w,e,null),g=!0},p(t,e){(!g||1&e)&&v(c,t[0]);const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),y.$set(n)},i(t){g||(S(b.$$.fragment,t),S(x.$$.fragment,t),S(y.$$.fragment,t),S(w.$$.fragment,t),g=!0)},o(t){T(b.$$.fragment,t),T(x.$$.fragment,t),T(y.$$.fragment,t),T(w.$$.fragment,t),g=!1},d(t){t&&a(e),R(b),R(x),R(y),R(w)}}}function Lt(e){let n;return{c(){n=$()},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}function Mt(t){let e,n;const o=new xt({props:{$$slots:{default:[Lt],body:[Ot],header:[Dt]},$$scope:{ctx:t}}});return{c(){e=f("div"),F(o.$$.fragment),h(e,"class","aaaa svelte-7v38dp")},m(t,r){p(t,e,r),H(o,e,null),n=!0},p(t,e){const n={};9&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(S(o.$$.fragment,t),n=!0)},o(t){T(o.$$.fragment,t),n=!1},d(t){t&&a(e),R(o)}}}function jt(t){let e;const n=new et({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}});return{c(){F(n.$$.fragment)},m(t,o){H(n,t,o),e=!0},p(t,[e]){const o={};9&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}let qt=!0;function Pt(t,e,n){let{version:o}=e;let r;return t.$set=t=>{"version"in t&&n(1,o=t.version)},t.$$.update=()=>{2&t.$$.dirty&&n(0,r="svelte v"+o)},[r,o,(t,e,n)=>console.log(t.detail,e,n)]}return new class extends Y{constructor(t){super(),X(this,t,Pt,jt,c,{version:1})}}({target:document.body,props:{version:"3.21.0"}})}));
