import{_ as u}from"./TheHero.300ad1a9.js";import{_ as d,a as g}from"./BlogPostList.3652da96.js";import{g as x,c as f,b as e,w as a,a as h,o as w,d as n,t as c,i as r}from"./entry.83e9feae.js";import"./query.bb6ba5e8.js";import"./preview.d5be7e48.js";import"./utils.db96769c.js";const y={class:"bg-slate-100"},T={class:"w-11/12 grid grid-cols-none sm:grid-cols-6 mx-auto max-w-screen-xl gap-x-4"},D={__name:"index",setup(b){const i=x().params.category,l=[{category:"comp4621",title:"COMP4621 Diaries",subtitle:"For COMP4621 course project submission"},{category:"test",title:"Testing Ground",subtitle:"*The first nuclear weapon experiment was conducted at the Trinity Site."}];let o="",s="";return l.forEach(t=>{i==t.category&&(o=t.title,s=t.subtitle)}),(t,B)=>{const _=u,p=d,m=g;return w(),f("main",y,[e(_,null,{title:a(()=>[n(c(r(o)),1)]),subtitle:a(()=>[n(c(r(s)),1)]),_:1}),h("div",T,[e(p,{class:"col-span-4 sm:col-span-2"}),e(m,{class:"col-span-4 w-full lg:w-11/12"})])])}}};export{D as default};