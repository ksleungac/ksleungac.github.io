import{j as h,A as a,g as d,B as C,u as w,C as D,D as v,E as x,G as H,H as r}from"./entry.5e4c68f8.js";import S from"./ContentRenderer.8e7e2d6f.js";import _ from"./ContentQuery.dbd7b983.js";import"./ContentRendererMarkdown.42b1e2cf.js";import"./index.a6ef77ff.js";import"./preview.dfe964e1.js";import"./query.24b3297b.js";import"./utils.7a013b5c.js";const y=(u,e=d())=>{const f=h(u),p=D();a(()=>h(u),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),p.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(o=>o.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),C(()=>w(n))},{immediate:!0})},q=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=x(),{tag:f,excerpt:p,path:m,query:t,head:n}=u,c={...t||{},path:m||(t==null?void 0:t.path)||H(d().path),find:"one"},s=(o,i)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return r(_,c,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:g})=>{var l;return n&&y(o),(l=e.default)==null?void 0:l.call(e,{doc:o,refresh:i,isPartial:g,excerpt:p,...this.$attrs})}:({data:o})=>(n&&y(o),r(S,{value:o,excerpt:p,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):s("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),T=q;export{T as default};
