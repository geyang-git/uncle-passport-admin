import{i as e}from"./index-e0fdaf07.js";import"./vue-echarts-85a407f1.js";import"./element-plus-04192b69.js";import"./store-96e17a43.js";import{u as r}from"./index-69fc4246.js";import{d as t,R as o,o as s,I as p,J as l,b as i}from"./@vue.runtime-core-4f5b9f62.js";import"./@vue.runtime-dom-c19fd55a.js";import"./@vue.shared-5670d8a7.js";import"./@vue.reactivity-bec702f3.js";import"./axios-966d6f38.js";import"./nprogress-6d1393d1.js";import"./lodash-es-a085e596.js";import"./vue-router-18ffceba.js";import"./pinia-dbeeb1e2.js";import"./vue-demi-5b9a0fa5.js";import"./@vueuse.core-d0bf94bd.js";import"./@vueuse.shared-3f1de09b.js";import"./vue-1d48ca3b.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@element-plus.icons-vue-32670eb7.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./dayjs-dd470533.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./resize-detector-94afada7.js";import"./echarts-33de40b3.js";import"./tslib-ed971494.js";import"./zrender-d158d5d4.js";const a=t({name:"log-log"}),m=t({...a,setup(t){const{service:a}=r(),m=e.exports.useUpsert({items:[{label:"IP",prop:"ip",required:!0,component:{name:"el-input"}},{label:"url",prop:"url",component:{name:"cl-upload",props:{listType:"text",limit:1}}},{label:"headers",prop:"headers",component:{name:"el-input"}}]}),d=e.exports.useTable({columns:[{type:"selection"},{label:"ID",prop:"id"},{label:"IP",prop:"ip"},{label:"url",prop:"url"},{label:"访问时间",prop:"createTime"},{type:"op",buttons:["delete"]}]}),u=e.exports.useCrud({service:a.log.log},(e=>{e.refresh()}));return(e,r)=>{const t=o("cl-refresh-btn"),a=o("cl-multi-delete-btn"),c=o("cl-flex1"),n=o("cl-search-key"),f=o("el-row"),j=o("cl-table"),b=o("cl-pagination"),v=o("cl-upsert"),h=o("cl-crud");return s(),p(h,{ref_key:"Crud",ref:u},{default:l((()=>[i(f,null,{default:l((()=>[i(t),i(a),i(c),i(n)])),_:1}),i(f,null,{default:l((()=>[i(j,{ref_key:"Table",ref:d},null,512)])),_:1}),i(f,null,{default:l((()=>[i(c),i(b)])),_:1}),i(v,{ref_key:"Upsert",ref:m},null,512)])),_:1},512)}}});export{m as default};
