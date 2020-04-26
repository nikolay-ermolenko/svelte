var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let a;function d(t){a=t}const h=[],p=[],g=[],m=[],b=Promise.resolve();let $=!1;function y(t){g.push(t)}let v=!1;const x=new Set;function _(){if(!v){v=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];d(n),w(n.$$)}for(h.length=0;p.length;)p.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];x.has(n)||(x.add(n),n())}g.length=0}while(h.length);for(;m.length;)m.pop()();$=!1,v=!1,x.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const E=new Set;function A(t,n){-1===t.$$.dirty[0]&&(h.push(t),$||($=!0,b.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(c,u,i,f,l,h,p=[-1]){const g=a;d(c);const m=u.props||{},b=c.$$={fragment:null,ctx:null,props:h,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:e(),dirty:p};let $=!1;if(b.ctx=i?i(c,m,(t,n,...e)=>{const o=e.length?e[0]:n;return b.ctx&&l(b.ctx[t],b.ctx[t]=o)&&(b.bound[t]&&b.bound[t](o),$&&A(c,t)),n}):[],b.update(),$=!0,o(b.before_update),b.fragment=!!f&&f(b.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);b.fragment&&b.fragment.l(t),t.forEach(s)}else b.fragment&&b.fragment.c();u.intro&&((v=c.$$.fragment)&&v.i&&(E.delete(v),v.i(x))),function(t,e,c){const{fragment:u,on_mount:s,on_destroy:i,after_update:f}=t.$$;u&&u.m(e,c),y(()=>{const e=s.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),f.forEach(y)}(c,u.target,u.anchor),_()}var v,x;d(g)}const O=[];function q(t,n){return{subscribe:C(t,n).subscribe}}function C(n,e=t){let o;const r=[];function u(t){if(c(n,t)&&(n=t,o)){const t=!O.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),O.push(e,n)}if(t){for(let t=0;t<O.length;t+=2)O[t][0](O[t+1]);O.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(c,s=t){const i=[c,s];return r.push(i),1===r.length&&(o=e(u)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function N(n,e,c){const u=!Array.isArray(n),s=u?[n]:n,i=e.length<2;return q(c,n=>{let c=!1;const f=[];let l=0,a=t;const d=()=>{if(l)return;a();const o=e(u?f[0]:f,n);i?n(o):a=r(o)?o:t},h=s.map((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,t=>{f[e]=t,l&=~(1<<e),c&&d()},()=>{l|=1<<e}));return c=!0,d(),function(){o(h),a()}})}function j(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const L=q(j(),(function(t){const n=()=>{t(j())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));N(L,t=>t.location),N(L,t=>t.querystring);function S(n){let e,o,r,c,a,d;return{c(){e=i("div"),o=i("h1"),o.textContent="Hello svelte",r=f(" "),c=i("p"),a=f("svelte v"),d=f(n[0]),l(o,"class","svelte-t2kmhb"),l(c,"class","version svelte-t2kmhb")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),u(e,o),u(e,r),u(e,c),u(c,a),u(c,d)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(d,t[0])},i:t,o:t,d(t){t&&s(e)}}}function B(t,n,e){let{version:o}=n;return t.$set=t=>{"version"in t&&e(0,o=t.version)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),k(this,t,B,S,c,{version:0})}}({target:document.body,props:{version:"3.21.0"}})}();
//# sourceMappingURL=bundle.js.map
