if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,t)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=t(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-046431ad"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"8e3e29e36ff16c2d8c08f53580626034"},{url:"main.06ed80324d5913daf6f7.js",revision:"939c04fb4dc4de71636d0f515a8a8918"},{url:"runtime.2388b87b067ee793e5eb.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"vendors.56e9c424c150973878ff.js",revision:"6ee223424948d5e356d77adb2f897603"}],{})}));
