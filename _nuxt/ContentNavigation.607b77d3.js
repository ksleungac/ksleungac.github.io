import{q as f,e as v,j as g,u as d}from"./query.f5d94875.js";import{s as l,A as h,v as _,B as y,C,D as w,x as P,z as r,_ as $}from"./entry.32d176a6.js";import{h as p,u as N}from"./preview.29151404.js";import{w as m,s as j,u as D}from"./utils.9ede799b.js";const T=async e=>{const{content:t}=l().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(j())return(await h(()=>import("./client-db.e7c30e1e.js"),["./client-db.e7c30e1e.js","./entry.32d176a6.js","./entry.cb0cecc9.css","./query.f5d94875.js","./preview.29151404.js","./utils.9ede799b.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(a),previewToken:N().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},L=_({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=y(e),a=C(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&w("dd-navigation").value){const{navigation:n}=D();return{navigation:n}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=P(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{L as default};
