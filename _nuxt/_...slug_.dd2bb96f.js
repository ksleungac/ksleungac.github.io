import{_ as m,a as d}from"./TheHero.00514d87.js";import p from"./ContentDoc.07b58bbd.js";import{u,q as h}from"./query.a65271e6.js";import{y as f,M as y,a as b,N as e,w as r,b as t,o as x,e as g,t as w,u as a}from"./entry.887af567.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRenderer.78f2c954.js";import"./ContentRendererMarkdown.e2ce9aa0.js";import"./preview.ef1fda43.js";import"./index.a6ef77ff.js";import"./ContentQuery.295f1f1c.js";import"./utils.f3719394.js";const v={class:"container"},B={class:"articles"},C={class:"column is-8 is-offset-2"},N={class:"blog-post-card card article"},k={class:"card-content"},D={class:"content article-body is-size-5"},F={__name:"[...slug]",async setup(V){let o,n;const{path:c}=f(),{data:s}=([o,n]=y(()=>u(`content-${c}`,()=>h().where({_path:c}).findOne())),o=await o,n(),o);return($,q)=>{const i=d,_=m,l=p;return x(),b("main",null,[e(_,null,{default:r(()=>[g(w(a(s).title),1)]),subtitle:r(()=>[e(i,{author:a(s).author,date:a(s).dates.published,color:"dark"},null,8,["author","date"])]),_:1}),t("div",v,[t("section",B,[t("div",C,[t("section",N,[t("div",k,[t("div",D,[e(l)])])])])])])])}}};export{F as default};