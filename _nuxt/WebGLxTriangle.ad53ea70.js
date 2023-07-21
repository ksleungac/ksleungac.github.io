import{_ as g,o as b,c as F,a as x}from"./entry.8302a549.js";var p=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,r=arguments.length;r--;)e+=arguments[r]*arguments[r];return Math.sqrt(e)});function y(){var e=new p(16);return p!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function B(e,r,i){var a=i[0],n=i[1],t=i[2],l,s,o,c,v,m,A,f,h,d,_,R;return r===e?(e[12]=r[0]*a+r[4]*n+r[8]*t+r[12],e[13]=r[1]*a+r[5]*n+r[9]*t+r[13],e[14]=r[2]*a+r[6]*n+r[10]*t+r[14],e[15]=r[3]*a+r[7]*n+r[11]*t+r[15]):(l=r[0],s=r[1],o=r[2],c=r[3],v=r[4],m=r[5],A=r[6],f=r[7],h=r[8],d=r[9],_=r[10],R=r[11],e[0]=l,e[1]=s,e[2]=o,e[3]=c,e[4]=v,e[5]=m,e[6]=A,e[7]=f,e[8]=h,e[9]=d,e[10]=_,e[11]=R,e[12]=l*a+v*n+h*t+r[12],e[13]=s*a+m*n+d*t+r[13],e[14]=o*a+A*n+_*t+r[14],e[15]=c*a+f*n+R*t+r[15]),e}function E(e,r,i){var a=i[0],n=i[1],t=i[2];return e[0]=r[0]*a,e[1]=r[1]*a,e[2]=r[2]*a,e[3]=r[3]*a,e[4]=r[4]*n,e[5]=r[5]*n,e[6]=r[6]*n,e[7]=r[7]*n,e[8]=r[8]*t,e[9]=r[9]*t,e[10]=r[10]*t,e[11]=r[11]*t,e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],e}function S(e,r,i){var a=Math.sin(i),n=Math.cos(i),t=r[4],l=r[5],s=r[6],o=r[7],c=r[8],v=r[9],m=r[10],A=r[11];return r!==e&&(e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e[4]=t*n+c*a,e[5]=l*n+v*a,e[6]=s*n+m*a,e[7]=o*n+A*a,e[8]=c*n-t*a,e[9]=v*n-l*a,e[10]=m*n-s*a,e[11]=A*n-o*a,e}function M(e,r,i){var a=Math.sin(i),n=Math.cos(i),t=r[0],l=r[1],s=r[2],o=r[3],c=r[4],v=r[5],m=r[6],A=r[7];return r!==e&&(e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e[0]=t*n+c*a,e[1]=l*n+v*a,e[2]=s*n+m*a,e[3]=o*n+A*a,e[4]=c*n-t*a,e[5]=v*n-l*a,e[6]=m*n-s*a,e[7]=A*n-o*a,e}const T={mounted(){this.runWebGL()},methods:{runWebGL(){const r=document.querySelector("canvas").getContext("webgl");if(!r)throw new Error("No WebGL for you suckers");const i=[.5,.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5];function a(){return[Math.random(),Math.random(),Math.random()]}let n=[];for(let d=0;d<6;d++){let _=a();for(let R=0;R<6;R++)n.push(..._)}const t=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,t),r.bufferData(r.ARRAY_BUFFER,new Float32Array(i),r.STATIC_DRAW);const l=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,l),r.bufferData(r.ARRAY_BUFFER,new Float32Array(n),r.STATIC_DRAW);const s=r.createShader(r.VERTEX_SHADER);r.shaderSource(s,`
      precision mediump float;

      attribute vec3 position;
      attribute vec3 color;
      varying vec3 vColor;

      uniform mat4 matrix; 

      void main() {
        vColor = color;
        gl_Position = matrix * vec4(position, 1);
      }
      `),r.compileShader(s);const o=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(o,`
      precision mediump float;

      varying vec3 vColor;

      void main() {
        gl_FragColor = vec4(vColor, 1);
      }
      `),r.compileShader(o);const c=r.createProgram();r.attachShader(c,s),r.attachShader(c,o),r.linkProgram(c);const v=r.getAttribLocation(c,"position");r.enableVertexAttribArray(v),r.bindBuffer(r.ARRAY_BUFFER,t),r.vertexAttribPointer(v,3,r.FLOAT,!1,0,0);const m=r.getAttribLocation(c,"color");r.enableVertexAttribArray(m),r.bindBuffer(r.ARRAY_BUFFER,l),r.vertexAttribPointer(m,3,r.FLOAT,!1,0,0),r.useProgram(c),r.enable(r.DEPTH_TEST);const A={matrix:r.getUniformLocation(c,"matrix")},f=y();B(f,f,[.2,.5,0]),E(f,f,[.25,.25,.25]);function h(){requestAnimationFrame(h),M(f,f,Math.PI/180),S(f,f,Math.PI/180),r.uniformMatrix4fv(A.matrix,!1,f),r.drawArrays(r.TRIANGLES,0,i.length/3)}h()}}},L=x("canvas",{height:"400",width:"400"},null,-1),C=[L];function P(e,r,i,a,n,t){return b(),F("div",null,C)}const D=g(T,[["render",P]]);export{D as default};
