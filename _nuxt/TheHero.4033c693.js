import{l as c,o as n,a as r,b as t,t as o,O as d,u as _,s as a}from"./entry.d83ee8b6.js";import{_ as l}from"./_plugin-vue_export-helper.c27b6911.js";const u={class:"tags has-addons level-item are-medium"},m={class:"tag is-rounded"},B={__name:"BlogPostMeta",props:{author:{type:String,required:!0},date:{type:String,required:!0},color:{type:String,default:"info"}},setup(e){const s=e,i=c(()=>new Date(s.date).toDateString());return(S,$)=>(n(),r("div",u,[t("span",{class:d(["tag is-rounded",`is-${e.color}`])},o(e.author),3),t("span",m,o(_(i)),1)]))}};const h={},p={class:"hero is-info is-medium is-bold"},f={class:"hero-body"},g={class:"container has-text-centered"},y={class:"title is-size-1"};function v(e,s){return n(),r("section",p,[t("div",f,[t("div",g,[t("h1",y,[a(e.$slots,"default")]),a(e.$slots,"subtitle")])])])}const D=l(h,[["render",v]]);export{D as _,B as a};
