if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const t=e=>n(e,f),c={module:{uri:f},exports:o,require:t};i[f]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1S5w1w-6.css",revision:null},{url:"assets/index-CroAtgqM.js",revision:null},{url:"index.html",revision:"296d67b1f4ffa9d6fd965d395fdcb97b"},{url:"registerSW.js",revision:"53333792eed29a9a713fc3b2314705ec"},{url:"favicon.ico",revision:"cf87fbf10e23b858369e45fa26567822"},{url:"maskable-icon-512x512.png",revision:"2df7e22bb0dced222b9323b6c74b4ab6"},{url:"pwa-192x192.png",revision:"a7170270ac09d4a83b01e81c9efb182f"},{url:"pwa-512x512.png",revision:"cf8f9b7be653209fbaff4d3e3b9d5ca5"},{url:"pwa-64x64.png",revision:"175fbd70b466436ab8d9330c90c7f21e"},{url:"manifest.webmanifest",revision:"5528fc12c2d378516a27c533231fe2bf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
