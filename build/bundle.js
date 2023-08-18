var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function c(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l,r;function i(e,t){return l||(l=document.createElement("a")),l.href=t,e===l.href}function a(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function $(){return h(" ")}function m(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t){e.value=null==t?"":t}function y(e,t,n){for(let n=0;n<e.options.length;n+=1){const s=e.options[n];if(s.__value===t)return void(s.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function b(e){const t=e.querySelector(":checked");return t&&t.__value}function k(e){r=e}const x=[],j=[];let q=[];const E=[],L=Promise.resolve();let O=!1;function A(e){q.push(e)}function C(e){E.push(e)}const S=new Set;let N=0;function B(){if(0!==N)return;const e=r;do{try{for(;N<x.length;){const e=x[N];N++,k(e),M(e.$$)}}catch(e){throw x.length=0,N=0,e}for(k(null),x.length=0,N=0;j.length;)j.pop()();for(let e=0;e<q.length;e+=1){const t=q[e];S.has(t)||(S.add(t),t())}q.length=0}while(x.length);for(;E.length;)E.pop()();O=!1,S.clear(),k(e)}function M(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const T=new Set;let z;function H(){z={r:0,c:[],p:z}}function G(){z.r||s(z.c),z=z.p}function D(e,t){e&&e.i&&(T.delete(e),e.i(t))}function I(e,t,n,s){if(e&&e.o){if(T.has(e))return;T.add(e),z.c.push((()=>{T.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function J(e,t,n){const s=e.$$.props[t];void 0!==s&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function P(e){e&&e.c()}function R(e,n,o,l){const{fragment:r,after_update:i}=e.$$;r&&r.m(n,o),l||A((()=>{const n=e.$$.on_mount.map(t).filter(c);e.$$.on_destroy?e.$$.on_destroy.push(...n):s(n),e.$$.on_mount=[]})),i.forEach(A)}function W(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];q.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),q=t}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){-1===e.$$.dirty[0]&&(x.push(e),O||(O=!0,L.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,c,o,l,i,a,u,d=[-1]){const f=r;k(t);const p=t.$$={fragment:null,ctx:[],props:a,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:c.target||f.$$.root};u&&u(p.root);let h=!1;if(p.ctx=o?o(t,c.props||{},((e,n,...s)=>{const c=s.length?s[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=c)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](c),h&&X(t,e)),n})):[],p.update(),h=!0,s(p.before_update),p.fragment=!!l&&l(p.ctx),c.target){if(c.hydrate){const e=function(e){return Array.from(e.childNodes)}(c.target);p.fragment&&p.fragment.l(e),e.forEach(g)}else p.fragment&&p.fragment.c();c.intro&&D(t.$$.fragment),R(t,c.target,c.anchor,c.customElement),B()}k(f)}class K{$destroy(){W(this,1),this.$destroy=e}$on(t,n){if(!c(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Q(t){let n,s,c;return{c(){n=p("button"),n.textContent="🔊",v(n,"class","svelte-eb3889")},m(e,o){d(e,n,o),s||(c=m(n,"click",t[0]),s=!0)},p:e,i:e,o:e,d(e){e&&g(n),s=!1,c()}}}function U(e,t,n){let s,{audio:c}=t;return e.$$set=e=>{"audio"in e&&n(1,c=e.audio)},e.$$.update=()=>{2&e.$$.dirty&&(s=c.jan_lakuse?new Audio(c.jan_lakuse):c.kala_asi?new Audio(c.kala_asi):void 0)},[()=>{s&&s.play()},c]}class V extends K{constructor(e){super(),F(this,e,U,Q,o,{audio:1})}}function Y(t){let n,s,c,o,l,r,i,f,m,w,y,b,k,x,j,q,E=t[0].word+"",L=t[0].usage_category+"",O=t[0].book+"";return{c(){n=p("div"),s=p("div"),c=h(t[3]),o=$(),l=p("dt"),r=h(E),i=$(),f=p("div"),m=h(L),w=h(" · "),y=h(O),b=$(),k=p("dd"),x=h(t[1]),v(s,"class","sp svelte-1vt2p1j"),v(l,"class","svelte-1vt2p1j"),v(f,"class","shaded svelte-1vt2p1j"),v(k,"class",j=a(t[2]?"":"shaded")+" svelte-1vt2p1j"),v(n,"class",q=a("card "+t[0].usage_category)+" svelte-1vt2p1j")},m(e,t){d(e,n,t),u(n,s),u(s,c),u(n,o),u(n,l),u(l,r),u(n,i),u(n,f),u(f,m),u(f,w),u(f,y),u(n,b),u(n,k),u(k,x)},p(e,[t]){8&t&&_(c,e[3]),1&t&&E!==(E=e[0].word+"")&&_(r,E),1&t&&L!==(L=e[0].usage_category+"")&&_(m,L),1&t&&O!==(O=e[0].book+"")&&_(y,O),2&t&&_(x,e[1]),4&t&&j!==(j=a(e[2]?"":"shaded")+" svelte-1vt2p1j")&&v(k,"class",j),1&t&&q!==(q=a("card "+e[0].usage_category)+" svelte-1vt2p1j")&&v(n,"class",q)},i:e,o:e,d(e){e&&g(n)}}}function Z(e,t,n){let s,c,o,{word:l}=t,{selected_language:r}=t;return e.$$set=e=>{"word"in e&&n(0,l=e.word),"selected_language"in e&&n(4,r=e.selected_language)},e.$$.update=()=>{1&e.$$.dirty&&n(3,s=l.sitelen_pona?l.sitelen_pona.split(" ")[0]:""),1&e.$$.dirty&&l.audio,17&e.$$.dirty&&n(2,c=l.def[r]),21&e.$$.dirty&&n(1,o=c?l.def[r]:"(en) "+l.def.en),2&e.$$.dirty&&n(1,o=o.split("|")[0].trim())},[l,o,c,s,r]}class ee extends K{constructor(e){super(),F(this,e,Z,Y,o,{word:0,selected_language:4})}}function te(e){let t,n,s,c;return s=new V({props:{audio:e[3]}}),{c(){t=p("span"),t.textContent="·",n=$(),P(s.$$.fragment)},m(e,o){d(e,t,o),d(e,n,o),R(s,e,o),c=!0},p(e,t){const n={};8&t&&(n.audio=e[3]),s.$set(n)},i(e){c||(D(s.$$.fragment,e),c=!0)},o(e){I(s.$$.fragment,e),c=!1},d(e){e&&g(t),e&&g(n),W(s,e)}}}function ne(e){let t,n,s,c,o,l,r,i,f,m,w,y,b,k,x,j,q,E,L,O,A,C,S,N,B,M,T,z,J=e[0].word+"",P=e[0].usage_category+"",R=e[0].book+"",W=e[0].audio&&te(e);return{c(){t=p("div"),n=p("div"),s=h(e[4]),c=$(),o=p("div"),l=p("div"),r=p("dt"),i=h(J),f=$(),m=p("span"),w=p("span"),y=h(P),b=$(),k=p("span"),k.textContent="·",x=$(),j=p("span"),q=h(R),E=$(),W&&W.c(),L=$(),O=p("span"),O.textContent="·",A=$(),C=p("span"),C.textContent="more",S=$(),N=p("dd"),B=h(e[2]),v(n,"class","sp svelte-1wjgyom"),v(r,"class","svelte-1wjgyom"),v(l,"class","word_info svelte-1wjgyom"),v(N,"class",M=a(e[1]?"":"shaded")+" svelte-1wjgyom"),v(o,"class","word_main svelte-1wjgyom"),v(t,"class",T=a("entry "+e[0].usage_category)+" svelte-1wjgyom")},m(e,a){d(e,t,a),u(t,n),u(n,s),u(t,c),u(t,o),u(o,l),u(l,r),u(r,i),u(l,f),u(l,m),u(m,w),u(w,y),u(m,b),u(m,k),u(m,x),u(m,j),u(j,q),u(m,E),W&&W.m(m,null),u(m,L),u(m,O),u(m,A),u(m,C),u(o,S),u(o,N),u(N,B),z=!0},p(e,[n]){(!z||16&n)&&_(s,e[4]),(!z||1&n)&&J!==(J=e[0].word+"")&&_(i,J),(!z||1&n)&&P!==(P=e[0].usage_category+"")&&_(y,P),(!z||1&n)&&R!==(R=e[0].book+"")&&_(q,R),e[0].audio?W?(W.p(e,n),1&n&&D(W,1)):(W=te(e),W.c(),D(W,1),W.m(m,L)):W&&(H(),I(W,1,1,(()=>{W=null})),G()),(!z||4&n)&&_(B,e[2]),(!z||2&n&&M!==(M=a(e[1]?"":"shaded")+" svelte-1wjgyom"))&&v(N,"class",M),(!z||1&n&&T!==(T=a("entry "+e[0].usage_category)+" svelte-1wjgyom"))&&v(t,"class",T)},i(e){z||(D(W),z=!0)},o(e){I(W),z=!1},d(e){e&&g(t),W&&W.d()}}}function se(e,t,n){let s,c,o,l,{word:r}=t,{selected_language:i}=t;return e.$$set=e=>{"word"in e&&n(0,r=e.word),"selected_language"in e&&n(5,i=e.selected_language)},e.$$.update=()=>{1&e.$$.dirty&&n(4,s=r.sitelen_pona?r.sitelen_pona.split(" ")[0]:""),1&e.$$.dirty&&n(3,c=r.audio),33&e.$$.dirty&&n(1,o=r.def[i]),35&e.$$.dirty&&n(2,l=o?r.def[i]:"(en) "+r.def.en)},[r,o,l,c,s,i]}class ce extends K{constructor(e){super(),F(this,e,se,ne,o,{word:0,selected_language:5})}}function oe(t){let n,s,c;return{c(){n=p("input"),v(n,"id","searchbar"),v(n,"class","searchbar main_input svelte-epcfer"),v(n,"placeholder","nimi"),v(n,"autocapitalize","off"),v(n,"autocomplete","off"),v(n,"autocorrect","off"),v(n,"spellcheck","false")},m(e,o){d(e,n,o),w(n,t[0]),s||(c=m(n,"input",t[1]),s=!0)},p(e,[t]){1&t&&n.value!==e[0]&&w(n,e[0])},i:e,o:e,d(e){e&&g(n),s=!1,c()}}}function le(e,t,n){let{query:s}=t;return e.$$set=e=>{"query"in e&&n(0,s=e.query)},[s,function(){s=this.value,n(0,s)}]}class re extends K{constructor(e){super(),F(this,e,le,oe,o,{query:0})}}function ie(t){let n,s,c,o,l,r,a;return{c(){n=p("label"),s=p("input"),c=$(),o=p("img"),v(s,"type","checkbox"),v(s,"id","checkbox_lightmode"),v(s,"class","svelte-1rhze3c"),i(o.src,l="./assets/suno.png")||v(o,"src","./assets/suno.png"),v(o,"alt","Light Mode"),v(o,"class","svelte-1rhze3c"),v(n,"id","checkbox_lightmode_wrapper"),v(n,"class","svelte-1rhze3c")},m(e,l){d(e,n,l),u(n,s),s.checked=t[0],u(n,c),u(n,o),r||(a=m(s,"change",t[1]),r=!0)},p(e,[t]){1&t&&(s.checked=e[0])},i:e,o:e,d(e){e&&g(n),r=!1,a()}}}function ae(e,t,n){let{lightmode:s}=t;return e.$$set=e=>{"lightmode"in e&&n(0,s=e.lightmode)},[s,function(){s=this.checked,n(0,s)}]}class ue extends K{constructor(e){super(),F(this,e,ae,ie,o,{lightmode:0})}}function de(e,t,n){const s=e.slice();return s[3]=t[n][0],s[4]=t[n][1],s}function ge(e){let t,n,s,c=e[4].name_endonym+"";return{c(){t=p("option"),n=h(c),t.__value=s=e[3],t.value=t.__value},m(e,s){d(e,t,s),u(t,n)},p(e,o){2&o&&c!==(c=e[4].name_endonym+"")&&_(n,c),2&o&&s!==(s=e[3])&&(t.__value=s,t.value=t.__value)},d(e){e&&g(t)}}}function fe(t){let n,s,c,o,l,r,a,h=Object.entries(t[1]),_=[];for(let e=0;e<h.length;e+=1)_[e]=ge(de(t,h,e));return{c(){n=p("label"),s=p("select");for(let e=0;e<_.length;e+=1)_[e].c();c=$(),o=p("img"),v(s,"id","language_selector"),v(s,"class","main_input svelte-c3tgvh"),void 0===t[0]&&A((()=>t[2].call(s))),i(o.src,l="./assets/world.png")||v(o,"src","./assets/world.png"),v(o,"alt","Select language"),v(o,"class","svelte-c3tgvh"),v(n,"id","language_selector_wrapper"),v(n,"title","Select Language"),v(n,"class","svelte-c3tgvh")},m(e,l){d(e,n,l),u(n,s);for(let e=0;e<_.length;e+=1)_[e]&&_[e].m(s,null);y(s,t[0],!0),u(n,c),u(n,o),r||(a=m(s,"change",t[2]),r=!0)},p(e,[t]){if(2&t){let n;for(h=Object.entries(e[1]),n=0;n<h.length;n+=1){const c=de(e,h,n);_[n]?_[n].p(c,t):(_[n]=ge(c),_[n].c(),_[n].m(s,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=h.length}3&t&&y(s,e[0])},i:e,o:e,d(e){e&&g(n),f(_,e),r=!1,a()}}}function pe(e,t,n){let{selected_language:s}=t,{languages:c}=t;return e.$$set=e=>{"selected_language"in e&&n(0,s=e.selected_language),"languages"in e&&n(1,c=e.languages)},[s,c,function(){s=b(this),n(0,s),n(1,c)}]}class he extends K{constructor(e){super(),F(this,e,pe,fe,o,{selected_language:0,languages:1})}}function $e(e,t,n){const s=e.slice();return s[3]=t[n][0],s[4]=t[n][1],s}function me(t){let n,s,c=t[4].name+"";return{c(){n=p("option"),s=h(c),n.__value=t[3],n.value=n.__value},m(e,t){d(e,n,t),u(n,s)},p:e,d(e){e&&g(n)}}}function ve(t){let n,s,c,o,l,r,a,h=Object.entries(t[1]),_=[];for(let e=0;e<h.length;e+=1)_[e]=me($e(t,h,e));return{c(){n=p("label"),s=p("select");for(let e=0;e<_.length;e+=1)_[e].c();c=$(),o=p("img"),v(s,"id","view_selector"),v(s,"class","main_input svelte-1wix1vl"),void 0===t[0]&&A((()=>t[2].call(s))),i(o.src,l=t[1][t[0]].icon)||v(o,"src",l),v(o,"alt","Select view"),v(o,"class","svelte-1wix1vl"),v(n,"id","view_selector_wrapper"),v(n,"title","Select Language"),v(n,"class","svelte-1wix1vl")},m(e,l){d(e,n,l),u(n,s);for(let e=0;e<_.length;e+=1)_[e]&&_[e].m(s,null);y(s,t[0],!0),u(n,c),u(n,o),r||(a=m(s,"change",t[2]),r=!0)},p(e,[t]){if(2&t){let n;for(h=Object.entries(e[1]),n=0;n<h.length;n+=1){const c=$e(e,h,n);_[n]?_[n].p(c,t):(_[n]=me(c),_[n].c(),_[n].m(s,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=h.length}3&t&&y(s,e[0]),3&t&&!i(o.src,l=e[1][e[0]].icon)&&v(o,"src",l)},i:e,o:e,d(e){e&&g(n),f(_,e),r=!1,a()}}}function _e(e,t,n){let{selected_view:s}=t;const c={basic:{name:"Basic view",icon:"./assets/basic.png"},grid:{name:"Grid view",icon:"./assets/grid.png"}};return e.$$set=e=>{"selected_view"in e&&n(0,s=e.selected_view)},[s,c,function(){s=b(this),n(0,s),n(1,c)}]}class we extends K{constructor(e){super(),F(this,e,_e,ve,o,{selected_view:0})}}function ye(e){let t,n,s,c,o,l,r,i,a,f,h,m,_,w,y,b,k,x,q,E,L;function O(t){e[5](t)}let A={};function S(t){e[6](t)}void 0!==e[0]&&(A.query=e[0]),o=new re({props:A}),j.push((()=>J(o,"query",O)));let N={};function B(t){e[7](t)}void 0!==e[1]&&(N.lightmode=e[1]),h=new ue({props:N}),j.push((()=>J(h,"lightmode",S)));let M={};function T(t){e[8](t)}void 0!==e[3]&&(M.selected_view=e[3]),w=new we({props:M}),j.push((()=>J(w,"selected_view",B)));let z={languages:e[4]};return void 0!==e[2]&&(z.selected_language=e[2]),k=new he({props:z}),j.push((()=>J(k,"selected_language",T))),{c(){t=p("nav"),n=p("div"),n.innerHTML='<img src="./assets/icon.png" alt="lipu Linku" class="svelte-ni7i5g"/>\n        lipu Linku',s=$(),c=p("div"),P(o.$$.fragment),r=$(),i=p("button"),i.textContent="Back to Dictionary",a=$(),f=p("div"),P(h.$$.fragment),_=$(),P(w.$$.fragment),b=$(),P(k.$$.fragment),q=$(),E=p("a"),E.innerHTML='<img src="./assets/ijo-a.png" alt="About Linku" class="svelte-ni7i5g"/>',v(n,"class","logo svelte-ni7i5g"),v(i,"id","normal_mode_button"),v(i,"onclick","normal_mode()"),v(i,"class","svelte-ni7i5g"),v(c,"class","search_container svelte-ni7i5g"),v(E,"href","about"),v(E,"title","About Linku"),v(f,"class","svelte-ni7i5g"),v(t,"class","svelte-ni7i5g")},m(e,l){d(e,t,l),u(t,n),u(t,s),u(t,c),R(o,c,null),u(c,r),u(c,i),u(t,a),u(t,f),R(h,f,null),u(f,_),R(w,f,null),u(f,b),R(k,f,null),u(f,q),u(f,E),L=!0},p(e,[t]){const n={};!l&&1&t&&(l=!0,n.query=e[0],C((()=>l=!1))),o.$set(n);const s={};!m&&2&t&&(m=!0,s.lightmode=e[1],C((()=>m=!1))),h.$set(s);const c={};!y&&8&t&&(y=!0,c.selected_view=e[3],C((()=>y=!1))),w.$set(c);const r={};16&t&&(r.languages=e[4]),!x&&4&t&&(x=!0,r.selected_language=e[2],C((()=>x=!1))),k.$set(r)},i(e){L||(D(o.$$.fragment,e),D(h.$$.fragment,e),D(w.$$.fragment,e),D(k.$$.fragment,e),L=!0)},o(e){I(o.$$.fragment,e),I(h.$$.fragment,e),I(w.$$.fragment,e),I(k.$$.fragment,e),L=!1},d(e){e&&g(t),W(o),W(h),W(w),W(k)}}}function be(e,t,n){let{query:s}=t,{lightmode:c}=t,{selected_language:o}=t,{selected_view:l}=t,{languages:r}=t;return e.$$set=e=>{"query"in e&&n(0,s=e.query),"lightmode"in e&&n(1,c=e.lightmode),"selected_language"in e&&n(2,o=e.selected_language),"selected_view"in e&&n(3,l=e.selected_view),"languages"in e&&n(4,r=e.languages)},[s,c,o,l,r,function(e){s=e,n(0,s)},function(e){c=e,n(1,c)},function(e){l=e,n(3,l)},function(e){o=e,n(2,o)}]}class ke extends K{constructor(e){super(),F(this,e,be,ye,o,{query:0,lightmode:1,selected_language:2,selected_view:3,languages:4})}}function xe(t){let n,s,c,o,l,r,i,a,f;return{c(){n=p("label"),s=h(t[1]),c=$(),o=p("input"),r=$(),i=p("span"),v(o,"type","checkbox"),v(o,"id",l="checkbox_"+t[1]),v(o,"autocomplete","off"),v(o,"class","svelte-1llrxsd"),v(i,"class","checkmark svelte-1llrxsd"),v(n,"class","container svelte-1llrxsd")},m(e,l){d(e,n,l),u(n,s),u(n,c),u(n,o),o.checked=t[0],u(n,r),u(n,i),a||(f=m(o,"change",t[2]),a=!0)},p(e,[t]){2&t&&_(s,e[1]),2&t&&l!==(l="checkbox_"+e[1])&&v(o,"id",l),1&t&&(o.checked=e[0])},i:e,o:e,d(e){e&&g(n),a=!1,f()}}}function je(e,t,n){let{name:s}=t,{checked:c}=t;return e.$$set=e=>{"name"in e&&n(1,s=e.name),"checked"in e&&n(0,c=e.checked)},[c,s,function(){c=this.checked,n(0,c)}]}class qe extends K{constructor(e){super(),F(this,e,je,xe,o,{name:1,checked:0})}}function Ee(e,t,n){const s=e.slice();return s[2]=t[n],s[3]=t,s[4]=n,s}function Le(e){let t,n,s;function c(t){e[1](t,e[2])}let o={name:e[2].name};return void 0!==e[2].checked&&(o.checked=e[2].checked),t=new qe({props:o}),j.push((()=>J(t,"checked",c))),{c(){P(t.$$.fragment)},m(e,n){R(t,e,n),s=!0},p(s,c){e=s;const o={};1&c&&(o.name=e[2].name),!n&&1&c&&(n=!0,o.checked=e[2].checked,C((()=>n=!1))),t.$set(o)},i(e){s||(D(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){W(t,e)}}}function Oe(e){let t,n,s,c=e[0],o=[];for(let t=0;t<c.length;t+=1)o[t]=Le(Ee(e,c,t));const l=e=>I(o[e],1,1,(()=>{o[e]=null}));return{c(){t=p("div"),n=p("div");for(let e=0;e<o.length;e+=1)o[e].c();v(n,"id","usage_selector"),v(t,"id","checkbox_container"),v(t,"class","svelte-5i6aj6")},m(e,c){d(e,t,c),u(t,n);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(n,null);s=!0},p(e,[t]){if(1&t){let s;for(c=e[0],s=0;s<c.length;s+=1){const l=Ee(e,c,s);o[s]?(o[s].p(l,t),D(o[s],1)):(o[s]=Le(l),o[s].c(),D(o[s],1),o[s].m(n,null))}for(H(),s=c.length;s<o.length;s+=1)l(s);G()}},i(e){if(!s){for(let e=0;e<c.length;e+=1)D(o[e]);s=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)I(o[e]);s=!1},d(e){e&&g(t),f(o,e)}}}function Ae(e,t,n){let{categories:s}=t;return e.$$set=e=>{"categories"in e&&n(0,s=e.categories)},[s,function(t,c){e.$$.not_equal(c.checked,t)&&(c.checked=t,n(0,s))}]}class Ce extends K{constructor(e){super(),F(this,e,Ae,Oe,o,{categories:0})}}function Se(e,t,n){const s=e.slice();return s[15]=t[n][0],s[16]=t[n][1],s[15]=n,s}function Ne(e){let t,n;return t=new ee({props:{word:e[16],selected_language:e[3]}}),{c(){P(t.$$.fragment)},m(e,s){R(t,e,s),n=!0},p(e,n){const s={};32&n&&(s.word=e[16]),8&n&&(s.selected_language=e[3]),t.$set(s)},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function Be(e){let t,n;return t=new ce({props:{word:e[16],selected_language:e[3]}}),{c(){P(t.$$.fragment)},m(e,s){R(t,e,s),n=!0},p(e,n){const s={};32&n&&(s.word=e[16]),8&n&&(s.selected_language=e[3]),t.$set(s)},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function Me(e){let t,n,s,c;const o=[Be,Ne],l=[];function r(e,t){return"basic"==e[4]?0:1}return t=r(e),n=l[t]=o[t](e),{c(){n.c(),s=h("")},m(e,n){l[t].m(e,n),d(e,s,n),c=!0},p(e,c){let i=t;t=r(e),t===i?l[t].p(e,c):(H(),I(l[i],1,1,(()=>{l[i]=null})),G(),n=l[t],n?n.p(e,c):(n=l[t]=o[t](e),n.c()),D(n,1),n.m(s.parentNode,s))},i(e){c||(D(n),c=!0)},o(e){I(n),c=!1},d(e){l[t].d(e),e&&g(s)}}}function Te(e){let t,n,s,c,o,l,r,i,h,m,_,w,y,b,k;function x(t){e[8](t)}function q(t){e[9](t)}function E(t){e[10](t)}function L(t){e[11](t)}let O={languages:e[6]};function A(t){e[12](t)}void 0!==e[1]&&(O.query=e[1]),void 0!==e[0]&&(O.lightmode=e[0]),void 0!==e[3]&&(O.selected_language=e[3]),void 0!==e[4]&&(O.selected_view=e[4]),n=new ke({props:O}),j.push((()=>J(n,"query",x))),j.push((()=>J(n,"lightmode",q))),j.push((()=>J(n,"selected_language",E))),j.push((()=>J(n,"selected_view",L)));let S={};void 0!==e[2]&&(S.categories=e[2]),m=new Ce({props:S}),j.push((()=>J(m,"categories",A)));let N=Object.entries(e[5]),B=[];for(let t=0;t<N.length;t+=1)B[t]=Me(Se(e,N,t));const M=e=>I(B[e],1,1,(()=>{B[e]=null}));return{c(){t=p("div"),P(n.$$.fragment),r=$(),i=p("a"),i.textContent="2023 Word Survey:\n\t\tLet us know what words you use!",h=$(),P(m.$$.fragment),w=$(),y=p("div");for(let e=0;e<B.length;e+=1)B[e].c();v(i,"id","survey"),v(i,"href","https://linku.la/wile/"),v(i,"class","svelte-pbi631"),v(y,"class",b=a("view_"+e[4])+" svelte-pbi631"),v(t,"class","app svelte-pbi631")},m(e,s){d(e,t,s),R(n,t,null),u(t,r),u(t,i),u(t,h),R(m,t,null),u(t,w),u(t,y);for(let e=0;e<B.length;e+=1)B[e]&&B[e].m(y,null);k=!0},p(e,[t]){const r={};!s&&2&t&&(s=!0,r.query=e[1],C((()=>s=!1))),!c&&1&t&&(c=!0,r.lightmode=e[0],C((()=>c=!1))),!o&&8&t&&(o=!0,r.selected_language=e[3],C((()=>o=!1))),!l&&16&t&&(l=!0,r.selected_view=e[4],C((()=>l=!1))),n.$set(r);const i={};if(!_&&4&t&&(_=!0,i.categories=e[2],C((()=>_=!1))),m.$set(i),56&t){let n;for(N=Object.entries(e[5]),n=0;n<N.length;n+=1){const s=Se(e,N,n);B[n]?(B[n].p(s,t),D(B[n],1)):(B[n]=Me(s),B[n].c(),D(B[n],1),B[n].m(y,null))}for(H(),n=N.length;n<B.length;n+=1)M(n);G()}(!k||16&t&&b!==(b=a("view_"+e[4])+" svelte-pbi631"))&&v(y,"class",b)},i(e){if(!k){D(n.$$.fragment,e),D(m.$$.fragment,e);for(let e=0;e<N.length;e+=1)D(B[e]);k=!0}},o(e){I(n.$$.fragment,e),I(m.$$.fragment,e),B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)I(B[e]);k=!1},d(e){e&&g(t),W(n),W(m),f(B,e)}}}function ze(e,t,n){let s,c,o=!1;const l=JSON.parse((r="https://linku.la/jasima/data.json",(i=new XMLHttpRequest).open("GET",r,!1),i.send(null),i.responseText));var r,i;const a=l.data,u=l.languages;let d="",g="en",f="basic",p=[{name:"core",checked:!0},{name:"widespread",checked:!0},{name:"common",checked:!1},{name:"uncommon",checked:!1},{name:"rare",checked:!1},{name:"obscure",checked:!1}];return e.$$.update=()=>{1&e.$$.dirty&&(o?document.documentElement.classList.add("lightmode"):document.documentElement.classList.remove("lightmode")),4&e.$$.dirty&&n(7,s=Object.fromEntries(Array.from(p,(e=>[e.name,e.checked])))),130&e.$$.dirty&&n(5,c=function(e,t,n){const s=Object.entries(e).filter((([e,s])=>function(e,t,n){return!!n[e.usage_category]&&e.word.includes(t)}(s,t,n)));return Object.fromEntries(s)}(a,d,s))},[o,d,p,g,f,c,u,s,function(e){d=e,n(1,d)},function(e){o=e,n(0,o)},function(e){g=e,n(3,g)},function(e){f=e,n(4,f)},function(e){p=e,n(2,p)}]}return new class extends K{constructor(e){super(),F(this,e,ze,Te,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map