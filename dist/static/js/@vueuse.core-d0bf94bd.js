import{i as e,a as t,n,t as r,u as a,r as o,b as i,c as s,w as u,d as l,e as c,f as d}from"./@vueuse.shared-3f1de09b.js";import{p as v,q as f,t as p,i as m}from"./@vue.runtime-core-4f5b9f62.js";import{e as b,k as g}from"./@vue.reactivity-bec702f3.js";function w(e){var t;const n=o(e);return null!=(t=null==n?void 0:n.$el)?t:n}const y=e?window:void 0,h=e?window.document:void 0,O=e?window.navigator:void 0;function S(...e){let a,o,i,s;if(t(e[0])?([o,i,s]=e,a=y):[a,o,i,s]=e,!a)return n;let u=n;const l=v((()=>w(a)),(e=>{u(),e&&(e.addEventListener(o,i,s),u=()=>{e.removeEventListener(o,i,s),u=n})}),{immediate:!0,flush:"post"}),c=()=>{l(),u()};return r(c),c}function I(e,t,n={}){const{window:r=y,ignore:a,capture:o=!0,detectIframe:i=!1}=n;if(!r)return;const s=b(!0);let u;const l=n=>{r.clearTimeout(u);const a=w(e);a&&a!==n.target&&!n.composedPath().includes(a)&&s.value&&t(n)},c=[S(r,"click",l,{passive:!0,capture:o}),S(r,"pointerdown",(t=>{const n=w(e);var r;s.value=!(!n||t.composedPath().includes(n)||(r=t,a&&a.some((e=>{const t=w(e);return t&&(r.target===t||r.composedPath().includes(t))}))))}),{passive:!0}),S(r,"pointerup",(e=>{if(0===e.button){const t=e.composedPath();e.composedPath=()=>t,u=r.setTimeout((()=>l(e)),50)}}),{passive:!0}),i&&S(r,"blur",(n=>{var r;const a=w(e);"IFRAME"!==(null==(r=document.activeElement)?void 0:r.tagName)||(null==a?void 0:a.contains(document.activeElement))||t(n)}))].filter(Boolean);return()=>c.forEach((e=>e()))}function j(e,t=!1){const n=b(),r=()=>n.value=Boolean(e());return r(),i(r,t),n}function E(e={}){const{navigator:t=O,read:n=!1,source:r,copiedDuring:i=1500}=e,s=["copy","cut"],u=j((()=>t&&"clipboard"in t)),l=b(""),c=b(!1),d=a((()=>c.value=!1),i);function v(){t.clipboard.readText().then((e=>{l.value=e}))}if(u.value&&n)for(const a of s)S(a,v);return{isSupported:u,text:l,copied:c,copy:async function(e=o(r)){u.value&&null!=e&&(await t.clipboard.writeText(e),l.value=e,c.value=!0,d.start())}}}e&&window.location;const P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},N="__vueuse_ssr_handlers__";P[N]=P[N]||{};const k=P[N];function C(e,t){return k[e]||t}var L=Object.defineProperty,T=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&D(e,n,t[n]);if(T)for(var n of T(t))A.call(t,n)&&D(e,n,t[n]);return e};const J={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function M(e,t,n,r={}){var a;const{flush:i="pre",deep:s=!0,listenToStorageChanges:l=!0,writeDefaults:d=!0,mergeDefaults:v=!1,shallow:f,window:p=y,eventFilter:m,onError:w=(e=>{})}=r,h=(f?g:b)(t);if(!n)try{n=C("getDefaultStorage",(()=>{var e;return null==(e=y)?void 0:e.localStorage}))()}catch(k){w(k)}if(!n)return h;const O=o(t),I=function(e){return null==e?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":"boolean"==typeof e?"boolean":"string"==typeof e?"string":"object"==typeof e||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}(O),j=null!=(a=r.serializer)?a:J[I],{pause:E,resume:P}=u(h,(()=>function(t){try{null==t?n.removeItem(e):n.setItem(e,j.write(t))}catch(k){w(k)}}(h.value)),{flush:i,deep:s,eventFilter:m});return p&&l&&S(p,"storage",N),N(),h;function N(t){t&&t.key!==e||(h.value=function(t){if(!t||t.key===e){E();try{const r=t?t.newValue:n.getItem(e);if(null==r)return d&&null!==O&&n.setItem(e,j.write(O)),O;if(!t&&v){const e=j.read(r);return c(v)?v(e,O):"object"!==I||Array.isArray(e)?e:Q(Q({},O),e)}return"string"!=typeof r?r:j.read(r)}catch(k){w(k)}finally{P()}}}(t))}}function R(e){return function(e,t={}){const{window:n=y}=t,a=j((()=>n&&"matchMedia"in n&&"function"==typeof n.matchMedia));let o;const i=b(!1),s=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",u):o.removeListener(u))},u=()=>{a.value&&(s(),o=n.matchMedia(l(e).value),i.value=o.matches,"addEventListener"in o?o.addEventListener("change",u):o.addListener(u))};return p(u),r((()=>s())),i}("(prefers-color-scheme: dark)",e)}var B=Object.defineProperty,F=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function W(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:a=y,storage:o,storageKey:s="vueuse-color-scheme",listenToStorageChanges:u=!0,storageRef:l,emitAuto:c}=e,d=((e,t)=>{for(var n in t||(t={}))z.call(t,n)&&_(e,n,t[n]);if(F)for(var n of F(t))H.call(t,n)&&_(e,n,t[n]);return e})({auto:"",light:"light",dark:"dark"},e.modes||{}),p=R({window:a}),m=f((()=>p.value?"dark":"light")),g=l||(null==s?b(r):M(s,r,o,{window:a,listenToStorageChanges:u})),w=f({get:()=>"auto"!==g.value||c?g.value:m.value,set(e){g.value=e}}),h=C("updateHTMLAttrs",((e,t,n)=>{const r=null==a?void 0:a.document.querySelector(e);if(r)if("class"===t){const e=n.split(/\s/g);Object.values(d).flatMap((e=>(e||"").split(/\s/g))).filter(Boolean).forEach((t=>{e.includes(t)?r.classList.add(t):r.classList.remove(t)}))}else r.setAttribute(t,n)}));function O(e){var r;const a="auto"===e?m.value:e;h(t,n,null!=(r=d[a])?r:a)}function S(t){e.onChanged?e.onChanged(t,O):O(t)}return v(w,S,{flush:"post",immediate:!0}),c&&v(m,(()=>S(w.value)),{flush:"post"}),i((()=>S(w.value))),w}var V=Object.defineProperty,$=Object.defineProperties,q=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,X=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Y(e={}){const{valueDark:t="dark",valueLight:n="",window:r=y}=e,a=W((o=((e,t)=>{for(var n in t||(t={}))U.call(t,n)&&X(e,n,t[n]);if(G)for(var n of G(t))K.call(t,n)&&X(e,n,t[n]);return e})({},e),$(o,q({onChanged:(t,n)=>{var r;e.onChanged?null==(r=e.onChanged)||r.call(e,"dark"===t):n(t)},modes:{dark:t,light:n}}))));var o;const i=R({window:r});return f({get:()=>"dark"===a.value,set(e){e===i.value?a.value="auto":a.value=e?"dark":"light"}})}function Z({document:e=h}={}){if(!e)return b("visible");const t=b(e.visibilityState);return S(e,"visibilitychange",(()=>{t.value=e.visibilityState})),t}var ee,te,ne=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;function oe(e,t,n={}){const a=n,{window:o=y}=a,i=((e,t)=>{var n={};for(var r in e)re.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&ne)for(var r of ne(e))t.indexOf(r)<0&&ae.call(e,r)&&(n[r]=e[r]);return n})(a,["window"]);let s;const u=j((()=>o&&"ResizeObserver"in o)),l=()=>{s&&(s.disconnect(),s=void 0)},c=v((()=>w(e)),(e=>{l(),u.value&&o&&e&&(s=new ResizeObserver(t),s.observe(e,i))}),{immediate:!0,flush:"post"}),d=()=>{l(),c()};return r(d),{isSupported:u,stop:d}}function ie(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:a=!0,immediate:o=!0}=t,s=b(0),u=b(0),l=b(0),c=b(0),d=b(0),f=b(0),p=b(0),m=b(0);function g(){const t=w(e);if(!t)return void(n&&(s.value=0,u.value=0,l.value=0,c.value=0,d.value=0,f.value=0,p.value=0,m.value=0));const r=t.getBoundingClientRect();s.value=r.height,u.value=r.bottom,l.value=r.left,c.value=r.right,d.value=r.top,f.value=r.width,p.value=r.x,m.value=r.y}return oe(e,g),v((()=>w(e)),(e=>!e&&g())),a&&S("scroll",g,{passive:!0}),r&&S("resize",g,{passive:!0}),i((()=>{o&&g()})),{height:s,bottom:u,left:l,right:c,top:d,width:f,x:p,y:m,update:g}}(te=ee||(ee={})).UP="UP",te.RIGHT="RIGHT",te.DOWN="DOWN",te.LEFT="LEFT",te.NONE="NONE";var se=Object.defineProperty,ue=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,de=(e,t,n)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ve(e,t,n,r={}){var a,o,i;const{clone:s=!1,passive:u=!1,eventName:l,deep:p=!1,defaultValue:g}=r,w=m(),y=n||(null==w?void 0:w.emit)||(null==(a=null==w?void 0:w.$emit)?void 0:a.bind(w))||(null==(i=null==(o=null==w?void 0:w.proxy)?void 0:o.$emit)?void 0:i.bind(null==w?void 0:w.proxy));let h=l;t||(t="modelValue"),h=l||h||`update:${t.toString()}`;const O=e=>{return s?c(s)?s(e):(t=e,JSON.parse(JSON.stringify(t))):e;var t},S=()=>d(e[t])?O(e[t]):g;if(u){const n=S(),r=b(n);return v((()=>e[t]),(e=>r.value=O(e))),v(r,(n=>{(n!==e[t]||p)&&y(h,n)}),{deep:p}),r}return f({get:()=>S(),set(e){y(h,e)}})}function fe({window:e=y}={}){if(!e)return b(!1);const t=b(e.document.hasFocus());return S(e,"blur",(()=>{t.value=!1})),S(e,"focus",(()=>{t.value=!0})),t}function pe(e={}){const{window:t=y,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=e,s=b(n),u=b(r),l=()=>{t&&(o?(s.value=t.innerWidth,u.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};return l(),i(l),S("resize",l,{passive:!0}),a&&S("orientationchange",l,{passive:!0}),{width:s,height:u}}((e,t)=>{for(var n in t||(t={}))le.call(t,n)&&de(e,n,t[n]);if(ue)for(var n of ue(t))ce.call(t,n)&&de(e,n,t[n])})({linear:s},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{w as a,pe as b,ie as c,oe as d,Z as e,fe as f,ve as g,E as h,Y as i,I as o,S as u};
