import{l as e,o as t,e as n,u as r,k as o,n as i}from"./@vue.reactivity-bec702f3.js";import{i as u,e as a,n as l,t as s,p as c,q as f}from"./@vue.runtime-core-4f5b9f62.js";var p,v=Object.defineProperty,b=Object.defineProperties,y=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function j(e,t){var n;const r=o();var u,a;return s((()=>{r.value=e()}),(u=((e,t)=>{for(var n in t||(t={}))O.call(t,n)&&w(e,n,t[n]);if(m)for(var n of m(t))d.call(t,n)&&w(e,n,t[n]);return e})({},t),a={flush:null!=(n=null==t?void 0:t.flush)?n:"sync"},b(u,y(a)))),i(r)}const g="undefined"!=typeof window,P=e=>void 0!==e,T=e=>"boolean"==typeof e,h=e=>"function"==typeof e,F=e=>"number"==typeof e,x=e=>"string"==typeof e,A=()=>{};function D(e){return"function"==typeof e?e():r(e)}function E(e,t){return function(...n){e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})}}g&&(null==(p=null==window?void 0:window.navigator)?void 0:p.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const I=e=>e();function S(e){return e}function k(n){return!!e()&&(t(n),!0)}function q(e,t=200,n={}){return E(function(e,t={}){let n,r;return o=>{const i=D(e),u=D(t.maxWait);if(n&&clearTimeout(n),i<=0||void 0!==u&&u<=0)return r&&(clearTimeout(r),r=null),o();u&&!r&&(r=setTimeout((()=>{n&&clearTimeout(n),r=null,o()}),u)),n=setTimeout((()=>{r&&clearTimeout(r),r=null,o()}),i)}}(t,n),e)}function W(e,t=200,r={}){if(t<=0)return e;const o=n(e.value),i=q((()=>{o.value=e.value}),t,r);return c(e,(()=>i())),o}function z(e,t=200,n=!1,r=!0){return E(function(e,t=!0,n=!0){let r,o=0,i=!0;const u=()=>{r&&(clearTimeout(r),r=void 0)};return a=>{const l=D(e),s=Date.now()-o;if(u(),l<=0)return o=Date.now(),a();s>l&&(n||!i)?(o=Date.now(),a()):t&&(r=setTimeout((()=>{o=Date.now(),i=!0,u(),a()}),l)),n||r||(r=setTimeout((()=>i=!0),l)),i=!1}}(t,n,r),e)}function B(e){return"function"==typeof e?f(e):n(e)}function C(e,t=!0){u()?a(e):t?e():l(e)}function G(e,t,r={}){const{immediate:o=!0}=r,i=n(!1);let u=null;function a(){u&&(clearTimeout(u),u=null)}function l(){i.value=!1,a()}function s(...n){a(),i.value=!0,u=setTimeout((()=>{i.value=!1,u=null,e(...n)}),D(t))}return o&&(i.value=!0,g&&s()),k(l),{isPending:i,start:s,stop:l}}var H=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;function L(e,t,n={}){const r=n,{eventFilter:o=I}=r,i=((e,t)=>{var n={};for(var r in e)J.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&H)for(var r of H(e))t.indexOf(r)<0&&K.call(e,r)&&(n[r]=e[r]);return n})(r,["eventFilter"]);return c(e,E(o,t),i)}var M=Object.defineProperty,N=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,X=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Y(e,t,r={}){const o=r,{eventFilter:i}=o,u=((e,t)=>{var n={};for(var r in e)U.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&R)for(var r of R(e))t.indexOf(r)<0&&V.call(e,r)&&(n[r]=e[r]);return n})(o,["eventFilter"]),{eventFilter:a,pause:l,resume:s,isActive:c}=function(e=I){const t=n(!0);return{isActive:t,pause:function(){t.value=!1},resume:function(){t.value=!0},eventFilter:(...n)=>{t.value&&e(...n)}}}(i),f=L(e,t,(p=((e,t)=>{for(var n in t||(t={}))U.call(t,n)&&X(e,n,t[n]);if(R)for(var n of R(t))V.call(t,n)&&X(e,n,t[n]);return e})({},u),N(p,Q({eventFilter:a}))));var p;return{stop:f,pause:l,resume:s,isActive:c}}export{x as a,C as b,S as c,B as d,h as e,P as f,F as g,T as h,g as i,z as j,W as k,j as l,A as n,D as r,k as t,G as u,Y as w};