import{_ as R,o as b,c as p,a as g}from"./entry.2d71647f.js";import{c as x,t as F,s as B,b as S,a as E}from"./mat4.3b6cdffa.js";const L={mounted(){this.runWebGL()},methods:{runWebGL(){const t=document.querySelector("canvas").getContext("webgl");if(!t)throw new Error("No WebGL for you suckers");const o=[.5,.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5];function s(){return[Math.random(),Math.random(),Math.random()]}const a=[];for(let d=0;d<6;d++){const v=s();for(let A=0;A<6;A++)a.push(...v)}const n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW);const f=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,f),t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW);const i=t.createShader(t.VERTEX_SHADER);t.shaderSource(i,`
      precision mediump float;

      attribute vec3 position;
      attribute vec3 color;
      varying vec3 vColor;

      uniform mat4 matrix; 

      void main() {
        vColor = color;
        gl_Position = matrix * vec4(position, 1);
      }
      `),t.compileShader(i);const c=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(c,`
      precision mediump float;

      varying vec3 vColor;

      void main() {
        gl_FragColor = vec4(vColor, 1);
      }
      `),t.compileShader(c);const e=t.createProgram();t.attachShader(e,i),t.attachShader(e,c),t.linkProgram(e);const l=t.getAttribLocation(e,"position");t.enableVertexAttribArray(l),t.bindBuffer(t.ARRAY_BUFFER,n),t.vertexAttribPointer(l,3,t.FLOAT,!1,0,0);const m=t.getAttribLocation(e,"color");t.enableVertexAttribArray(m),t.bindBuffer(t.ARRAY_BUFFER,f),t.vertexAttribPointer(m,3,t.FLOAT,!1,0,0),t.useProgram(e),t.enable(t.DEPTH_TEST);const _={matrix:t.getUniformLocation(e,"matrix")},r=x();F(r,r,[.2,.5,0]),B(r,r,[.25,.25,.25]);function u(){requestAnimationFrame(u),S(r,r,Math.PI/180),E(r,r,Math.PI/180),t.uniformMatrix4fv(_.matrix,!1,r),t.drawArrays(t.TRIANGLES,0,o.length/3)}u()}}},T=g("canvas",{height:"400",width:"400"},null,-1),C=[T];function y(h,t,o,s,a,n){return b(),p("div",null,C)}const w=R(L,[["render",y]]);export{w as default};
