import{_ as w,a as v}from"./TheFooter.672a45c3.js";import C from"./ContentDoc.45375676.js";import{g as $,h as N,r as T,c as e,a as t,b as r,w as l,d as a,n as B,F as c,i as _,j as x,k as V,o,t as i,e as D}from"./entry.5e4c68f8.js";import{u as F,q as O}from"./query.24b3297b.js";import"./ContentRenderer.8e7e2d6f.js";import"./ContentRendererMarkdown.42b1e2cf.js";import"./index.a6ef77ff.js";import"./preview.dfe964e1.js";import"./ContentQuery.dbd7b983.js";import"./utils.7a013b5c.js";const j={class:"bg-slate-100"},q={class:"w-11/12 max-w-screen-xl mx-auto mt-10"},A={class:"flex grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"},L={class:"grow col-span-4 lg:col-span-3 block rounded-b-xl md:rounded-l-xl bg-white p-4 sm:p-6 lg:p-8"},P={class:"sticky top-20 col-span-2 lg:col-span-1 block order-first md:order-last rounded-t-xl md:rounded-r-xl md:rounded-tl-none bg-white p-4 sm:p-6 lg:p-8 opacity-90"},z={class:"sticky top-28 mx-5 md:mx-0"},E={class:"text-base -mx-3 font-medium transition opacity-100"},H=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1),M=[H],et={__name:"[...slug]",async setup(R){let d,g;const{path:h}=$(),{data:m}=([d,g]=N(()=>F(`content-${h}, params`,()=>O().where({_path:h}).findOne())),d=await d,g(),d),u=T(!1),y=()=>{u.value=!u.value};return(S,G)=>{const b=w,f=C,p=D,k=v;return o(),e(c,null,[t("main",j,[r(b,null,{title:l(()=>[a(i(x(m).title),1)]),subtitle:l(()=>[a(" Published: "+i(x(m).dates.published),1)]),_:1}),t("div",null,[t("section",q,[t("div",A,[t("div",L,[r(f,{class:"prose prose-img:transition prose-img:delay-100 prose-img:mx-auto prose-img:-mb-4 hover:prose-img:scale-125 max-w-none prose-a:no-underline"})]),t("div",P,[t("ul",z,[t("p",E,[a("Table of Contents "),(o(),e("svg",{onClick:y,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:B(["w-4 h-4 inline mx-3 -mt-1 transition md:hidden opacity-100",{"rotate-90":u.value}])},M,2))]),(o(!0),e(c,null,_(x(m).body.toc.links,s=>(o(),e("li",{key:s.id,class:"hidden md:block group text-sm text-slate-500 mt-1 hover:text-black truncate transition opacity-100"},[r(p,{to:`#${s.id}`},{default:l(()=>[a(i(s.text),1)]),_:2},1032,["to"]),t("ul",null,[(o(!0),e(c,null,_(s.children,n=>(o(),e("li",{key:n.id,class:"ps-4 my-1 group-hover:text-black"},[r(p,{to:`#${n.id}`},{default:l(()=>[a(i(n.text),1)]),_:2},1032,["to"])]))),128))])]))),128)),u.value?(o(!0),e(c,{key:0},_(x(m).body.toc.links,s=>(o(),e("li",{key:s.id,class:"md:hidden group text-sm text-slate-500 mt-1 hover:text-black truncate transition opacity-100"},[r(p,{to:`#${s.id}`},{default:l(()=>[a(i(s.text),1)]),_:2},1032,["to"]),t("ul",null,[(o(!0),e(c,null,_(s.children,n=>(o(),e("li",{key:n.id,class:"ps-4 my-1 group-hover:text-black"},[r(p,{to:`#${n.id}`},{default:l(()=>[a(i(n.text),1)]),_:2},1032,["to"])]))),128))])]))),128)):V("",!0)])])])])])]),r(k)],64)}}};export{et as default};
