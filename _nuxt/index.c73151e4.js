import{_ as L}from"./TheHero.278aee2b.js";import{_ as M,a as D}from"./BlogPostList.0ab0f2a2.js";import{_ as F,o as P,c as T,p as $,f as I,a as f,b as d,w as S,F as N,d as b}from"./entry.2d2cce15.js";import{A as R,c as m,p as W,t as y,i as G,r as H,a as Y,m as E}from"./mat4.3b6cdffa.js";import"./query.3d54c75a.js";import"./preview.be3abd8c.js";import"./utils.34e609d3.js";function V(){var e=new R(3);return R!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function k(e,t){var a=t[0],r=t[1],i=t[2],n=a*a+r*r+i*i;return n>0&&(n=1/Math.sqrt(n)),e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}(function(){var e=V();return function(t,a,r,i,n,l){var o,s;for(a||(a=3),r||(r=0),i?s=Math.min(i*a+r,t.length):s=t.length,o=r;o<s;o+=a)e[0]=t[o],e[1]=t[o+1],e[2]=t[o+2],n(e,e,l),t[o]=e[0],t[o+1]=e[1],t[o+2]=e[2];return t}})();const U={mounted(){const e=document.getElementsByTagName("canvas")[0];e.width=window.innerWidth,e.height=window.innerHeight,this.runWebGL()},methods:{runWebGL(){const e=document.querySelector("canvas"),t=e.getContext("webgl");if(!t)throw new Error("No WebGL for you suckers");function a(C){let A=[];for(let w=0;w<C;w++){const p=()=>Math.random()-.5,u=[p(),p(),p()];k(u,u),A.push(...u)}return A}const r=a(1e5),i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW);const n=t.createShader(t.VERTEX_SHADER);t.shaderSource(n,`
      precision mediump float;

      attribute vec3 position;
      varying vec3 vColor;

      uniform mat4 matrix; 

      void main() {
        vColor = vec3(position.xy, 0.7);
        gl_PointSize = 1.4;
        gl_Position = matrix * vec4(position, 1);
      }
      `),t.compileShader(n);const l=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(l,`
      precision mediump float;

      varying vec3 vColor;

      void main() {
        gl_FragColor = vec4(vColor, 1);
      }
      `),t.compileShader(l);const o=t.createProgram();t.attachShader(o,n),t.attachShader(o,l),t.linkProgram(o);const s=t.getAttribLocation(o,"position");t.enableVertexAttribArray(s),t.bindBuffer(t.ARRAY_BUFFER,i),t.vertexAttribPointer(s,3,t.FLOAT,!1,0,0),t.useProgram(o),t.enable(t.DEPTH_TEST);const B={matrix:t.getUniformLocation(o,"matrix")},c=m(),_=m(),h=m();W(h,60*Math.PI/180,e.width/e.height,1e-4,1e4);const v=m(),x=m();y(c,c,[0,0,0]),y(_,_,[0,0,1]),G(_,_);function g(){requestAnimationFrame(g),H(c,c,5e-4),Y(c,c,5e-4),E(v,_,c),E(x,h,v),t.uniformMatrix4fv(B.matrix,!1,x),t.drawArrays(t.POINTS,0,r.length/3)}g()}}},q=e=>($("data-v-d9367dc0"),e=e(),I(),e),z=q(()=>f("canvas",null,null,-1)),O=[z];function X(e,t,a,r,i,n){return P(),T("div",null,O)}const j=F(U,[["render",X],["__scopeId","data-v-d9367dc0"]]),J={},K={class:"w-11/12 grid grid-cols-none sm:grid-cols-6 mx-auto max-w-screen-xl gap-x-4"};function Q(e,t){const a=L,r=M,i=D,n=j;return P(),T(N,null,[f("main",null,[d(a,{class:"bg-transparent"},{title:S(()=>[b("Home")]),subtitle:S(()=>[b("Showing all posts")]),_:1}),f("div",K,[d(r,{class:"col-span-4 sm:col-span-2"}),d(i,{class:"col-span-4 w-full lg:w-11/12"})])]),d(n)],64)}const it=F(J,[["render",Q]]);export{it as default};
