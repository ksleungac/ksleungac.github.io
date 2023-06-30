import{X as z,z as N,W as T,M as U}from"./entry.09e9047b.js";import{g as W,a as $,b as v,s as b,c as R,w as J,d as B,f as F}from"./query.ca86fbf1.js";import{p as H}from"./index.a6ef77ff.js";import{u as C}from"./preview.9118db0d.js";import"./utils.05fc37d5.js";const q="memory",G=()=>{const t=new Map;return{name:q,options:{},hasItem(e){return t.has(e)},getItem(e){return t.get(e)||null},getItemRaw(e){return t.get(e)||null},setItem(e,n){t.set(e,n)},setItemRaw(e,n){t.set(e,n)},removeItem(e){t.delete(e)},getKeys(){return Array.from(t.keys())},clear(){t.clear()},dispose(){t.clear()}}},Z=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,V=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,X=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Q(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){k(t);return}return e}function k(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function j(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t[t.length-1]==='"')return n.slice(1,-1);const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i!=="undefined"){if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY;if(!X.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Z.test(t)||V.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Q)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}}function tt(t){return!t||typeof t.then!="function"?Promise.resolve(t):t}function p(t,...e){try{return tt(t(...e))}catch(n){return Promise.reject(n)}}function et(t){const e=typeof t;return t===null||e!=="object"&&e!=="function"}function rt(t){const e=Object.getPrototypeOf(t);return!e||e.isPrototypeOf(Object)}function D(t){if(et(t))return String(t);if(rt(t)||Array.isArray(t))return JSON.stringify(t);if(typeof t.toJSON=="function")return D(t.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function M(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const S="base64:";function nt(t){if(typeof t=="string")return t;M();const e=Buffer.from(t).toString("base64");return S+e}function it(t){return typeof t!="string"||!t.startsWith(S)?t:(M(),Buffer.from(t.slice(S.length),"base64"))}const at=["hasItem","getItem","getItemRaw","setItem","setItemRaw","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function st(t,e){if(e=I(e),!e)return t;const n={...t};for(const i of at)n[i]=(s="",...u)=>t[i](e+s,...u);return n.getKeys=(i="",...s)=>t.getKeys(e+i,...s).then(u=>u.map(c=>c.slice(e.length))),n}function g(t){return t?t.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function I(t){return t=g(t),t?t+":":""}const ot="memory",ut=()=>{const t=new Map;return{name:ot,options:{},hasItem(e){return t.has(e)},getItem(e){return t.get(e)||null},getItemRaw(e){return t.get(e)||null},setItem(e,n){t.set(e,n)},setItemRaw(e,n){t.set(e,n)},removeItem(e){t.delete(e)},getKeys(){return Array.from(t.keys())},clear(){t.clear()},dispose(){t.clear()}}};function ct(t={}){const e={mounts:{"":t.driver||ut()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},n=r=>{for(const a of e.mountpoints)if(r.startsWith(a))return{base:a,relativeKey:r.slice(a.length),driver:e.mounts[a]};return{base:"",relativeKey:r,driver:e.mounts[""]}},i=(r,a)=>e.mountpoints.filter(o=>o.startsWith(r)||a&&r.startsWith(o)).map(o=>({relativeBase:r.length>o.length?r.slice(o.length):void 0,mountpoint:o,driver:e.mounts[o]})),s=(r,a)=>{if(e.watching){a=g(a);for(const o of e.watchListeners)o(r,a)}},u=async()=>{if(!e.watching){e.watching=!0;for(const r in e.mounts)e.unwatch[r]=await K(e.mounts[r],s,r)}},c=async()=>{if(e.watching){for(const r in e.unwatch)await e.unwatch[r]();e.unwatch={},e.watching=!1}},h={hasItem(r,a={}){r=g(r);const{relativeKey:o,driver:l}=n(r);return p(l.hasItem,o,a)},getItem(r,a={}){r=g(r);const{relativeKey:o,driver:l}=n(r);return p(l.getItem,o,a).then(m=>j(m))},getItemRaw(r,a={}){r=g(r);const{relativeKey:o,driver:l}=n(r);return l.getItemRaw?p(l.getItemRaw,o,a):p(l.getItem,o,a).then(m=>it(m))},async setItem(r,a,o={}){if(a===void 0)return h.removeItem(r);r=g(r);const{relativeKey:l,driver:m}=n(r);m.setItem&&(await p(m.setItem,l,D(a),o),m.watch||s("update",r))},async setItemRaw(r,a,o={}){if(a===void 0)return h.removeItem(r,o);r=g(r);const{relativeKey:l,driver:m}=n(r);if(m.setItemRaw)await p(m.setItemRaw,l,a,o);else if(m.setItem)await p(m.setItem,l,nt(a),o);else return;m.watch||s("update",r)},async removeItem(r,a={}){typeof a=="boolean"&&(a={removeMata:a}),r=g(r);const{relativeKey:o,driver:l}=n(r);l.removeItem&&(await p(l.removeItem,o,a),a.removeMata&&await p(l.removeItem,o+"$",a),l.watch||s("remove",r))},async getMeta(r,a={}){typeof a=="boolean"&&(a={nativeOnly:a}),r=g(r);const{relativeKey:o,driver:l}=n(r),m=Object.create(null);if(l.getMeta&&Object.assign(m,await p(l.getMeta,o,a)),!a.nativeOnly){const f=await p(l.getItem,o+"$",a).then(w=>j(w));f&&typeof f=="object"&&(typeof f.atime=="string"&&(f.atime=new Date(f.atime)),typeof f.mtime=="string"&&(f.mtime=new Date(f.mtime)),Object.assign(m,f))}return m},setMeta(r,a,o={}){return this.setItem(r+"$",a,o)},removeMeta(r,a={}){return this.removeItem(r+"$",a)},async getKeys(r,a={}){r=I(r);const o=i(r,!0);let l=[];const m=[];for(const f of o){const O=(await p(f.driver.getKeys,f.relativeBase,a)).map(d=>f.mountpoint+g(d)).filter(d=>!l.some(y=>d.startsWith(y)));m.push(...O),l=[f.mountpoint,...l.filter(d=>!d.startsWith(f.mountpoint))]}return r?m.filter(f=>f.startsWith(r)&&!f.endsWith("$")):m.filter(f=>!f.endsWith("$"))},async clear(r,a={}){r=I(r),await Promise.all(i(r,!1).map(async o=>{if(o.driver.clear)return p(o.driver.clear,o.relativeBase,a);if(o.driver.removeItem){const l=await o.driver.getKeys(o.relativeBase||"",a);return Promise.all(l.map(m=>o.driver.removeItem(m,a)))}}))},async dispose(){await Promise.all(Object.values(e.mounts).map(r=>P(r)))},async watch(r){return await u(),e.watchListeners.push(r),async()=>{e.watchListeners=e.watchListeners.filter(a=>a!==r),e.watchListeners.length===0&&await c()}},async unwatch(){e.watchListeners=[],await c()},mount(r,a){if(r=I(r),r&&e.mounts[r])throw new Error(`already mounted at ${r}`);return r&&(e.mountpoints.push(r),e.mountpoints.sort((o,l)=>l.length-o.length)),e.mounts[r]=a,e.watching&&Promise.resolve(K(a,s,r)).then(o=>{e.unwatch[r]=o}).catch(console.error),h},async unmount(r,a=!0){r=I(r),!(!r||!e.mounts[r])&&(e.watching&&r in e.unwatch&&(e.unwatch[r](),delete e.unwatch[r]),a&&await P(e.mounts[r]),e.mountpoints=e.mountpoints.filter(o=>o!==r),delete e.mounts[r])},getMount(r=""){r=g(r)+":";const a=n(r);return{driver:a.driver,base:a.base}},getMounts(r="",a={}){return r=g(r),i(r,a.parents).map(l=>({driver:l.driver,base:l.mountpoint}))}};return h}function K(t,e,n){return t.watch?t.watch((i,s)=>e(i,n+s)):()=>{}}async function P(t){typeof t.dispose=="function"&&await p(t.dispose)}function ft(t={}){const e=lt(n,t.operators);function n(i,s){return typeof s!="object"||s instanceof RegExp?e.$eq(i,s):Object.keys(s||{}).every(u=>{const c=s[u];if(u.startsWith("$")&&e[u]){const h=e[u];return typeof h=="function"?h(i,c):!1}return n(W(i,u),c)})}return n}function lt(t,e={}){return{$match:(n,i)=>t(n,i),$eq:(n,i)=>i instanceof RegExp?i.test(n):n===i,$ne:(n,i)=>i instanceof RegExp?!i.test(n):n!==i,$not:(n,i)=>!t(n,i),$and:(n,i)=>($(i,"$and requires an array as condition"),i.every(s=>t(n,s))),$or:(n,i)=>($(i,"$or requires an array as condition"),i.some(s=>t(n,s))),$in:(n,i)=>v(i).some(s=>Array.isArray(n)?t(n,{$contains:s}):t(n,s)),$contains:(n,i)=>(n=Array.isArray(n)?n:String(n),v(i).every(s=>n.includes(s))),$icontains:(n,i)=>{if(typeof i!="string")throw new TypeError("$icontains requires a string, use $contains instead");return n=String(n).toLocaleLowerCase(),v(i).every(s=>n.includes(s.toLocaleLowerCase()))},$containsAny:(n,i)=>($(i,"$containsAny requires an array as condition"),n=Array.isArray(n)?n:String(n),i.some(s=>n.includes(s))),$exists:(n,i)=>i?typeof n<"u":typeof n>"u",$type:(n,i)=>typeof n===String(i),$regex:(n,i)=>{if(!(i instanceof RegExp)){const s=String(i).match(/\/(.*)\/([dgimsuy]*)$/);i=s?new RegExp(s[1],s[2]||""):new RegExp(i)}return i.test(String(n||""))},$lt:(n,i)=>n<i,$lte:(n,i)=>n<=i,$gt:(n,i)=>n>i,$gte:(n,i)=>n>=i,...e||{}}}function x(t){const e=ft(),n=(s,{query:u,before:c,after:h})=>{const r=typeof u=="string"?{_path:u}:u,a=s.findIndex(l=>e(l,r));c=c??1,h=h??1;const o=new Array(c+h).fill(null,0);return a===-1?o:o.map((l,m)=>s[a-c+m+ +(m>=c)]||null)},i=[(s,u)=>s.filter(c=>v(u.where).every(h=>e(c,h))),(s,u)=>v(u.sort).forEach(c=>b(s,c)),(s,u)=>u.surround?n(s,u.surround):s,(s,u)=>u.skip?s.slice(u.skip):s,(s,u)=>u.limit?s.slice(0,u.limit):s,(s,u)=>R(J(u.without))(s),(s,u)=>R(B(u.only))(s)];return async s=>{const u=await t(),c=s.params(),h=i.reduce((r,a)=>a(r,c)||r,u);return c.first?h[0]:h}}var mt={exports:{}};(function(t,e){(function(n,i,s){t.exports=s(),t.exports.default=s()})("slugify",z,function(){var n=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function s(u,c){if(typeof u!="string")throw new Error("slugify: string argument expected");c=typeof c=="string"?{replacement:c}:c||{};var h=i[c.locale]||{},r=c.replacement===void 0?"-":c.replacement,a=c.trim===void 0?!0:c.trim,o=u.normalize().split("").reduce(function(l,m){var f=h[m];return f===void 0&&(f=n[m]),f===void 0&&(f=m),f===r&&(f=" "),l+f.replace(c.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return c.strict&&(o=o.replace(/[^A-Za-z0-9\s]/g,"")),a&&(o=o.trim()),o=o.replace(/\s+/g,r),c.lower&&(o=o.toLowerCase()),o}return s.extend=function(u){Object.assign(n,u)},s})})(mt);const ht=t=>t.split(/[\s-]/g).map(H).join(" ");function pt(t,e){const{navigation:n}=N().public.content,i=u=>({...dt(["title",...n.fields])(u),...yt(u==null?void 0:u.navigation)?u.navigation:{}}),s=t.sort((u,c)=>u._path.localeCompare(c._path)).reduce((u,c)=>{const h=c._path.substring(1).split("/"),r=c._id.split(":").slice(1),a=!!r[r.length-1].match(/([1-9][0-9]*\.)?index.md/g),o=f=>({title:f.title,_path:f._path,_file:f._file,children:[],...i(f),...f._draft?{_draft:!0}:{}}),l=o(c);if(a){const f=e[l._path];if(typeof(f==null?void 0:f.navigation)<"u"&&!(f!=null&&f.navigation))return u;if(c._path!=="/"){const w=o(c);l.children.push(w)}Object.assign(l,i(f))}return h.length===1?(u.push(l),u):(h.slice(0,-1).reduce((f,w,O)=>{const d="/"+h.slice(0,O+1).join("/"),y=e[d];if(typeof(y==null?void 0:y.navigation)<"u"&&!y.navigation)return[];let A=f.find(Y=>Y._path===d);return A||(A={title:ht(w),_path:d,_file:c._file,children:[],...i(y)},f.push(A)),A.children},u).push(l),u)},[]);return L(s)}const gt=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function L(t){var n;const e=t.sort((i,s)=>gt.compare(i._file,s._file));for(const i of e)(n=i.children)!=null&&n.length?L(i.children):delete i.children,delete i._file;return t}function dt(t){return e=>(e=e||{},t&&t.length?t.filter(n=>typeof e[n]<"u").reduce((n,i)=>Object.assign(n,{[i]:e[i]}),{}):e)}function yt(t){return Object.prototype.toString.call(t)==="[object Object]"}const wt=t=>T(t,N().public.content.api.baseURL),It=st(ct({driver:G()}),"@content");function vt(t){async function e(){const n=new Set(await t.getKeys("cache:")),i=C().getPreviewToken();if(i){const u=await t.getItem(`${i}$`).then(r=>r||{});if(Array.isArray(u.ignoreSources)){const r=u.ignoreSources.map(a=>`cache:${a.trim()}:`);for(const a of n)r.some(o=>a.startsWith(o))&&n.delete(a)}const c=await t.getKeys(`${i}:`),h=await Promise.all(c.map(r=>t.getItem(r)));for(const r of h)n.delete(`cache:${r._id}`),r.__deleted||n.add(`${i}:${r._id}`)}return await Promise.all(Array.from(n).map(u=>t.getItem(u)))}return{storage:t,fetch:x(e),query:n=>F(x(e),n)}}let _=null,E=null;async function At(){return E?await E:_||(E=Et(),_=await E),_}async function Et(){const t=U(),{content:e}=N().public,n=vt(It),i=await n.storage.getItem("integrity");if(e.integrity!==+(i||0)){const{contents:s,navigation:u}=await $fetch(wt(e.integrity?`cache.${e.integrity}.json`:"cache.json"));await Promise.all(s.map(c=>n.storage.setItem(`cache:${c._id}`,c))),await n.storage.setItem("navigation",u),await n.storage.setItem("integrity",e.integrity)}return await t.callHook("content:storage",n.storage),n}async function Rt(t){const e=await At();if(!C().getPreviewToken()&&Object.keys(t||{}).length===0)return e.storage.getItem("navigation");const n=await e.query(t).where({_partial:!1,navigation:{$ne:!1}}).find(),s=(await e.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((u,c)=>{var r;((r=c.title)==null?void 0:r.toLowerCase())==="dir"&&(c.title=void 0);const h=c._path.split("/").slice(0,-1).join("/")||"/";return u[h]={...c,...c.body},u},{});return pt(n,s)}export{It as contentStorage,vt as createDB,Rt as generateNavigation,At as useContentDatabase};
