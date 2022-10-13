import{i as e}from"./index-e0fdaf07.js";import{F as t}from"./file-saver-7b976f01.js";import{u as r,w as o,S as a}from"./xlsx-100b5d87.js";import{a as i}from"./element-plus-04192b69.js";import{d as n,R as s,o as l,I as c,J as p,E as d,N as u}from"./@vue.runtime-core-4f5b9f62.js";import{e as m}from"./@vue.reactivity-bec702f3.js";import"./@vue.runtime-dom-c19fd55a.js";import"./@vue.shared-5670d8a7.js";import"./store-96e17a43.js";import"./axios-966d6f38.js";import"./nprogress-6d1393d1.js";import"./vue-echarts-85a407f1.js";import"./resize-detector-94afada7.js";import"./echarts-33de40b3.js";import"./tslib-ed971494.js";import"./zrender-d158d5d4.js";import"./lodash-es-a085e596.js";import"./vue-router-18ffceba.js";import"./pinia-dbeeb1e2.js";import"./vue-demi-5b9a0fa5.js";import"./@vueuse.core-d0bf94bd.js";import"./@vueuse.shared-3f1de09b.js";import"./vue-1d48ca3b.js";import"./mockjs-93ca2bc8.js";import"./mitt-dab1f1cb.js";import"./@element-plus.icons-vue-32670eb7.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./dayjs-dd470533.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";function f(){if(!(this instanceof f))return new f;this.SheetNames=[],this.Sheets={}}function h(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),o=0;o!=e.length;++o)r[o]=255&e.charCodeAt(o);return t}function b({multiHeader:e=[],header:i,data:n,filename:s,merges:l=[],autoWidth:c=!0,bookType:p="xlsx"}={}){s=s||"excel-list",(n=[...n]).unshift(i);for(let t=e.length-1;t>-1;t--)n.unshift(e[t]);var d="SheetJS",u=new f,m=function(e,t){for(var o,i={},n={s:{c:1e7,r:1e7},e:{c:0,r:0}},s=0;s!=e.length;++s)for(var l=0;l!=e[s].length;++l){n.s.r>s&&(n.s.r=s),n.s.c>l&&(n.s.c=l),n.e.r<s&&(n.e.r=s),n.e.c<l&&(n.e.c=l);var c={v:e[s][l]};if(null!=c.v){var p=r.encode_cell({c:l,r:s});"number"==typeof c.v?c.t="n":"boolean"==typeof c.v?c.t="b":c.v instanceof Date?(c.t="n",c.z=a._table[14],c.v=(o=c.v,(Date.parse(o)-new Date(Date.UTC(1899,11,30)))/864e5)):c.t="s",i[p]=c}}return n.s.c<1e7&&(i["!ref"]=r.encode_range(n)),i}(n);if(l.length>0&&(m["!merges"]||(m["!merges"]=[]),l.forEach((e=>{m["!merges"].push(r.decode_range(e))}))),c){const e=n.map((e=>e.map((e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}))));let t=e[0];for(let r=1;r<e.length;r++)for(let o=0;o<e[r].length;o++)t[o].wch<e[r][o].wch&&(t[o].wch=e[r][o].wch);m["!cols"]=t}u.SheetNames.push(d),u.Sheets.SheetJS=m;var b=o(u,{bookType:p,bookSST:!1,type:"binary"});t.exports.saveAs(new Blob([h(b)],{type:"application/octet-stream"}),`${s}.${p}`)}const v=n({name:"cl-export-btn"}),j=n({...v,props:{filename:[Function,String],autoWidth:{type:Boolean,default:!0},bookType:{type:String,default:"xlsx"},header:Array,columns:{type:Array,required:!0},data:[Function,Array],maxExportLimit:Number,size:String,disabled:Boolean,type:String,plain:Boolean,round:Boolean,circle:Boolean,icon:String},setup(t){const r=t,o=m(!1),a=e.exports.useCrud();async function n(){if("function"==typeof r.filename)return await(null==r?void 0:r.filename());{const{year:e,month:t,day:o,hour:a,minu:i,sec:n}=function(){const e=new Date;return{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minu:e.getMinutes(),sec:e.getSeconds()}}();return r.filename||`报表（${e}-${t}-${o} ${a}_${i}_${n}）`}}async function f(){if(!r.columns)return;o.value=!0;const e=r.columns.filter((e=>!(!0===e.hidden||["selection","expand","index"].includes(e.type)||e.filterExport||e["filter-export"]))),t=e.map((e=>e.prop)).filter(Boolean);let s=await async function(e,t){return e.filter((e=>!e.hidden&&t.includes(e.prop))).map((e=>e.label))}(e,t),l=await("function"==typeof r.data?r.data():r.data?r.data:null==(p=a.value)?void 0:p.service.page({...null==(c=a.value)?void 0:c.paramsReplace(a.value.params),maxExportLimit:r.maxExportLimit,isExport:!0}).then((e=>e.list.map((e=>{for(const t in e){const o=r.columns.find((e=>e.prop==t));if(o&&o.dict){const r=o.dict.find((r=>r.value==e[t]));r&&(e[t]=r.label)}}return e})))).catch((e=>(i.error(e.message),null))));var c,p;if(!l)return void(o.value=!1);let d=await n();l=l.map((e=>t.map((t=>e[t])))),b({header:s,data:l,filename:d,autoWidth:r.autoWidth,bookType:r.bookType}),o.value=!1}return(e,r)=>{const a=s("el-button");return l(),c(a,{size:t.size,type:t.type,plain:t.plain,round:t.round,circle:t.circle,icon:t.icon,loading:o.value,disabled:t.disabled,onClick:f},{default:p((()=>[d(e.$slots,"default",{},(()=>[u("导出")]))])),_:3},8,["size","type","plain","round","circle","icon","loading","disabled"])}}});export{j as default};
