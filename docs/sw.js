if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B41Zfm87.css",revision:null},{url:"assets/index-C1EPSZlK.js",revision:null},{url:"index.html",revision:"5a479a62b1c570034ea57c491d8ec54c"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"apple-touch-icon.png",revision:"619c5b25a8c223f426832cad6ab40b95"},{url:"icon-192x192.png",revision:"679463c947ec304874911a222275ea4f"},{url:"icon-512x512.png",revision:"ba63572013f7e55dae59024d9c93322c"},{url:"manifest.webmanifest",revision:"758a2038adbb8b694e82d7a4013cbe93"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
