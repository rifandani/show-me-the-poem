if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,s,i)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const t={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return a;case"module":return t;default:return e(c)}})).then(e=>{const c=i(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"jYBkucM9rjOxlhdMkbAvk"},{url:"/_next/static/chunks/06e986a19d799483f7fc35d6804a27f7430051f9.eace1e5bd0c0b916b81b.js",revision:"b5b69c1d5f5944874ea5ed6e19e6dcbe"},{url:"/_next/static/chunks/b85c50c1c98099a8f8f381bd103a26e7f9271e2d.3b7f342d5ca001335b26.js",revision:"0bd309951de03c1493dfa938d8e9b8a0"},{url:"/_next/static/chunks/commons.a93a3348b9aa260a959c.js",revision:"6d58e82415b44d1cbab0636fa265816a"},{url:"/_next/static/chunks/dfeb7cc9.4c419f4b16a96bca7647.js",revision:"0f76c6f3cca30e5b890b037c53cdecd9"},{url:"/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/_next/static/css/460fdd15e6c1ee4db4fc.css",revision:"b7e04ddb4efcfc193790ceac0a7cad1e"},{url:"/_next/static/css/4d3e80c0f47b9c5b6da4.css",revision:"c184843839af1401a7663c70dfbf55c5"},{url:"/_next/static/jYBkucM9rjOxlhdMkbAvk/_buildManifest.js",revision:"e9940a091134bf417d7d3ce2c8a9efe0"},{url:"/_next/static/jYBkucM9rjOxlhdMkbAvk/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/jYBkucM9rjOxlhdMkbAvk/pages/%5Bid%5D.js",revision:"4b3ec6739626529d651f15db6e9a6d5a"},{url:"/_next/static/jYBkucM9rjOxlhdMkbAvk/pages/%5Bid]/edit.js",revision:"c74c4cebbb00380fbf1b468ca7c91af6"},{url:"/_next/static/jYBkucM9rjOxlhdMkbAvk/pages/_app.js",revision:"fa8daddb110b690291e7670eda9d613b"},{url:"/_next/static/jYBkucM9rjOxlhdMkbAvk/pages/_error.js",revision:"f59ae3464e8f04d7afbad1c9d4506fe4"},{url:"/_next/static/jYBkucM9rjOxlhdMkbAvk/pages/index.js",revision:"ec6e9dd959ce85aa3af9349d07e5513c"},{url:"/_next/static/jYBkucM9rjOxlhdMkbAvk/pages/new.js",revision:"7082ee36575de85372fae24c0821eba0"},{url:"/_next/static/media/brand-icons.278156e41e0ad908cf7f841b17130502.woff2",revision:"e8c322de9658cbeb8a774b6624167c2c"},{url:"/_next/static/media/brand-icons.65a2fb6d9aaa164b41a039302093995b.ttf",revision:"c5ebe0b32dc1b5cc449a76c4204d13bb"},{url:"/_next/static/media/brand-icons.6729d29753e000c17489ed43135ba8d5.svg",revision:"a1a749e89f578a49306ec2b055c073da"},{url:"/_next/static/media/brand-icons.cac87dc00c87a5d74711d0276713808a.woff",revision:"a046592bac8f2fd96e994733faf3858c"},{url:"/_next/static/media/brand-icons.d68fa3e67dbb653a13cec44b1bcabcfe.eot",revision:"13db00b7a34fee4d819ab7f9838cc428"},{url:"/_next/static/media/flags.99f63ae7a743f21ab30847ed06a698d9.png",revision:"9c74e172f87984c48ddf5c8108cabe67"},{url:"/_next/static/media/icons.38c6d8bab26db77d8c806813e1497763.woff2",revision:"0ab54153eeeca0ce03978cc463b257f7"},{url:"/_next/static/media/icons.425399f81e4ce7cbd967685402ba0260.woff",revision:"faff92145777a3cbaf8e7367b4807987"},{url:"/_next/static/media/icons.62d9dae4e0040e81c980950003df0e07.svg",revision:"962a1bf31c081691065fe333d9fa8105"},{url:"/_next/static/media/icons.a01e3f2d6c83dc3aee175e2482b3f777.eot",revision:"8e3c7f5520f5ae906c6cf6d7f3ddcd19"},{url:"/_next/static/media/icons.c656b8caa454ed19b9a2ef7f4f5b8fea.ttf",revision:"b87b9ba532ace76ae9f6edfe9f72ded2"},{url:"/_next/static/media/outline-icons.5367103510b27b78482794590e1ce3b0.ttf",revision:"ad97afd3337e8cda302d10ff5a4026b8"},{url:"/_next/static/media/outline-icons.687a4990ea22bb1a49d469a5d9319790.woff2",revision:"cd6c777f1945164224dee082abaea03a"},{url:"/_next/static/media/outline-icons.752905fa5edf21fc52a10a0c1ca9c7a4.eot",revision:"701ae6abd4719e9c2ada3535a497b341"},{url:"/_next/static/media/outline-icons.9c4845b4b41ef40a22faee76144fa816.svg",revision:"82f60bd0b94a1ed68b1e6e309ce2e8c3"},{url:"/_next/static/media/outline-icons.ddae9b1ba9b0b42f58809904b0b21349.woff",revision:"ef60a4f6c25ef7f39f2d25a748dbecfe"},{url:"/_next/static/runtime/main-a13c242ecfed0f183d23.js",revision:"92e8f45cd6cb632dd093830619512187"},{url:"/_next/static/runtime/polyfills-1b8d17ce58466fbb5d61.js",revision:"0647cc7de93a2bbeed48ecfa1c38e8bb"},{url:"/_next/static/runtime/webpack-1c5199ff66550d26e499.js",revision:"40b4095b5b68a142c856f388ccb756f2"},{url:"/apple-touch-icon.png",revision:"875608d0dc40d89e9b48b94e82489103"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/logo192.png",revision:"d4648d3a77a034c9779548cf57f821b3"},{url:"/logo512.png",revision:"1c6107fb72b46232bd54ba06efc2dc99"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/vercel.svg",revision:"0222c3eef0be0734c8cd707b37c55d7e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));