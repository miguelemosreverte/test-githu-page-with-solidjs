(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const p={};function B(e){p.context=e}const xt=(e,t)=>e===t,Ee=Symbol("solid-proxy"),he={equals:xt};let F=null,Je=nt;const L=1,M=2,Ge={owned:null,cleanups:null,context:null,owner:null},be={};var g=null;let a=null,v=null,A=null,E=null,Ae=0;const[Yn,Te]=O(!1);function Oe(e,t){const n=v,s=g,r=e.length===0,o=r?Ge:{owned:null,cleanups:null,context:null,owner:t||s},l=r?e:()=>e(()=>_(()=>Y(o)));g=o,v=null;try{return R(l,!0)}finally{v=n,g=s}}function O(e,t){t=t?Object.assign({},he,t):he;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(a&&a.running&&a.sources.has(n)?r=r(n.tValue):r=r(n.value)),tt(n,r));return[et.bind(n),s]}function Re(e,t,n){const s=me(e,t,!0,L);ne(s)}function I(e,t,n){const s=me(e,t,!1,L);ne(s)}function vt(e,t,n){Je=kt;const s=me(e,t,!1,L),r=W&&ce(g,W.id);r&&(s.suspense=r),s.user=!0,E?E.push(s):ne(s)}function P(e,t,n){n=n?Object.assign({},he,n):he;const s=me(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,ne(s),et.bind(s)}function Pt(e,t,n){let s,r,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,o=t||{}):(s=e,r=t,o=n||{});let l=null,i=be,u=null,c=!1,f=!1,h="initialValue"in o,S=typeof s=="function"&&P(s);const b=new Set,[w,k]=(o.storage||O)(o.initialValue),[N,$]=O(void 0),[T,z]=O(void 0,{equals:!1}),[V,q]=O(h?"ready":"unresolved");if(p.context){u=`${p.context.id}${p.context.count++}`;let d;o.ssrLoadFrom==="initial"?i=o.initialValue:p.load&&(d=p.load(u))&&(i=d[0])}function U(d,y,C,j){return l===d&&(l=null,h=!0,(d===i||y===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(j,{value:y})),i=be,a&&d&&c?(a.promises.delete(d),c=!1,R(()=>{a.running=!0,re(y,C)},!1)):re(y,C)),y}function re(d,y){R(()=>{y||k(()=>d),q(y?"errored":"ready"),$(y);for(const C of b.keys())C.decrement();b.clear()},!1)}function se(){const d=W&&ce(g,W.id),y=w(),C=N();if(C&&!l)throw C;return v&&!v.user&&d&&Re(()=>{T(),l&&(d.resolved&&a&&c?a.promises.add(l):b.has(d)||(d.increment(),b.add(d)))}),y}function x(d=!0){if(d!==!1&&f)return;f=!1;const y=S?S():s;if(c=a&&a.running,y==null||y===!1){U(l,_(w));return}a&&l&&a.promises.delete(l);const C=i!==be?i:_(()=>r(y,{value:w(),refetching:d}));return typeof C!="object"||!(C&&"then"in C)?(U(l,C),C):(l=C,f=!0,queueMicrotask(()=>f=!1),R(()=>{q(h?"refreshing":"pending"),z()},!1),C.then(j=>U(C,j,void 0,y),j=>U(C,void 0,ot(j))))}return Object.defineProperties(se,{state:{get:()=>V()},error:{get:()=>N()},loading:{get(){const d=V();return d==="pending"||d==="refreshing"}},latest:{get(){if(!h)return se();const d=N();if(d&&!l)throw d;return w()}}}),S?Re(()=>x(!1)):x(!1),[se,{refetch:x,mutate:k}]}function _(e){const t=v;v=null;try{return e()}finally{v=t}}function Qe(e,t,n){const s=Array.isArray(e);let r,o=n&&n.defer;return l=>{let i;if(s){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(o){o=!1;return}const u=_(()=>t(i,r,l));return r=i,u}}function le(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function _e(e){F||(F=Symbol("error")),g===null||(g.context===null?g.context={[F]:[e]}:g.context[F]?g.context[F].push(e):g.context[F]=[e])}function Ye(){return g}function Ct(e,t){const n=g;g=e;try{return R(t,!0)}finally{g=n}}function Et(e){if(a&&a.running)return e(),a.done;const t=v,n=g;return Promise.resolve().then(()=>{v=t,g=n;let s;return W&&(s=a||(a={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),R(e,!1),v=g=null,s?s.done:void 0})}function At(e){E.push.apply(E,e),e.length=0}function te(e,t){const n=Symbol("context");return{id:n,Provider:Nt(n),defaultValue:e}}function X(e){let t;return(t=ce(g,e.id))!==void 0?t:e.defaultValue}function Ze(e){const t=P(e),n=P(()=>xe(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let W;function Ot(){return W||(W=te({}))}function et(){const e=a&&a.running;if(this.sources&&(!e&&this.state||e&&this.tState))if(!e&&this.state===L||e&&this.tState===L)ne(this);else{const t=A;A=null,R(()=>ye(this),!1),A=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return e&&a.sources.has(this)?this.tValue:this.value}function tt(e,t,n){let s=a&&a.running&&a.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(a){const r=a.running;(r||!n&&a.sources.has(e))&&(a.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&R(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=a&&a.running;l&&a.disposed.has(o)||((l&&!o.tState||!l&&!o.state)&&(o.pure?A.push(o):E.push(o),o.observers&&rt(o)),l?o.tState=L:o.state=L)}if(A.length>1e6)throw A=[],new Error},!1)}return t}function ne(e){if(!e.fn)return;Y(e);const t=g,n=v,s=Ae;v=g=e,je(e,a&&a.running&&a.sources.has(e)?e.tValue:e.value,s),a&&!a.running&&a.sources.has(e)&&queueMicrotask(()=>{R(()=>{a&&(a.running=!0),v=g=e,je(e,e.tValue,s),v=g=null},!1)}),v=n,g=t}function je(e,t,n){let s;try{s=e.fn(t)}catch(r){e.pure&&(a&&a.running?e.tState=L:e.state=L),it(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?tt(e,s,!0):a&&a.running&&e.pure?(a.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function me(e,t,n,s=L,r){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return a&&a.running&&(o.state=0,o.tState=s),g===null||g!==Ge&&(a&&a.running&&g.pure?g.tOwned?g.tOwned.push(o):g.tOwned=[o]:g.owned?g.owned.push(o):g.owned=[o]),o}function ge(e){const t=a&&a.running;if(!t&&e.state===0||t&&e.tState===0)return;if(!t&&e.state===M||t&&e.tState===M)return ye(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ae);){if(t&&a.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,o=n[s+1];for(;(r=r.owner)&&r!==o;)if(a.disposed.has(r))return}if(!t&&e.state===L||t&&e.tState===L)ne(e);else if(!t&&e.state===M||t&&e.tState===M){const r=A;A=null,R(()=>ye(e,n[0]),!1),A=r}}}function R(e,t){if(A)return e();let n=!1;t||(A=[]),E?n=!0:E=[],Ae++;try{const s=e();return Lt(n),s}catch(s){A||(E=null),it(s)}}function Lt(e){if(A&&(nt(A),A=null),e)return;let t;if(a){if(!a.promises.size&&!a.queue.size){const s=a.sources,r=a.disposed;E.push.apply(E,a.effects),t=a.resolve;for(const o of E)"tState"in o&&(o.state=o.tState),delete o.tState;a=null,R(()=>{for(const o of r)Y(o);for(const o of s){if(o.value=o.tValue,o.owned)for(let l=0,i=o.owned.length;l<i;l++)Y(o.owned[l]);o.tOwned&&(o.owned=o.tOwned),delete o.tValue,delete o.tOwned,o.tState=0}Te(!1)},!1)}else if(a.running){a.running=!1,a.effects.push.apply(a.effects,E),E=null,Te(!0);return}}const n=E;E=null,n.length&&R(()=>Je(n),!1),t&&t()}function nt(e){for(let t=0;t<e.length;t++)ge(e[t])}function kt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ge(s)}for(p.context&&B(),t=0;t<n;t++)ge(e[t])}function ye(e,t){const n=a&&a.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(!n&&r.state===L||n&&r.tState===L?r!==t&&ge(r):(!n&&r.state===M||n&&r.tState===M)&&ye(r,t))}}function rt(e){const t=a&&a.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!t&&!s.state||t&&!s.tState)&&(t?s.tState=M:s.state=M,s.pure?A.push(s):E.push(s),s.observers&&rt(s))}}function Y(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();s<r.length&&(o.sourceSlots[l]=s,r[s]=o,n.observerSlots[s]=l)}}if(a&&a.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)Y(e.tOwned[t]);delete e.tOwned}st(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)Y(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}a&&a.running?e.tState=0:e.state=0,e.context=null}function st(e,t){if(t||(e.tState=0,a.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)st(e.owned[n])}function ot(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function it(e){e=ot(e);const t=F&&ce(g,F);if(!t)throw e;for(const n of t)n(e)}function ce(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ce(e.owner,t):void 0}function xe(e){if(typeof e=="function"&&!e.length)return xe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=xe(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Nt(e,t){return function(s){let r;return I(()=>r=_(()=>(g.context={[e]:s.value},Ze(()=>s.children))),void 0),r}}function m(e,t){return _(()=>e(t||{}))}function ae(){return!0}const lt={get(e,t,n){return t===Ee?n:e.get(t)},has(e,t){return e.has(t)},set:ae,deleteProperty:ae,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ae,deleteProperty:ae}},ownKeys(e){return e.keys()}};function Se(e){return(e=typeof e=="function"?e():e)?e:{}}function ve(...e){if(e.some(n=>n&&(Ee in n||typeof n=="function")))return new Proxy({get(n){for(let s=e.length-1;s>=0;s--){const r=Se(e[s])[n];if(r!==void 0)return r}},has(n){for(let s=e.length-1;s>=0;s--)if(n in Se(e[s]))return!0;return!1},keys(){const n=[];for(let s=0;s<e.length;s++)n.push(...Object.keys(Se(e[s])));return[...new Set(n)]}},lt);const t={};for(let n=e.length-1;n>=0;n--)if(e[n]){const s=Object.getOwnPropertyDescriptors(e[n]);for(const r in s)r in t||Object.defineProperty(t,r,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const l=(e[o]||{})[r];if(l!==void 0)return l}}})}return t}function $t(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),r=Ee in e;r||t.push(Object.keys(s).filter(l=>!n.has(l)));const o=t.map(l=>{const i={};for(let u=0;u<l.length;u++){const c=l[u];!r&&!(c in e)||Object.defineProperty(i,c,s[c]?s[c]:{get(){return e[c]},set(){return!0},enumerable:!0})}return i});return r&&o.push(new Proxy({get(l){return n.has(l)?void 0:e[l]},has(l){return n.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!n.has(l))}},lt)),o}function qe(e){let t,n;const s=r=>{const o=p.context;if(o){const[i,u]=O();(n||(n=e())).then(c=>{B(o),u(()=>c.default),B()}),t=i}else if(t){const i=t();if(i)return i(r)}else{const[i]=Pt(()=>(n||(n=e())).then(u=>u.default));t=i}let l;return P(()=>(l=t())&&_(()=>{if(!o)return l(r);const i=p.context;B(o);const u=l(r);return B(i),u}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let Tt=0;function Rt(){const e=p.context;return e?`${e.id}${e.count++}`:`cl-${Tt++}`}function Le(e){let t=!1;const n=e.keyed,s=P(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return P(()=>{const r=s();if(r){const o=e.children,l=typeof o=="function"&&o.length>0;return t=n||l,l?_(()=>o(r)):o}return e.fallback})}let Q;function ct(){Q&&[...Q].forEach(e=>e())}function _t(e){let t,n;p.context&&p.load&&(n=p.load(p.context.id+p.context.count))&&(t=n[0]);const[s,r]=O(t);return Q||(Q=new Set),Q.add(r),le(()=>Q.delete(r)),P(()=>{let o;if(o=s()){const l=e.fallback,i=typeof l=="function"&&l.length?_(()=>l(o,()=>r())):l;return _e(r),i}return _e(r),e.children})}const jt=te();function qt(e){let t=0,n,s,r,o,l;const[i,u]=O(!1),c=Ot(),f={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:i,effects:[],resolved:!1},h=Ye();if(p.context&&p.load){const w=p.context.id+p.context.count;let k=p.load(w);if(k&&(r=k[0])&&r!=="$$f"){(typeof r!="object"||!("then"in r))&&(r=Promise.resolve(r));const[N,$]=O(void 0,{equals:!1});o=N,r.then(T=>{if(T||p.done)return T&&(l=T),$();p.gather(w),B(s),$(),B()})}}const S=X(jt);S&&(n=S.register(f.inFallback));let b;return le(()=>b&&b()),m(c.Provider,{value:f,get children(){return P(()=>{if(l)throw l;if(s=p.context,o)return o(),o=void 0;s&&r==="$$f"&&B();const w=P(()=>e.children);return P(k=>{const N=f.inFallback(),{showContent:$=!0,showFallback:T=!0}=n?n():{};if((!N||r&&r!=="$$f")&&$)return f.resolved=!0,b&&b(),b=s=r=void 0,At(f.effects),w();if(!!T)return b?k:Oe(z=>(b=z,s&&(B({id:s.id+"f",count:0}),s=void 0),e.fallback),h)})})}})}const Bt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],It=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Bt]),Vt=new Set(["innerHTML","textContent","innerText","children"]),Ft=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Be=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Mt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ut={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Dt(e,t,n){let s=n.length,r=t.length,o=s,l=0,i=0,u=t[r-1].nextSibling,c=null;for(;l<r||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const f=o<s?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],f)}else if(o===i)for(;l<r;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],f),t[r]=n[o]}else{if(!c){c=new Map;let h=i;for(;h<o;)c.set(n[h],h++)}const f=c.get(t[l]);if(f!=null)if(i<f&&f<o){let h=l,S=1,b;for(;++h<r&&h<o&&!((b=c.get(t[h]))==null||b!==f+S);)S++;if(S>f-i){const w=t[l];for(;i<f;)e.insertBefore(n[i++],w)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Ie="_$DX_DELEGATE";function Ht(e,t,n,s={}){let r;return Oe(o=>{r=o,t===document?e():Pe(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function ut(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function ke(e,t=window.document){const n=t[Ie]||(t[Ie]=new Set);for(let s=0,r=e.length;s<r;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Qt))}}function at(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Kt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Wt(e,t){t==null?e.removeAttribute("class"):e.className=t}function ft(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=o=>r.call(e,n[1],o))}else e.addEventListener(t,n)}function Xt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let o,l;for(o=0,l=r.length;o<l;o++){const i=r[o];!i||i==="undefined"||t[i]||(Ve(e,i,!1),delete n[i])}for(o=0,l=s.length;o<l;o++){const i=s[o],u=!!t[i];!i||i==="undefined"||n[i]===u||!u||(Ve(e,i,!0),n[i]=u)}return n}function zt(e,t,n){if(!t)return n?at(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)r=t[o],r!==n[o]&&(s.setProperty(o,r),n[o]=r);return n}function Z(e,t={},n,s){const r={};return s||I(()=>r.children=ee(e,t.children,r.children)),I(()=>t.ref&&t.ref(e)),I(()=>Jt(e,t,n,!0,r,!0)),r}function Pe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return ee(e,t,s,n);I(r=>ee(e,t(),r,n),s)}function Jt(e,t,n,s,r={},o=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Fe(e,l,null,r[l],n,o)}for(const l in t){if(l==="children"){s||ee(e,t.children);continue}const i=t[l];r[l]=Fe(e,l,i,r[l],n,o)}}function Gt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ve(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,o=s.length;r<o;r++)e.classList.toggle(s[r],n)}function Fe(e,t,n,s,r,o){let l,i,u;if(t==="style")return zt(e,n,s);if(t==="classList")return Xt(e,n,s);if(n===s)return s;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),f=Mt.has(c);if(!f&&s){const h=Array.isArray(s)?s[0]:s;e.removeEventListener(c,h)}(f||n)&&(ft(e,c,n,f),f&&ke([c]))}else if((u=Vt.has(t))||!r&&(Be[t]||(i=It.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?Wt(e,n):l&&!i&&!u?e[Gt(t)]=n:e[Be[t]||t]=n;else{const c=r&&t.indexOf(":")>-1&&Ut[t.split(":")[0]];c?Kt(e,c,t,n):at(e,Ft[t]||t,n)}return n}function Qt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ee(e,t,n,s,r){for(p.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(p.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=G(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(p.context)return n;n=G(e,n,s)}else{if(o==="function")return I(()=>{let i=t();for(;typeof i=="function";)i=i();n=ee(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(Ce(i,t,n,r))return I(()=>n=ee(e,i,n,s,!0)),()=>n;if(p.context){if(!i.length)return n;for(let c=0;c<i.length;c++)if(i[c].parentNode)return n=i}if(i.length===0){if(n=G(e,n,s),l)return n}else u?n.length===0?Me(e,i,s):Dt(e,n,i):(n&&G(e),Me(e,i));n=i}else if(t instanceof Node){if(p.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=G(e,n,s,t);G(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ce(e,t,n,s){let r=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],u=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=Ce(e,i,u)||r;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();r=Ce(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||r}else e.push(i),r=!0;else{const c=String(i);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return r}function Me(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function G(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(r!==i){const u=i.parentNode===e;!o&&!l?u?e.replaceChild(r,i):e.insertBefore(r,n):u&&i.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}function Yt(e){return p.context?void 0:e.children}const dt=!1,Zt="modulepreload",en=function(e){return"/"+e},Ue={},De=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=en(o),o in Ue)return;Ue[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===o&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Zt,l||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),l)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function tn(e,t){Ht(e,t===document?t.body:t)}const Ne=te(),nn=["title","meta"],He=e=>e.tag+(e.name?`.${e.name}"`:""),rn=e=>{if(!p.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,o=>o.parentNode.removeChild(o))}const t=new Map;function n(r){if(r.ref)return r.ref;let o=document.querySelector(`[data-sm="${r.id}"]`);return o?(o.tagName.toLowerCase()!==r.tag&&(o.parentNode&&o.parentNode.removeChild(o),o=document.createElement(r.tag)),o.removeAttribute("data-sm")):o=document.createElement(r.tag),o}const s={addClientTag:r=>{let o=He(r);if(nn.indexOf(r.tag)!==-1){t.has(o)||t.set(o,[]);let i=t.get(o),u=i.length;i=[...i,r],t.set(o,i);{let c=n(r);r.ref=c,Z(c,r.props);let f=null;for(var l=u-1;l>=0;l--)if(i[l]!=null){f=i[l];break}c.parentNode!=document.head&&document.head.appendChild(c),f&&f.ref&&document.head.removeChild(f.ref)}return u}{let i=n(r);r.ref=i,Z(i,r.props),i.parentNode!=document.head&&document.head.appendChild(i)}return-1},removeClientTag:(r,o)=>{const l=He(r);if(r.ref){const i=t.get(l);if(i){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let u=o-1;u>=0;u--)i[u]!=null&&document.head.appendChild(i[u].ref)}i[o]=null,t.set(l,i)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}};return m(Ne.Provider,{value:s,get children(){return e.children}})},ht=(e,t)=>{const n=Rt();if(!X(Ne))throw new Error("<MetaProvider /> should be in the tree");return sn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function sn(e){const{addClientTag:t,removeClientTag:n,addServerTag:s}=X(Ne);I(()=>{{let r=t(e);le(()=>n(e,r))}})}const on=e=>ht("title",e),Ke=e=>ht("meta",e);function ln(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function cn([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function un(e){try{return document.querySelector(e)}catch{return null}}function an(e,t){const n=un(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function fn(e,t,n,s){let r=!1;const o=i=>typeof i=="string"?{value:i}:i,l=cn(O(o(e()),{equals:(i,u)=>i.value===u.value}),void 0,i=>(!r&&t(i),i));return n&&le(n((i=e())=>{r=!0,l[1](o(i)),r=!1})),{signal:l,utils:s}}function dn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:O({value:""})};return e}function hn(){return fn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),an(window.location.hash.slice(1),n)},e=>ln(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function gn(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const l={to:r,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:u=>{u&&(n=!0),i.navigate(r,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const yn=/^(?:[a-z0-9]+:)?\/\//i,mn=/^\/+|\/+$/g;function K(e,t=!1){const n=e.replace(mn,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function fe(e,t,n){if(yn.test(t))return;const s=K(e),r=n&&K(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+K(t,!o)}function pn(e,t){if(e==null)throw new Error(t);return e}function gt(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function wn(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function de(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function bn(e,t){const[n,s]=e.split("/*",2),r=n.split("/").filter(Boolean),o=r.length;return l=>{const i=l.split("/").filter(Boolean),u=i.length-o;if(u<0||u>0&&s===void 0&&!t)return null;const c={path:o?"":"/",params:{}};for(let f=0;f<o;f++){const h=r[f],S=i[f];if(h[0]===":")c.params[h.slice(1)]=S;else if(h.localeCompare(S,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${S}`}return s&&(c.params[s]=u?i.slice(-u).join("/"):""),c}}function Sn(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function yt(e){const t=new Map,n=Ye();return new Proxy({},{get(s,r){return t.has(r)||Ct(n,()=>t.set(r,P(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function mt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return mt(s).reduce((o,l)=>[...o,...r.map(i=>i+l)],[])}const xn=100,pt=te(),pe=te(),we=()=>pn(X(pt),"Make sure your app is wrapped in a <Router />");let ie;const $e=()=>ie||X(pe)||we().base,vn=e=>{const t=$e();return P(()=>t.resolvePath(e()))},Pn=e=>{const t=we();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})};const Cn=()=>we().location;function En(e,t="",n){const{component:s,data:r,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:s?()=>m(s,{}):()=>{const{element:u}=e;return u===void 0&&n?m(n,{}):u},preload:e.component?s.preload:e.preload,data:r};return wt(e.path).reduce((u,c)=>{for(const f of mt(c)){const h=gt(t,f),S=l?h:h.split("/*",1)[0];u.push({...i,originalPath:f,pattern:S,matcher:bn(S,!l)})}return u},[])}function An(e,t=0){return{routes:e,score:Sn(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],l=o.matcher(n);if(!l)return null;s.unshift({...l,route:o})}return s}}}function wt(e){return Array.isArray(e)?e:[e]}function bt(e,t="",n,s=[],r=[]){const o=wt(e);for(let l=0,i=o.length;l<i;l++){const u=o[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=En(u,t,n);for(const f of c){s.push(f);const h=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!h)bt(u.children,f.pattern,n,s,r);else{const S=An([...s],r.length);r.push(S)}s.pop()}}}return s.length?r:r.sort((l,i)=>i.score-l.score)}function On(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Ln(e,t){const n=new URL("http://sar"),s=P(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),r=P(()=>de(s().pathname)),o=P(()=>de(s().search,!0)),l=P(()=>de(s().hash)),i=P(()=>"");return{get pathname(){return r()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:yt(Qe(o,()=>wn(s())))}}function kn(e,t="",n,s){const{signal:[r,o],utils:l={}}=dn(e),i=l.parsePath||(x=>x),u=l.renderPath||(x=>x),c=l.beforeLeave||gn(),f=fe("",t),h=void 0;if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!r().value&&o({value:f,replace:!0,scroll:!1});const[S,b]=O(!1),w=async x=>{b(!0);try{await Et(x)}finally{b(!1)}},[k,N]=O(r().value),[$,T]=O(r().state),z=Ln(k,$),V=[],q={pattern:f,params:{},path:()=>f,outlet:()=>null,resolvePath(x){return fe(f,x)}};if(n)try{ie=q,q.data=n({data:void 0,params:{},location:z,navigate:re(q)})}finally{ie=void 0}function U(x,d,y){_(()=>{if(typeof d=="number"){d&&(l.go?c.confirm(d,y)&&l.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:C,resolve:j,scroll:D,state:J}={replace:!1,resolve:!0,scroll:!0,...y},H=j?x.resolvePath(d):fe("",d);if(H===void 0)throw new Error(`Path '${d}' is not a routable path`);if(V.length>=xn)throw new Error("Too many redirects");const oe=k();if((H!==oe||J!==$())&&!dt){if(c.confirm(H,y)){const ue=V.push({value:oe,replace:C,scroll:D,state:$()});w(()=>{N(H),T(J),ct()}).then(()=>{V.length===ue&&se({value:H,state:J})})}}})}function re(x){return x=x||X(pe)||q,(d,y)=>U(x,d,y)}function se(x){const d=V[0];d&&((x.value!==d.value||x.state!==d.state)&&o({...x,replace:d.replace,scroll:d.scroll}),V.length=0)}I(()=>{const{value:x,state:d}=r();_(()=>{x!==k()&&w(()=>{N(x),T(d)})})});{let x=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const y=d.composedPath().find(ue=>ue instanceof Node&&ue.nodeName.toUpperCase()==="A");if(!y||!y.hasAttribute("link"))return;const C=y.href;if(y.target||!C&&!y.hasAttribute("state"))return;const j=(y.getAttribute("rel")||"").split(/\s+/);if(y.hasAttribute("download")||j&&j.includes("external"))return;const D=new URL(C),J=de(D.pathname);if(D.origin!==window.location.origin||f&&J&&!J.toLowerCase().startsWith(f.toLowerCase()))return;const H=i(D.pathname+D.search+D.hash),oe=y.getAttribute("state");d.preventDefault(),U(q,H,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:oe&&JSON.parse(oe)})};ke(["click"]),document.addEventListener("click",x),le(()=>document.removeEventListener("click",x))}return{base:q,out:h,location:z,isRouting:S,renderPath:u,parsePath:i,navigatorFactory:re,beforeLeave:c}}function Nn(e,t,n,s){const{base:r,location:o,navigatorFactory:l}=e,{pattern:i,element:u,preload:c,data:f}=s().route,h=P(()=>s().path),S=yt(()=>s().params);c&&c();const b={parent:t,pattern:i,get child(){return n()},path:h,params:S,data:t.data,outlet:u,resolvePath(w){return fe(r.path(),w,h())}};if(f)try{ie=b,b.data=f({data:t.data,params:S,location:o,navigate:l(b)})}finally{ie=void 0}return b}const $n=ut("<a link></a>"),Tn=e=>{const{source:t,url:n,base:s,data:r,out:o}=e,l=t||hn(),i=kn(l,s,r);return m(pt.Provider,{value:i,get children(){return e.children}})},Rn=e=>{const t=we(),n=$e(),s=Ze(()=>e.children),r=P(()=>bt(s(),gt(n.pattern,e.base||""),_n)),o=P(()=>On(r(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:c,path:f,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:f,params:h})));const l=[];let i;const u=P(Qe(o,(c,f,h)=>{let S=f&&c.length===f.length;const b=[];for(let w=0,k=c.length;w<k;w++){const N=f&&f[w],$=c[w];h&&N&&$.route.key===N.route.key?b[w]=h[w]:(S=!1,l[w]&&l[w](),Oe(T=>{l[w]=T,b[w]=Nn(t,b[w-1]||n,()=>u()[w+1],()=>o()[w])}))}return l.splice(c.length).forEach(w=>w()),h&&S?h:(i=b[0],b)}));return m(Le,{get when(){return u()&&i},children:c=>m(pe.Provider,{value:c,get children(){return c.outlet()}})})},_n=()=>{const e=$e();return m(Le,{get when(){return e.child},children:t=>m(pe.Provider,{value:t,get children(){return t.outlet()}})})};function jn(e){e=ve({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=$t(e,["href","state","class","activeClass","inactiveClass","end"]),n=vn(()=>e.href),s=Pn(n),r=Cn(),o=P(()=>{const l=n();if(l===void 0)return!1;const i=K(l.split(/[?#]/,1)[0]).toLowerCase(),u=K(r.pathname).toLowerCase();return e.end?i===u:u.startsWith(i)});return(()=>{const l=$n.cloneNode(!0);return Z(l,ve(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o(),[e.activeClass]:o(),...t.classList}},get["aria-current"](){return o()?"page":void 0}}),!1,!1),l})()}const qn=[{component:qe(()=>De(()=>import("./_...404_.5083a5f9.js"),[])),path:"/*404"},{component:qe(()=>De(()=>import("./index.58ca6472.js"),["assets/index.58ca6472.js","assets/index.fdb6b3cf.css"])),path:"/"}],Bn=()=>qn,St=te({}),We=jn,In=Rn,Vn="$FETCH",Fn=ut('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre></pre></div></div>');function Mn(e){return m(_t,{fallback:(t,n)=>m(Le,{get when(){return!e.fallback},get fallback(){return e.fallback(t,n)},get children(){return m(Un,{error:t})}}),get children(){return e.children}})}function Un(e){return vt(()=>console.error(e.error)),(()=>{const t=Fn.cloneNode(!0),n=t.firstChild,s=n.firstChild,r=s.nextSibling,o=r.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),s.style.setProperty("font-weight","bold"),Pe(s,()=>e.error.message),ft(r,"click",ct,!0),r.style.setProperty("color","rgba(252, 165, 165)"),r.style.setProperty("background-color","rgb(153, 27, 27)"),r.style.setProperty("border-radius","5px"),r.style.setProperty("padding","4px 8px"),o.style.setProperty("margin-top","8px"),o.style.setProperty("width","100%"),Pe(o,()=>e.error.stack),t})()}ke(["click"]);const Dn=!1,Hn=!1,Kn=!1;function Wn(){return X(St),[Hn,Kn,m(Yt,{get children(){return dt}}),Dn]}function Xn(e){return Z(document.documentElement,e,!1,!0),e.children}function zn(e){return Z(document.head,e,!1,!0),e.children}function Jn(e){return Z(document.body,e,!1,!0),e.children}function Xe(){return m(Xn,{lang:"en",get children(){return[m(zn,{get children(){return[m(on,{children:"SolidStart - Bare"}),m(Ke,{charset:"utf-8"}),m(Ke,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),m(Jn,{get children(){return[m(qt,{get children(){return m(Mn,{get children(){return[m(We,{href:"/",children:"Index"}),m(We,{href:"/about",children:"About"}),m(In,{get children(){return m(Bn,{})}})]}})}}),m(Wn,{})]}})]}})}const ze=Object.values(Object.assign({}))[0],Gn=ze?ze.default:void 0,Qn=()=>{let e={get request(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Vn,fetch};function t(n){return m(Tn,ve(n,{get children(){return m(Xe,{})}}))}return m(St.Provider,{value:e,get children(){return m(rn,{get children(){return m(t,{data:Gn,get children(){return m(Xe,{})}})}})}})};tn(()=>m(Qn,{}),document);export{St as S,on as T,O as a,m as c,ke as d,Pe as i,le as o,ut as t,X as u};
