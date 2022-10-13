import{w as e,v as a}from"./@vue.runtime-dom-c19fd55a.js";import{d as s}from"./vuedraggable-ae969e0b.js";import{i as l,e as t}from"./index-841f2aa9.js";import"./vue-echarts-85a407f1.js";import{a as n,b as o}from"./element-plus-04192b69.js";import"./store-96e17a43.js";import{u as i}from"./index-2900e021.js";import{Q as r,d as p,T as c,U as d,V as u,W as m,X as f,B as g}from"./@element-plus.icons-vue-32670eb7.js";import{d as b,q as v,e as k,R as y,Y as h,o as j,c as _,b as x,J as C,a as z,F as w,V,K as T,N as D,M as F,al as Y,ak as q,G as M,I as U}from"./@vue.runtime-core-4f5b9f62.js";import{h as A,u as N}from"./@vue.reactivity-bec702f3.js";import{L as O,o as R}from"./@vue.shared-5670d8a7.js";import{_ as $}from"./_plugin-vue_export-helper-c4cb8a60.js";import"./sortablejs-d20ad036.js";import"./axios-966d6f38.js";import"./vue-1d48ca3b.js";import"./nprogress-6d1393d1.js";import"./lodash-es-a085e596.js";import"./vue-router-18ffceba.js";import"./pinia-dbeeb1e2.js";import"./vue-demi-5b9a0fa5.js";import"./@vueuse.core-d0bf94bd.js";import"./@vueuse.shared-3f1de09b.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./dayjs-dd470533.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./resize-detector-94afada7.js";import"./echarts-33de40b3.js";import"./tslib-ed971494.js";import"./zrender-d158d5d4.js";const E=e=>(Y("data-v-81764ed5"),e=e(),q(),e),G={class:"view-task"},H={class:"box"},I={class:"header"},W={class:"label"},B={class:"num"},J=E((()=>z("span",{class:"flex1"},null,-1))),K={class:"op-btn"},L=E((()=>z("span",null,"刷新",-1))),Q=["onClick"],S=E((()=>z("span",null,"添加",-1))),X=["data-id","onContextmenu"],P={class:"h"},Z={class:"name"},ee={class:"remark"},ae={class:"f"},se={class:"date"},le=E((()=>z("span",{class:"start"},"进行中",-1))),te=E((()=>z("span",null,"...",-1))),ne=E((()=>z("span",{class:"stop"},"已停止",-1))),oe={class:"op"},ie=["onClick"],re=E((()=>z("span",null,"开始",-1))),pe=["onClick"],ce=E((()=>z("span",null,"暂停",-1))),de=["onClick"],ue=E((()=>z("span",null,"编辑",-1))),me=["onClick"],fe=E((()=>z("span",null,"查看日志",-1))),ge={key:0,class:"empty"},be={class:"footer"},ve=["onClick"],ke={class:"block _log"},ye={class:"header"},he=E((()=>z("span",{class:"label"},"日志",-1))),je={class:"num"},_e=E((()=>z("span",{class:"flex1"},null,-1))),xe={class:"op-btn"},Ce=E((()=>z("span",null,"刷新",-1))),ze={class:"container","element-loading-text":"拼命加载中"},we=["infinite-scroll-disabled"],Ve=["onClick"],Te={class:"h"},De={class:"name"},Fe={class:"f"},Ye={key:0,class:"empty"},qe=b({name:"task"}),Me=$(b({...qe,setup(b){const{refs:Y,setRefs:q,service:$}=i(),E=A([{key:"sys",label:"系统任务",icon:"el-icon-s-tools",list:[],loading:!1,params:{type:0,status:1},pagination:{size:10,page:1,total:0}},{key:"user",label:"用户自定义任务",icon:"el-icon-user-solid",list:[],loading:!1,params:{type:1,status:1},pagination:{size:10,page:1,total:0}},{key:"stop",label:"已停止任务",list:[],loading:!1,params:{type:null,status:0},pagination:{size:10,page:1,total:0}}]),qe=A({loading:!1,list:[],pagination:{size:10,page:1},params:{},filters:{status:[]},current:null}),Me=A({options:{group:"Task",animation:300,ghostClass:"Ghost",dragClass:"Drag",draggable:"._drag"}}),Ue=v((()=>$.task.info.permission));function Ae(e,{list:a,pagination:s}){if(!e)return;const{page:l,size:t}=e.pagination,n=e.list.length,o=a.length;if(1==l)a.splice(0,o,...e.list);else{const s=o-o%t,l=s+n;a.splice(s,l,...e.list)}return n==t&&(e.pagination.page+=1),Object.assign(s,e.pagination),1!=l}function Ne(e,a){const{index:s,more:l}=a||{};(null==s?E.map(((e,a)=>a)):[s]).forEach((async a=>{const s=E[a];Object.assign(s.params,{...s.pagination,...e}),s.loading=!0;Ae(await $.task.info.page(s.params),s),l||Y.value[`${s.key}-scroller`].scroll({top:0,behavior:"smooth"}),s.loading=!1}))}const Oe=l.exports.useForm();async function Re(e){var a;const{id:s,type:l}=e||{};let t={type:l,service:"",name:"",cron:""};s&&(t=await $.task.info.info({id:s})),t.every&&(t.every/=1e3),t.limit||(t.limit=void 0),null==(a=Oe.value)||a.open({title:"编辑任务",width:"600px",props:{labelWidth:"80px"},items:[{label:"名称",prop:"name",component:{name:"el-input",props:{placeholder:"请输入名称"}},rules:{required:!0,message:"名称不能为空"}},{label:"类型",prop:"taskType",value:0,component:{name:"el-select",options:[{label:"cron",value:0},{label:"时间间隔",value:1}],props:{onChange(e){var a,s;0==e?null==(a=Oe.value)||a.setForm("every",void 0):null==(s=Oe.value)||s.setForm("cron",void 0)}}}},{label:"cron",prop:"cron",hidden:({scope:e})=>1==e.taskType,component:{name:"el-input",props:{placeholder:"* * * * * *"}},rules:{required:!0,message:"cron不能为空"}},{label:"间隔(秒)",prop:"every",hidden:({scope:e})=>0==e.taskType,component:{name:"el-input-number",props:{min:1,max:1e8}},rules:{required:!0,message:"执行间隔不能为空"}},{label:"service",prop:"service",component:{name:"el-input",props:{placeholder:"taskDemoService.test([1, 2])"}}},{label:"开始时间",prop:"startDate",hidden:({scope:e})=>1==e.taskType,component:{name:"el-date-picker",props:{type:"datetime","value-format":"YYYY-MM-DD HH:mm:ss"}}},{label:"备注",prop:"remark",component:{name:"el-input",props:{type:"textarea"}}},{label:"状态",prop:"status",value:0,component:{name:"el-radio-group",options:[{label:"停止",value:0},{label:"运行",value:1}]}}],form:{...t},on:{submit:(e,{close:a,done:l})=>{e.limit||(e.limit=null),$.task.info[s?"update":"add"]({...t,...e,every:1e3*e.every}).then((()=>{Ne(),n.success("保存成功"),a()})).catch((e=>{n.error(e.message),l()}))}}})}function $e({id:e,type:a}){$.task.info.start({id:e,type:a}).then((()=>{Ne()})).catch((e=>{n.error(e.message)}))}function Ee({id:e}){$.task.info.stop({id:e}).then((()=>{Ne()})).catch((e=>{n.error(e.message)}))}function Ge({to:e,item:a}){const s=e.getAttribute("data-status"),l=e.getAttribute("data-type"),t=a.getAttribute("data-id");0==s&&Ee({id:t}),1==s&&$e({id:t,type:l})}async function He(e,a){if(qe.loading)return!1;if(!t(Ue.value.log))return!1;const{params:s,pagination:l}=qe,{more:n}=a||{};Object.assign(s,{...l,...e}),qe.loading=!0;Ae(await $.task.info.log(s),qe),n||Y.value["log-scroller"].scroll({top:0,behavior:"smooth"}),qe.loading=!1}function Ie(){He(null,{more:!0})}function We(e){qe.current=e,He({page:1,id:e.id})}function Be(){qe.current=null,He({page:1,id:null})}function Je([e]){He({page:1,status:void 0===e?1:0})}function Ke(e,{id:a,status:s,type:i,name:r}){const p=[{label:"立即执行",perm:["once"],callback(e){!function({id:e}){$.task.info.once({id:e}).then((()=>{Ne()})).catch((e=>{n.error(e.message)}))}({id:a}),e()}},{label:"编辑",perm:["update","info"],callback(e){Re({id:a,type:i}),e()}},{label:"删除",perm:["delete"],callback(e){!function({id:e}){o.confirm("此操作将永久删除该任务，是否继续？","提示",{type:"warning"}).then((()=>{$.task.info.delete({ids:[e]}).then((()=>{Ne()}))})).catch((()=>null))}({id:a}),e()}},{label:"查看日志",perm:["log"],callback(e){We({id:a,name:r}),e()}}];return 1==s?p.splice(1,0,{label:"暂停",perm:["stop"],callback(e){Ee({id:a,type:i}),e()}}):p.splice(1,0,{label:"开始",perm:["start"],callback(e){$e({id:a,type:i}),e()}}),l.exports.ContextMenu.open(e,{list:p.filter((e=>t({and:e.perm.map((e=>Ue.value[e]))})))}),!1}return k((()=>{Ne({page:1})})),(l,t)=>{const n=y("el-icon"),o=y("el-button"),i=y("el-checkbox"),b=y("el-checkbox-group"),v=y("el-scrollbar"),k=y("cl-form"),Y=h("permission"),A=h("infinite-scroll"),$=h("loading");return j(),_("div",G,[x(v,null,{default:C((()=>[z("div",H,[(j(!0),_(w,null,V(E,((l,i)=>(j(),_("div",{key:i,class:R(["block",[`_${l.key}`]])},[z("div",I,[z("i",{class:R(["icon",l.icon])},null,2),z("span",W,O(l.label),1),z("span",B,"("+O(l.pagination.total)+")",1),J,z("ul",K,[T((j(),_("li",{class:"refresh-btn",onClick:t[0]||(t[0]=e=>Ne({page:1}))},[x(n,null,{default:C((()=>[x(N(r))])),_:1}),L])),[[Y,N(Ue).delete]]),T((j(),_("li",{class:"add-btn",onClick:e=>Re(l.params)},[x(n,null,{default:C((()=>[x(N(c))])),_:1}),S],8,Q)),[[Y,N(Ue).add]])])]),z("div",{ref_for:!0,ref:N(q)(`${l.key}-scroller`),class:"container scroller1"},[x(N(s),M({modelValue:E[i].list,"onUpdate:modelValue":e=>E[i].list=e},Me.options,{tag:"ul","item-key":"id","data-type":l.params.type,"data-status":l.params.status,onEnd:Ge}),{item:C((({element:s})=>[(j(),_("li",{key:s.id,"data-id":s.id,class:"_drag",onContextmenu:e((e=>Ke(e,s)),["stop","prevent"])},[z("div",P,[T(z("span",{class:"type _warning"},O(0===s.type?"系统":"用户"),513),[[a,0===s.status]]),z("span",Z,O(s.name),1)]),z("div",ee,O(s.remark),1),z("div",ae,[s.status?(j(),_(w,{key:0},[z("span",se,O(s.nextRunTime||"..."),1),le],64)):(j(),_(w,{key:1},[te,ne],64))]),z("div",oe,[0===s.status?(j(),_("div",{key:0,class:"op-item",onClick:e=>$e(s)},[x(n,null,{default:C((()=>[x(N(d))])),_:1}),re],8,ie)):T((j(),_("div",{key:1,class:"op-item",onClick:e=>Ee(s)},[x(n,null,{default:C((()=>[x(N(u))])),_:1}),ce],8,pe)),[[Y,N(Ue).stop]]),T((j(),_("div",{class:"op-item",onClick:e=>Re(s)},[x(n,null,{default:C((()=>[x(N(m))])),_:1}),ue],8,de)),[[Y,{and:[N(Ue).update,N(Ue).info]}]]),T((j(),_("div",{class:"op-item",onClick:e=>We(s)},[x(n,null,{default:C((()=>[x(N(f))])),_:1}),fe],8,me)),[[Y,N(Ue).log]])])],40,X))])),header:C((()=>[0==E[i].list.length?(j(),_("div",ge," 暂无数据 ")):F("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","data-type","data-status"]),l.pagination.total>=l.pagination.size?(j(),U(o,{key:0,class:"more",text:"",onClick:e=>function(e){Ne(null,{index:e,more:!0})}(i)},{default:C((()=>[D("查看更多")])),_:2},1032,["onClick"])):F("",!0)],512),z("div",be,[T((j(),_("button",{class:"btn-add",onClick:e=>Re(l.params)},[x(n,null,{default:C((()=>[x(N(g))])),_:1})],8,ve)),[[Y,N(Ue).add]])])],2)))),128)),T((j(),_("div",ke,[z("div",ye,[he,z("span",je,"("+O(qe.pagination.total)+")",1),_e,x(b,{modelValue:qe.filters.status,"onUpdate:modelValue":t[1]||(t[1]=e=>qe.filters.status=e),class:"status",onChange:Je},{default:C((()=>[x(i,{label:0},{default:C((()=>[D("异常")])),_:1})])),_:1},8,["modelValue"]),z("ul",xe,[z("li",{onClick:t[2]||(t[2]=e=>He({page:1}))},[x(n,null,{default:C((()=>[x(N(r))])),_:1}),Ce]),qe.current?(j(),_("li",{key:0,class:"_current-log",onClick:Be},[z("span",null,O(qe.current.name),1),x(n,null,{default:C((()=>[x(N(p))])),_:1})])):F("",!0)])]),T((j(),_("div",ze,[T((j(),_("ul",{ref:N(q)("log-scroller"),class:"scroller1","infinite-scroll-disabled":qe.list.length==qe.pagination.total},[(j(!0),_(w,null,V(qe.list,((e,a)=>(j(),_("li",{key:a,class:R({_error:0==e.status}),onClick:a=>{var s;(s=e)._expand=!s._expand}},[z("div",Te,[z("span",De,O(Number(a)+1)+" · "+O(e.taskName),1)]),z("div",{class:R(["remark",{_ellipsis:!e._expand}])},O(e.detail||"..."),3),z("div",Fe,[z("span",null,"执行时间："+O(e.createTime),1)])],10,Ve)))),128)),0==qe.list.length?(j(),_("div",Ye,"暂无数据")):F("",!0)],8,we)),[[A,Ie]])])),[[$,qe.loading]])])),[[Y,N(Ue).log]])])])),_:1}),x(k,{ref_key:"Form",ref:Oe},null,512)])}}}),[["__scopeId","data-v-81764ed5"]]);export{Me as default};