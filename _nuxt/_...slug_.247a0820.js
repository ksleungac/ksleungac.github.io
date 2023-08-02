import{_ as w,a as v}from"./TheFooter.45a17d8b.js";import C from"./ContentDoc.511e94f1.js";import{g as $,h as N,r as T,c as t,a as o,b as r,w as l,d as a,n as B,F as c,i as _,j as x,k as V,o as e,t as i,e as D}from"./entry.bd1302d0.js";import{u as F,q as O}from"./query.fa2e775b.js";import"./ContentRenderer.10362e51.js";import"./ContentRendererMarkdown.f3b5e939.js";import"./index.a6ef77ff.js";import"./preview.32c2c5c6.js";import"./ContentQuery.132eed72.js";import"./utils.4507df8a.js";const j={class:"bg-slate-100"},q={class:"mx-auto mt-10 w-11/12 max-w-screen-xl"},A={class:"flex grid grid-cols-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl md:grid-cols-6 lg:grid-cols-4"},L={class:"col-span-4 block grow rounded-b-xl bg-white p-4 sm:p-6 md:rounded-l-xl lg:col-span-3 lg:p-8"},P={class:"sticky top-20 order-first col-span-2 block rounded-t-xl bg-white p-4 opacity-90 sm:p-6 md:order-last md:rounded-r-xl md:rounded-tl-none lg:col-span-1 lg:p-8"},z={class:"sticky top-28 mx-5 md:mx-0"},E={class:"-mx-3 text-base font-medium opacity-100 transition"},H=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1),M=[H],R={key:0},ot={__name:"[...slug]",async setup(S){let d,g;const{path:h}=$(),{data:u}=([d,g]=N(()=>F(`content-${h}, params`,()=>O().where({_path:h}).findOne())),d=await d,g(),d),m=T(!1),y=()=>{m.value=!m.value};return(G,I)=>{const b=w,f=C,p=D,k=v;return e(),t(c,null,[o("main",j,[r(b,null,{title:l(()=>[a(i(x(u).title),1)]),subtitle:l(()=>[a(" Published: "+i(x(u).dates.published),1)]),_:1}),o("div",null,[o("section",q,[o("div",A,[o("div",L,[r(f,{class:"prose max-w-none prose-a:no-underline prose-img:mx-auto prose-img:-mb-4 prose-img:transition prose-img:delay-100 hover:prose-img:scale-125"})]),o("div",P,[o("ul",z,[o("p",E,[a(" Table of Contents "),(e(),t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:B(["mx-3 -mt-1 inline h-4 w-4 opacity-100 transition md:hidden",{"rotate-90":m.value}]),onClick:y},M,2))]),(e(!0),t(c,null,_(x(u).body.toc.links,s=>(e(),t("li",{key:s.id,class:"group mt-1 hidden truncate text-sm text-slate-500 opacity-100 transition hover:text-black md:block"},[r(p,{to:`#${s.id}`},{default:l(()=>[a(i(s.text),1)]),_:2},1032,["to"]),o("ul",null,[(e(!0),t(c,null,_(s.children,n=>(e(),t("li",{key:n.id,class:"my-1 ps-4 group-hover:text-black"},[r(p,{to:`#${n.id}`},{default:l(()=>[a(i(n.text),1)]),_:2},1032,["to"])]))),128))])]))),128)),m.value?(e(),t("ul",R,[(e(!0),t(c,null,_(x(u).body.toc.links,s=>(e(),t("li",{key:s.id,class:"group mt-1 truncate text-sm text-slate-500 opacity-100 transition hover:text-black md:hidden"},[r(p,{to:`#${s.id}`},{default:l(()=>[a(i(s.text),1)]),_:2},1032,["to"]),o("ul",null,[(e(!0),t(c,null,_(s.children,n=>(e(),t("li",{key:n.id,class:"my-1 ps-4 group-hover:text-black"},[r(p,{to:`#${n.id}`},{default:l(()=>[a(i(n.text),1)]),_:2},1032,["to"])]))),128))])]))),128))])):V("",!0)])])])])])]),r(k)],64)}}};export{ot as default};
