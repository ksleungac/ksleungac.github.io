import{l as n,o as r,a,t as l,O as c,b as e,s as o}from"./entry.887af567.js";import{_ as i}from"./_plugin-vue_export-helper.c27b6911.js";const w={__name:"BlogPostMeta",props:{author:{type:String,required:!0},date:{type:String,required:!0},color:{type:String,default:"info"}},setup(t){const s=t;return n(()=>new Date(s.date).toDateString()),(f,h)=>(r(),a("span",{class:c(["whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-2 text-sm text-purple-700",`is-${t.color}`])},l(t.author),3))}};const _={},p={class:"bg-gray-900 text-white"},x={class:"mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center"},u={class:"mx-auto max-w-3xl text-center"},d={class:"p-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"},m={class:"mx-auto mt-4 max-w-xl sm:text-xl/relaxed"};function g(t,s){return r(),a("section",p,[e("div",x,[e("div",u,[e("h1",d,[o(t.$slots,"default")]),e("p",m,[o(t.$slots,"subtitle")])])])])}const S=i(_,[["render",g]]);export{S as _,w as a};
