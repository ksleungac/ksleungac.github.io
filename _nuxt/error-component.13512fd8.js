import{o as m,c as E,n as f,g,u as s,d as n,_ as a}from"./entry.fd598056.js";const k={__name:"nuxt-error-page",props:{error:Object},setup(c){const u=c,{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),o=r===404,i=t.statusMessage??(o?"Page Not Found":"Internal Server Error"),p=t.message||t.toString(),_=void 0,d=o?n(()=>a(()=>import("./error-404.4f118b8f.js"),["./error-404.4f118b8f.js","./nuxt-link.8bd8815c.js","./entry.fd598056.js","./entry.bd27f156.css","./_plugin-vue_export-helper.c27b6911.js","./error-404.8bdbaeb8.css"],import.meta.url).then(e=>e.default||e)):n(()=>a(()=>import("./error-500.9fde972c.js"),["./error-500.9fde972c.js","./entry.fd598056.js","./entry.bd27f156.css","./_plugin-vue_export-helper.c27b6911.js","./error-500.b63a96f5.css"],import.meta.url).then(e=>e.default||e));return(e,l)=>(m(),E(s(d),f(g({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=k;export{h as default};
