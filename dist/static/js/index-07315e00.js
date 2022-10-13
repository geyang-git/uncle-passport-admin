import{u as e,g as a,i as s}from"./index-841f2aa9.js";import"./vue-echarts-85a407f1.js";import"./element-plus-04192b69.js";import"./store-96e17a43.js";import{u as t}from"./index-2900e021.js";import{b as l,r as n}from"./lodash-es-a085e596.js";import{d as o,q as r,R as i,o as c,c as u,I as p,J as d,F as m,V as f,N as v,e as b,b as _,M as h,a as j,al as k,ak as g,x as y,h as w,K as x,p as C,L as I,$ as M}from"./@vue.runtime-core-4f5b9f62.js";import{u as P,e as z}from"./@vue.reactivity-bec702f3.js";import{L as F,o as S}from"./@vue.shared-5670d8a7.js";import{_ as N}from"./_plugin-vue_export-helper-c4cb8a60.js";import{_ as $}from"./logo-70cefd96.js";import{v as L,w as V,T as B}from"./@vue.runtime-dom-c19fd55a.js";import{Y as E,Z as O,d as R}from"./@element-plus.icons-vue-32670eb7.js";import"./axios-966d6f38.js";import"./nprogress-6d1393d1.js";import"./vue-router-18ffceba.js";import"./pinia-dbeeb1e2.js";import"./vue-demi-5b9a0fa5.js";import"./@vueuse.core-d0bf94bd.js";import"./@vueuse.shared-3f1de09b.js";import"./vue-1d48ca3b.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./dayjs-dd470533.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./resize-detector-94afada7.js";import"./echarts-33de40b3.js";import"./tslib-ed971494.js";import"./zrender-d158d5d4.js";const T={class:"route-nav"},W={key:0,class:"title"},q=o({name:"route-nav"}),A=N(o({...q,setup(a){const{route:s}=t(),{app:o,menu:b}=e(),_=r((()=>l(b.group.map((function e(a){if("/"===s.path)return!1;if(a.path==s.path)return a;if(a.children){const s=a.children.map(e).find(Boolean);return!!s&&[a,s]}return!1})).filter(Boolean)))),h=r((()=>{var e;return null==(e=n(_.value))?void 0:e.name}));return(e,a)=>{const s=i("el-breadcrumb-item"),t=i("el-breadcrumb");return c(),u("div",T,[P(o).browser.isMini?(c(),u("p",W,F(P(h)),1)):(c(),p(t,{key:1},{default:d((()=>[(c(!0),u(m,null,f(P(_),((e,a)=>(c(),p(s,{key:a},{default:d((()=>{var a;return[v(F((null==(a=e.meta)?void 0:a.label)||e.name),1)]})),_:2},1024)))),128))])),_:1}))])}}}),[["__scopeId","data-v-18d8a683"]]),G={class:"a-menu"},J={class:"a-menu__name"},K=o({name:"a-menu"}),Y=N(o({...K,setup(a){const{router:s,route:l}=t(),{menu:n}=e(),o=z("");function r(e){n.setMenu(e);const a=n.getPath(n.group[e].children);s.push(a)}return b((function(){function e(a,s){switch(a.type){case 0:a.children.forEach((a=>{e(a,s)}));break;case 1:l.path.includes(a.path)&&(o.value=String(s),n.setMenu(s))}}n.group.forEach(((a,s)=>{e(a,s)}))})),(e,a)=>{const s=i("cl-svg"),t=i("el-menu-item"),l=i("el-menu");return c(),u("div",G,[_(l,{"default-active":o.value,mode:"horizontal","background-color":"transparent",onSelect:r},{default:d((()=>[(c(!0),u(m,null,f(P(n).group,((e,a)=>(c(),p(t,{key:a,index:`${a}`},{default:d((()=>[e.icon?(c(),p(s,{key:0,name:e.icon,size:18},null,8,["name"])):h("",!0),j("span",J,F(e.name),1)])),_:2},1032,["index"])))),128))])),_:1},8,["default-active"])])}}}),[["__scopeId","data-v-249ef8fc"]]),Z=e=>(k("data-v-00f9fd74"),e=e(),g(),e),D={class:"app-topbar"},H=[Z((()=>j("i",{class:"cl-iconfont cl-icon-fold"},null,-1)))],Q=Z((()=>j("div",{class:"flex1"},null,-1))),U={class:"app-topbar__tools"},X={key:0,class:"app-topbar__user"},ee={class:"el-dropdown-link"},ae={class:"name"},se=["src"],te=Z((()=>j("i",{class:"cl-iconfont cl-icon-user"},null,-1))),le=Z((()=>j("span",null,"个人中心",-1))),ne=Z((()=>j("i",{class:"cl-iconfont cl-icon-exit"},null,-1))),oe=Z((()=>j("span",null,"退出",-1))),re=o({name:"topbar"}),ie=N(o({...re,setup(a){const{router:s,service:l}=t(),{user:n,app:o}=e();async function r(e){switch(e){case"my":s.push("/my/info");break;case"exit":await l.base.comm.logout(),n.logout()}}return(e,a)=>{const s=i("cl-chat"),t=i("cl-theme"),l=i("el-dropdown-item"),f=i("el-dropdown-menu"),v=i("el-dropdown");return c(),u(m,null,[P(o).info.menu.isGroup?(c(),p(Y,{key:0})):h("",!0),j("div",D,[j("div",{class:S(["app-topbar__collapse",{unfold:!P(o).isFold}]),onClick:a[0]||(a[0]=e=>P(o).fold())},H,2),_(A),Q,j("ul",U,[j("li",null,[_(s)]),j("li",null,[_(t)])]),P(n).info?(c(),u("div",X,[_(v,{trigger:"click","hide-on-click":"",onCommand:r},{dropdown:d((()=>[_(f,null,{default:d((()=>[_(l,{command:"my"},{default:d((()=>[te,le])),_:1}),_(l,{command:"exit"},{default:d((()=>[ne,oe])),_:1})])),_:1})])),default:d((()=>[j("span",ee,[j("span",ae,F(P(n).info.nickName),1),j("img",{class:"avatar",src:P(n).info.headImg},null,8,se)])])),_:1})])):h("",!0)])],64)}}}),[["__scopeId","data-v-00f9fd74"]]);const ce={name:"b-menu",setup(){const{router:e,route:s}=t(),{menu:l,app:n}=a();return{route:s,toView:function(a){a!=s.path&&e.push(a),n.browser.isMini&&n.fold(!0)},menu:l}},render(e){const{app:s}=a();const t=function e(a,t){return a.filter((e=>e.isShow)).map((a=>{let l=null;return l=0==a.type?w(_(i("el-sub-menu"),null,null),{index:String(a.id),key:a.id,popperClass:"app-slider__menu"},{title:()=>_("div",{class:"wrap"},[_(i("cl-svg"),{name:a.icon},null),x(_("span",null,[a.name]),[[L,!s.isFold||1!=t]])]),default:()=>e(a.children||[],t+1)}):w(_(i("el-menu-item"),null,null),{index:a.path,key:a.id},{default:()=>_("div",{class:"wrap"},[_(i("cl-svg"),{name:a.icon},null),x(_("span",null,[a.name]),[[L,!s.isFold||1!=t]])])}),l}))}(e.menu.list,1);return _("div",{class:"app-slider__menu"},[_(i("el-menu"),{"default-active":e.route.path,"background-color":"transparent","collapse-transition":!0,collapse:!s.browser.isMini&&s.isFold,onSelect:e.toView},(l=t,"function"==typeof l||"[object Object]"===Object.prototype.toString.call(l)&&!y(l)?t:{default:()=>[t]}))]);var l}},ue={class:"app-slider"},pe=j("img",{src:$},null,-1),de={key:0},me={class:"app-slider__container"},fe=o({name:"undefined"}),ve=o({...fe,setup(a){const{app:s}=e();function t(){location.href=""}return(e,a)=>(c(),u("div",ue,[j("div",{class:"app-slider__logo",onClick:t},[pe,!P(s).isFold||P(s).browser.isMini?(c(),u("span",de,F(P(s).info.name),1)):h("",!0)]),j("div",me,[_(P(ce))])]))}}),be=e=>(k("data-v-cb087c02"),e=e(),g(),e),_e={class:"app-process"},he=be((()=>j("span",null,"首页",-1))),je=be((()=>j("span",null,"后退",-1))),ke=["data-index","onClick","onContextmenu"],ge=o({name:"undefined"}),ye=N(o({...ge,setup(a){const{refs:l,setRefs:o,route:r,router:p}=t(),{process:v}=e();function b(){if(!v.list.find((e=>e.active))){const e=n(v.list);p.push(e?e.fullPath:"/")}}function h(e){const a=l.value[`item-${e}`];var s;a&&(s=a.offsetLeft+a.clientWidth-l.value.scroller.clientWidth,l.value.scroller.scrollTo({left:s,behavior:"smooth"}))}function k(e){v.remove(e),b()}return C((()=>r.path),(function(e){h(v.list.findIndex((a=>a.fullPath===e))||0)})),(e,a)=>{const t=i("el-icon"),l=i("el-scrollbar");return c(),u("div",_e,[j("div",{class:"app-process__icon",onClick:a[0]||(a[0]=e=>P(p).push("/"))},[_(t,{size:"15"},{default:d((()=>[_(P(E))])),_:1}),he]),j("div",{class:"app-process__icon",onClick:a[1]||(a[1]=(...e)=>P(p).back&&P(p).back(...e))},[_(t,{size:15},{default:d((()=>[_(P(O))])),_:1}),je]),_(l,{ref:P(o)("scroller"),class:"app-process__scroller"},{default:d((()=>[(c(!0),u(m,null,f(P(v).list,((e,a)=>{var l;return c(),u("div",{key:a,ref_for:!0,ref:P(o)(`item-${a}`),class:S(["app-process__item",{active:e.active}]),"data-index":a,onClick:s=>function(e,a){h(a),p.push(e.fullPath)}(e,Number(a)),onContextmenu:V((a=>function(e,a){s.exports.ContextMenu.open(e,{list:[{label:"关闭当前",hidden:a.fullPath!==r.path,callback(e){k(v.list.findIndex((e=>e.fullPath==a.fullPath))),e(),b()}},{label:"关闭其他",callback(e){v.set(v.list.filter((e=>e.fullPath==a.fullPath))),e(),b()}},{label:"关闭所有",callback(e){v.clear(),e(),b()}}]})}(a,e)),["stop","prevent"])},[j("span",null,F((null==(l=e.meta)?void 0:l.label)||e.name||e.path),1),_(t,{onMousedown:V((e=>k(Number(a))),["stop"])},{default:d((()=>[_(P(R))])),_:2},1032,["onMousedown"])],42,ke)})),128))])),_:1},512)])}}}),[["__scopeId","data-v-cb087c02"]]),we={class:"app-views"},xe=o({name:"undefined"}),Ce=N(o({...xe,setup(a){const{process:s,app:t}=e(),l=r((()=>s.list.filter((e=>{var a;return null==(a=e.meta)?void 0:a.keepAlive})).map((e=>e.path.substring(1,e.path.length).replace(/\//g,"-")))));return(e,a)=>{const s=i("el-scrollbar"),n=i("router-view");return c(),u("div",we,[_(n,null,{default:d((({Component:e})=>[_(s,null,{default:d((()=>[_(B,{name:P(t).info.router.transition},{default:d((()=>[(c(),p(M,{include:P(l)},[(c(),p(I(e)))],1032,["include"]))])),_:2},1032,["name"])])),_:2},1024)])),_:1})])}}}),[["__scopeId","data-v-ee2133bb"]]),Ie={class:"app-layout__left"},Me={class:"app-layout__right"},Pe=o({name:"undefined"}),ze=N(o({...Pe,setup(a){const{app:s}=e();return(e,a)=>(c(),u("div",{class:S(["app-layout",{collapse:P(s).isFold}])},[j("div",{class:"app-layout__mask",onClick:a[0]||(a[0]=e=>P(s).fold(!0))}),j("div",Ie,[_(ve)]),j("div",Me,[_(ie),_(ye),_(Ce)])],2))}}),[["__scopeId","data-v-160c543f"]]);export{ze as default};
