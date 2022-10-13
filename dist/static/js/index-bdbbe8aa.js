import{d as e}from"./dayjs-dd470533.js";import{s as a,u as s,i as l,m as t}from"./index-841f2aa9.js";import"./vue-echarts-85a407f1.js";import"./element-plus-04192b69.js";import"./store-96e17a43.js";import{u as i}from"./index-2900e021.js";import{_ as n,$ as o,Q as c,a0 as u,a1 as r,m as d}from"./@element-plus.icons-vue-32670eb7.js";import{y as m,d as v,q as p,R as f,Y as h,K as g,o as b,c as j,a as _,F as y,b as x,M as k,V as w,J as z,N as C,al as M,ak as T,I as V,p as I,n as N,z as U}from"./@vue.runtime-core-4f5b9f62.js";import{d as q}from"./pinia-dbeeb1e2.js";import{e as Y,u as B}from"./@vue.reactivity-bec702f3.js";import{h as R}from"./@vueuse.core-d0bf94bd.js";import{L as S,o as D}from"./@vue.shared-5670d8a7.js";import{_ as H}from"./_plugin-vue_export-helper-c4cb8a60.js";import{d as J}from"./lodash-es-a085e596.js";import"./axios-966d6f38.js";import"./@vue.runtime-dom-c19fd55a.js";import"./nprogress-6d1393d1.js";import"./vue-router-18ffceba.js";import"./vue-1d48ca3b.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@vueuse.shared-3f1de09b.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./resize-detector-94afada7.js";import"./echarts-33de40b3.js";import"./tslib-ed971494.js";import"./zrender-d158d5d4.js";import"./vue-demi-5b9a0fa5.js";function F(){return{chat:m("chat")}}const K=q("chat-message",(()=>{const e=Y(!1),s=Y([]),l=Y({page:1,total:0,size:20});return{loading:e,list:s,pagination:l,get:async function(t){e.value=!0,1==(null==t?void 0:t.page)&&(s.value=[]),await a.chat.message.page(t).then((e=>{s.value=e.list.map((e=>(e.content=JSON.parse(e.content),e))),l.value=e.pagination})),e.value=!1}}})),L=q("chat-session",(()=>{const e=Y(!1),s=Y([]),l=Y();function t(e){l.value=e}return{loading:e,list:s,value:l,get:async function(i){e.value=!0,await a.chat.session.page(i).then((e=>{l.value||t(e.list[0]),s.value=e.list})),e.value=!1},set:t}}));function O(){return{session:L(),message:K()}}const Q={class:"chat-message","element-loading-text":"消息列表加载中"},$={class:"head"},A={class:"avatar"},E={class:"name"},G={class:"list scroller1"},P={class:"avatar"},W=["onContextmenu"],X={class:"h"},Z={class:"name"},ee={class:"content"},ae={key:0,class:"is-text"},se={key:1,class:"is-image"},le={class:"footer"},te={class:"tools"},ie=(e=>(M("data-v-df3101f1"),e=e(),T(),e))((()=>_("picture",null,null,-1))),ne={class:"input"},oe=v({name:"undefined"}),ce=H(v({...oe,setup(e){const{user:a}=s(),{chat:t}=F(),{message:i,session:c}=O(),{copy:u}=R(),r=Y(""),d=p((()=>{let e=0;return i.list.map((s=>{var l;return 1==s.contentType&&(s._index=e++),s.isMy=s.fromId==(null==(l=a.info)?void 0:l.id),s}))})),m=p((()=>i.list.filter((e=>1==e.contentType)).map((e=>{var a;return null==(a=e.content)?void 0:a.imageUrl})).filter(Boolean)));function v(){null==t||t.send({contentType:0,content:{text:r.value}},!0),r.value=""}function M(e){null==t||t.send({contentType:1,content:{imageUrl:e.url}},!0),r.value=""}return(e,a)=>{var s,t,p,T;const V=f("el-avatar"),I=f("el-image"),N=f("el-icon"),U=f("cl-upload"),q=f("el-input"),Y=f("el-button"),R=h("loading");return g((b(),j("div",Q,[_("div",$,[(null==(s=B(c))?void 0:s.value)?(b(),j(y,{key:0},[_("div",A,[x(V,{size:30,shape:"square",src:null==(t=B(c))?void 0:t.value.avatar},null,8,["src"])]),_("span",E,"与“"+S(null==(p=B(c))?void 0:p.value.nickName)+"”聊天中",1)],64)):k("",!0)]),_("div",G,[_("ul",null,[(b(!0),j(y,null,w(B(d),((e,a)=>(b(),j("li",{key:a},[_("div",{class:D(["item",{"is-right":e.isMy}])},[_("div",P,[x(V,{size:36,shape:"square",src:e.avatar},null,8,["src"])]),_("div",{class:"det",onContextmenu:a=>{!function(e,a){l.exports.ContextMenu.open(e,{hover:{target:"content"},list:[{label:"复制",callback(e){u(a.content.text||""),e()}},{label:"转发"},{label:"删除"}]})}(a,e)}},[_("div",X,[_("span",Z,S(e.nickName),1)]),_("div",ee,[0==e.contentType?(b(),j("div",ae,[_("span",null,S(e.content.text),1)])):1==e.contentType?(b(),j("div",se,[x(I,{src:e.content.imageUrl,"preview-src-list":B(m),"initial-index":e._index,"scroll-container":".chat-message .list"},null,8,["src","preview-src-list","initial-index"])])):k("",!0)])],40,W)],2)])))),128))])]),_("div",le,[_("div",te,[_("ul",null,[x(U,{onSuccess:M,"show-file-list":!1},{default:z((()=>[_("li",null,[x(N,null,{default:z((()=>[ie])),_:1})])])),_:1}),_("li",null,[x(N,null,{default:z((()=>[x(B(n))])),_:1})]),_("li",null,[x(N,null,{default:z((()=>[x(B(o))])),_:1})])])]),_("div",ne,[x(q,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),type:"textarea",rows:4,resize:"none",autosize:{minRows:4,maxRows:10},placeholder:"输入内容"},null,8,["modelValue"]),x(Y,{size:"small",type:"success",onClick:v,disabled:!r.value},{default:z((()=>[C("发送")])),_:1},8,["disabled"])])])])),[[R,null==(T=B(i))?void 0:T.loading]])}}}),[["__scopeId","data-v-df3101f1"]]),ue={class:"chat-session"},re={class:"head"},de={class:"tools"},me={class:"list"},ve=["onClick"],pe={class:"avatar"},fe={class:"det"},he={class:"name"},ge={class:"message"},be={class:"status"},je={class:"date"},_e=v({name:"undefined"}),ye=H(v({..._e,setup(e){const{chat:a}=F(),{session:s,message:l}=O(),t=Y(""),i=p((()=>(null==s?void 0:s.list.filter((e=>{var a;return null==(a=e.nickName)?void 0:a.includes(t.value)})))||[]));return(e,n)=>{var o;const u=f("el-input"),r=f("el-icon"),d=f("el-avatar"),m=f("el-badge"),v=f("el-empty"),p=f("el-scrollbar"),C=h("loading");return b(),j("div",ue,[_("div",re,[x(u,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:"关键字搜索",clearable:""},null,8,["modelValue"]),_("ul",de,[_("li",{onClick:n[1]||(n[1]=e=>B(s).get())},[x(r,{size:16},{default:z((()=>[x(B(c))])),_:1})])])]),g((b(),j("div",me,[x(p,{class:"scroller"},{default:z((()=>[(b(!0),j(y,null,w(B(i),((e,t)=>{var i,n;return b(),j("div",{class:D(["item",{"is-active":e.id==(null==(n=null==(i=B(s))?void 0:i.value)?void 0:n.id)}]),key:t,onClick:t=>async function(e){s.set(e),await l.get({page:1}),null==a||a.scrollToBottom()}(e)},[_("div",pe,[x(m,{value:e.num,hidden:0==e.num},{default:z((()=>[x(d,{shape:"square",src:e.avatar},null,8,["src"])])),_:2},1032,["value","hidden"])]),_("div",fe,[_("p",he,S(e.nickName),1),_("p",ge,S(e.text),1)]),_("div",be,[_("p",je,S(e.createTime),1)])],10,ve)})),128)),0==B(i).length?(b(),V(v,{key:0,"image-size":100,description:"暂无会话"})):k("",!0)])),_:1})])),[[C,null==(o=B(s))?void 0:o.loading]])])}}}),[["__scopeId","data-v-629e068d"]]),xe={class:"cl-chat__wrap"},ke={class:"cl-chat__session"},we={class:"cl-chat__right"},ze={class:"cl-dialog__controls-icon"},Ce=v({name:"cl-chat"}),Me=v({...Ce,setup(a,{expose:l}){i();const{session:n,message:o}=O(),{app:c,user:m}=s();t.get("chat");const v=Y(!1),p=Y(!0),h=Y(parseInt(100*Math.random()));function g(){!async function(){await n.get(),await o.get(),k()}()}function y(){v.value=!0,g()}const k=J((()=>{N((()=>{const e=document.querySelector(".cl-chat .chat-message .list");null==e||e.scroll({top:1e5+Math.random(),behavior:"smooth"})}))}),300);return U("chat",{get socket(){},send:function(a,s){s&&function(a){var s,l,t,i;o.list.push({fromId:null==(s=m.info)?void 0:s.id,toId:null==(l=n.value)?void 0:l.userId,avatar:null==(t=m.info)?void 0:t.headImg,nickName:null==(i=m.info)?void 0:i.nickName,createTime:e().format("YYYY-MM-DD HH:mm:ss"),...a}),k()}(a)},scrollToBottom:k}),I((()=>c.browser.isMini),(e=>{p.value=!e}),{immediate:!0}),l({open:y,close:function(){v.value=!1}}),(e,a)=>{const s=f("el-icon"),l=f("el-badge"),t=f("cl-dialog");return b(),j("div",xe,[_("div",{class:"cl-chat__icon",onClick:y},[x(l,{value:h.value},{default:z((()=>[x(s,{size:15},{default:z((()=>[x(B(u))])),_:1})])),_:1},8,["value"])]),x(t,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=e=>v.value=e),title:"聊天窗口",height:"630px",width:"1200px","keep-alive":"",draggable:!1,"custom-class":"cl-chat__dialog","close-on-click-modal":!1,"close-on-press-escape":"","append-to-body":"",controls:["slot-expand","cl-flex1","fullscreen","close"]},{"slot-expand":z((()=>[_("button",ze,[p.value?(b(),V(s,{key:1,onClick:a[1]||(a[1]=e=>p.value=!1)},{default:z((()=>[x(B(d))])),_:1})):(b(),V(s,{key:0,onClick:a[0]||(a[0]=e=>p.value=!0)},{default:z((()=>[x(B(r))])),_:1}))])])),default:z((()=>[_("div",{class:D(["cl-chat",{"is-mini":B(c).browser.isMini,"is-expand":p.value}])},[_("div",ke,[x(ye)]),_("div",we,[x(ce)])],2)])),_:1},8,["modelValue"])])}}});export{Me as default};