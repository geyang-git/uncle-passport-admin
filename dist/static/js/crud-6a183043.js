import{i as e,f as t}from"./index-841f2aa9.js";import{d as r,R as l,o,c as s,b as a,J as p,N as n,F as u,I as i}from"./@vue.runtime-core-4f5b9f62.js";import{u as c}from"./@vue.reactivity-bec702f3.js";import"./@vue.runtime-dom-c19fd55a.js";import"./@vue.shared-5670d8a7.js";import"./element-plus-04192b69.js";import"./axios-966d6f38.js";import"./lodash-es-a085e596.js";import"./@vueuse.core-d0bf94bd.js";import"./@vueuse.shared-3f1de09b.js";import"./@element-plus.icons-vue-32670eb7.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./dayjs-dd470533.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./store-96e17a43.js";import"./nprogress-6d1393d1.js";import"./vue-echarts-85a407f1.js";import"./resize-detector-94afada7.js";import"./echarts-33de40b3.js";import"./tslib-ed971494.js";import"./zrender-d158d5d4.js";import"./vue-router-18ffceba.js";import"./pinia-dbeeb1e2.js";import"./vue-demi-5b9a0fa5.js";import"./vue-1d48ca3b.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";const m=r({name:"菜单名称"}),d=r({...m,setup(t){const r=e.exports.useUpsert({items:[{label:"姓名",prop:"name",component:{name:"el-input"}},{label:"创建时间",prop:"createTime",component:{name:"el-date-picker"}}]}),i=e.exports.useTable({autoHeight:!1,columns:[{type:"selection"},{label:"姓名",prop:"name"},{label:"创建时间",prop:"createTime"},{type:"op"}]}),c=e.exports.useCrud({service:"test"},(e=>{e.refresh()})),m=e.exports.useForm();function d(){var e;null==(e=m.value)||e.open({title:"内嵌crud",items:[{label:"",props:{labelWidth:"0"},component:{name:"slot-crud"}}]})}return(e,t)=>{const b=l("el-button"),f=l("cl-refresh-btn"),j=l("cl-add-btn"),v=l("cl-multi-delete-btn"),y=l("cl-flex1"),h=l("cl-search-key"),_=l("el-row"),x=l("cl-table"),g=l("cl-pagination"),k=l("cl-upsert"),T=l("cl-crud"),C=l("cl-form");return o(),s(u,null,[a(b,{onClick:d},{default:p((()=>[n("自定义表单")])),_:1}),a(C,{ref_key:"Form",ref:m},{"slot-crud":p((()=>[a(T,{ref_key:"Crud",ref:c},{default:p((()=>[a(_,null,{default:p((()=>[a(f),a(j),a(v),a(y),a(h)])),_:1}),a(_,null,{default:p((()=>[a(x,{ref_key:"Table",ref:i},null,512)])),_:1}),a(_,null,{default:p((()=>[a(y),a(g)])),_:1}),a(k,{ref_key:"Upsert",ref:r},null,512)])),_:1},512)])),_:1},512)],64)}}}),b=r({name:"crud"}),f=r({...b,setup(r){const{dict:s}=t(),n=e.exports.useCrud({service:"test",async onRefresh(e,{next:t}){}},(e=>{e.refresh()})),u=e.exports.useUpsert({items:[{label:"姓名",prop:"name",required:!0,component:{name:"el-input"}},{type:"tabs",props:{labels:[{label:"基础",value:"base"},{label:"其他",value:"other"}]}},{label:"认证类型",prop:"authType",group:"base",component:{name:"el-select",options:s.get("type")}},{label:"年龄",group:"other",prop:"age",component:{name:"el-input-number"}}],onInfo(e,{next:t}){t(e)},onSubmit(e,{next:t}){t(e)},onOpen(e){},onClose(e){e()}}),m=e.exports.useTable({columns:[{type:"selection"},{label:"姓名",prop:"name"},{label:"存款",prop:"price",formatter:e=>`¥${e.price}`},{label:"状态",prop:"status",dict:[{label:"开启",value:1},{label:"关闭",type:"danger",value:0}]},{label:"创建时间",prop:"createTime",sortable:"desc"},{type:"op",width:250,buttons:["info","edit","delete"]}]});return(e,t)=>{const r=l("cl-refresh-btn"),b=l("cl-add-btn"),f=l("cl-select"),j=l("cl-filter"),v=l("cl-flex1"),y=l("cl-column-custom"),h=l("cl-search-key"),_=l("el-row"),x=l("cl-table"),g=l("cl-pagination"),k=l("cl-upsert"),T=l("cl-crud");return o(),i(T,{ref_key:"Crud",ref:n},{default:p((()=>[a(_,null,{default:p((()=>{var e;return[a(r),a(b),a(d),a(j,{label:"字典筛选"},{default:p((()=>[a(f,{options:c(s).get("brand"),prop:"brand"},null,8,["options"])])),_:1}),a(v),a(y,{columns:null==(e=c(m))?void 0:e.columns},null,8,["columns"]),a(h)]})),_:1}),a(_,null,{default:p((()=>[a(x,{ref_key:"Table",ref:m},null,512)])),_:1}),a(_,null,{default:p((()=>[a(v),a(g)])),_:1}),a(k,{ref_key:"Upsert",ref:u},null,512)])),_:1},512)}}});export{f as default};