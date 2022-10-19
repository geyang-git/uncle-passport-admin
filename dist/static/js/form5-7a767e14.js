import{i as e}from"./index-8d0a0995.js";import"./vue-echarts-85a407f1.js";import"./element-plus-04192b69.js";import"./store-96e17a43.js";import{u as o}from"./index-14ae6f75.js";import{d as r,R as l,o as p,I as a,J as t,b as s}from"./@vue.runtime-core-4f5b9f62.js";import"./@vue.runtime-dom-c19fd55a.js";import"./@vue.shared-5670d8a7.js";import"./@vue.reactivity-bec702f3.js";import"./axios-966d6f38.js";import"./nprogress-6d1393d1.js";import"./lodash-es-a085e596.js";import"./vue-router-18ffceba.js";import"./pinia-dbeeb1e2.js";import"./vue-demi-5b9a0fa5.js";import"./@vueuse.core-d0bf94bd.js";import"./@vueuse.shared-3f1de09b.js";import"./vue-1d48ca3b.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@element-plus.icons-vue-32670eb7.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./dayjs-dd470533.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";import"./resize-detector-94afada7.js";import"./echarts-33de40b3.js";import"./tslib-ed971494.js";import"./zrender-d158d5d4.js";const i=r({name:"form-form5"}),m=r({...i,setup(r){const{service:i}=o(),m=e.exports.useUpsert({items:[{label:"姓名",prop:"name",required:!0,component:{name:"el-input"}},{label:"电话",prop:"phone",required:!0,component:{name:"el-input"}},{label:"邮箱",prop:"email",required:!0,component:{name:"el-input"}},{label:"媒体组织",prop:"media",required:!0,component:{name:"el-input"}},{label:"工作部门",prop:"department",required:!0,component:{name:"el-input"}},{label:"职位",prop:"position",required:!0,component:{name:"el-input"}},{label:"居住国",prop:"country",required:!0,component:{name:"el-input"}},{label:"网站",prop:"website",required:!0,component:{name:"el-input"}},{label:"如何联系",prop:"contact",component:{name:"el-radio-group",options:[{label:"电话",value:0},{label:"邮件",value:1,color:"#67C23A"},{label:"传真",value:2,color:"#E6A23C"}]},value:0,required:!0},{label:"问题或意见",prop:"message",component:{name:"el-input",props:{type:"textarea",rows:4}},required:!0},{label:"状态",prop:"status",component:{name:"el-radio-group",options:[{label:"未处理",value:0},{label:"正在处理",value:1,color:"#67C23A"},{label:"已处理",value:2,color:"#E6A23C"}]},value:0,required:!0},{label:"备注",prop:"remark",component:{name:"el-input",props:{type:"textarea",rows:4}}}]}),n=e.exports.useTable({columns:[{type:"selection"},{label:"ID",prop:"id"},{label:"姓名",prop:"name"},{label:"电话",prop:"phone"},{label:"邮箱",prop:"email"},{label:"媒体组织",prop:"media"},{label:"工作部门",prop:"department"},{label:"职位",prop:"position"},{label:"居住国",prop:"country"},{label:"网站",prop:"website"},{label:"您希望我们如何联系",prop:"contact"},{label:"问题或意见",prop:"message",showOverflowTooltip:!0},{label:"状态",prop:"status",dict:[{label:"未处理",value:0},{label:"正在处理",value:1,color:"#67C23A"},{label:"已处理",value:2,color:"#E6A23C"}]},{label:"备注",prop:"remark",showOverflowTooltip:!0},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"},{type:"op",buttons:["edit","delete"]}]}),u=e.exports.useCrud({service:i.form.form5},(e=>{e.refresh()}));return(e,o)=>{const r=l("cl-refresh-btn"),i=l("cl-add-btn"),d=l("cl-multi-delete-btn"),c=l("cl-flex1"),b=l("cl-search-key"),f=l("el-row"),j=l("cl-table"),v=l("cl-pagination"),h=l("cl-upsert"),y=l("cl-crud");return p(),a(y,{ref_key:"Crud",ref:u},{default:t((()=>[s(f,null,{default:t((()=>[s(r),s(i),s(d),s(c),s(b)])),_:1}),s(f,null,{default:t((()=>[s(j,{ref_key:"Table",ref:n},null,512)])),_:1}),s(f,null,{default:t((()=>[s(c),s(v)])),_:1}),s(h,{ref_key:"Upsert",ref:m},null,512)])),_:1},512)}}});export{m as default};