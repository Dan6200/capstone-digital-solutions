(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{9738:function(e,t,n){var r=n(3454);let i=n(6647),o=n(1864),s=n(3461),a=n(9968),l=a.version,c=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function u(e){console.log(`[dotenv@${l}][DEBUG] ${e}`)}let d={config:function(e){let t=o.resolve(r.cwd(),".env"),n="utf8",a=Boolean(e&&e.debug),l=Boolean(e&&e.override);if(e){if(null!=e.path){var c;t="~"===(c=e.path)[0]?o.join(s.homedir(),c.slice(1)):c}null!=e.encoding&&(n=e.encoding)}try{let e=d.parse(i.readFileSync(t,{encoding:n}));return Object.keys(e).forEach(function(t){Object.prototype.hasOwnProperty.call(r.env,t)?(!0===l&&(r.env[t]=e[t]),a&&(!0===l?u(`"${t}" is already defined in \`process.env\` and WAS overwritten`):u(`"${t}" is already defined in \`process.env\` and was NOT overwritten`))):r.env[t]=e[t]}),{parsed:e}}catch(e){return a&&u(`Failed to load ${t} ${e.message}`),{error:e}}},parse:function(e){let t;let n={},r=e.toString();for(r=r.replace(/\r\n?/mg,"\n");null!=(t=c.exec(r));){let e=t[1],r=t[2]||"";r=r.trim();let i=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),'"'===i&&(r=(r=r.replace(/\\n/g,"\n")).replace(/\\r/g,"\r")),n[e]=r}return n}};e.exports.config=d.config,e.exports.parse=d.parse,e.exports=d},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1382:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(2678)}])},2678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),i=n(7294);let o={_origin:"https://api.emailjs.com"},s=(e,t="https://api.emailjs.com")=>{o._userID=e,o._origin=t},a=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}let c=(e,t,n={})=>new Promise((r,i)=>{let s=new XMLHttpRequest;s.addEventListener("load",({target:e})=>{let t=new l(e);200===t.status||"OK"===t.text?r(t):i(t)}),s.addEventListener("error",({target:e})=>{i(new l(e))}),s.open("POST",o._origin+e,!0),Object.keys(n).forEach(e=>{s.setRequestHeader(e,n[e])}),s.send(t)}),u=(e,t,n,r)=>{let i=r||o._userID;return a(i,e,t),c("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},d=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},f=(e,t,n,r)=>{let i=r||o._userID,s=d(n);a(i,e,t);let l=new FormData(s);return l.append("lib_version","3.10.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),c("/api/v1.0/email/send-form",l)};var p={init:s,send:u,sendForm:f},m=n(9738);n.n(m)().config();let h=[{name:"user_name",type:"text",text:"Your Name",style:""},{name:"user_email",text:"Your Email",type:"email",style:""},{name:"user_budget",text:"Your Budget",type:"text",style:""}],v="font-paragraph focus-visible:outline-none focus:border-[1px] focus:border-primary rounded-md mb-[3vw] lg:mb-[1vw] border-[1px] w-full bg-black-400 text-black-700 border-black-500 p-[2vw] lg:p-[1vw] xl:p-[5pt]",g=()=>{let e=(0,i.useRef)(),[t,n]=(0,i.useState)(!1),[o,s]=(0,i.useState)(!1),a=t=>{t.preventDefault(),p.sendForm("service_qttm04n","template_1tjlcbi",e.current,"YdianrNeKp4wjDitD").then(e=>{"OK"===e.text&&(n(!0),setTimeout(()=>n(!1),4e3))},e=>{e&&(s(!0),setTimeout(()=>n(!1),4e3))})};return(0,r.jsxs)("div",{className:"pt-[35vw] sm:pt-[25vw] md:pt-[15vw] lg:pt-[7vw] text-3xl xl:text-sm lg:text-lg md:text-2xl sm:text-3xl flex lg:flex-row flex-col gap-[5vw] lg:gap-[3vw] justify-between w-[80%] sm:w-[70%] lg:w-[80%] mx-auto bg-color",children:[(0,r.jsx)("div",{className:"my-auto text-5xl font-semibold text-center capitalize lg:text-left md:text-3xl lg:text-2xl sm:text-4xl text-black-900 font-heading",children:(0,r.jsx)("h3",{children:"One-Stop shop for your business's digital needs..."})}),(0,r.jsx)("div",{className:"fixed top-[20vh] w-[90%] ml-[-5%] shadow-md sm:w-[70%] sm:ml-0 lg:w-[50vw] lg:left-[50%] lg:ml-[-25vw] z-10 invisible mx-auto flex justify-center items-center bg-red-400 h-[10vh] xl:h-[5vh] transition-all rounded-md",style:{...o?{visibility:"visible"}:null},children:(0,r.jsx)("p",{className:"mx-auto w-[80%] text-center my-[5%] text-white capitalize",children:"something went wrong, please try again later"})}),(0,r.jsx)("div",{className:"fixed top-[20vh] w-[90%] ml-[-5%] shadow-md sm:w-[70%] sm:ml-0 lg:w-[50vw] lg:left-[50%] lg:ml-[-25vw] z-10 invisible mx-auto flex justify-center items-center bg-primary h-[10vh] xl:h-[5vh] transition-all rounded-md",style:{...t?{visibility:"visible"}:null},children:(0,r.jsx)("p",{className:"mx-auto w-[80%] text-center text-white font-semibold capitalize",children:"your message was sent successfully. you will soon receive a response"})}),(0,r.jsxs)("form",{ref:e,onSubmit:a,className:"w-full lg:w-[70%] xl:w-[60%] mx-auto",children:[h.map(e=>"user_budget"!=e.name&&(0,r.jsx)("input",{name:e.name,type:e.type,placeholder:e.text,className:v},e.name)),(0,r.jsx)("textarea",{name:"message",placeholder:"Describe What Services Your Business Requires",className:"font-paragraph w-full resize-none focus-visible:outline-none focus:border-[1px] focus:border-primary rounded-md lg:mb-[1vw] mb-[3vw] border-[1px] bg-black-400 text-black-700 border-black-500 xl:p-[5pt] lg:p-[1vw] p-[2vw] lg:h-[15vw] h-[30vw]"}),(0,r.jsx)("input",{name:h[2].name,type:h[2].type,placeholder:h[2].text,className:v}),(0,r.jsxs)("button",{className:"block h-auto w-full xl:leading-[4vw] lg:leading-[6vw] sm:leading-[10vw] md:leading-[9vw] leading-[15vw] rounded-md bg-gradient-to-br from-secondary to-primary",children:[(0,r.jsx)("span",{className:"inline lg:mr-[1.5vw] mr-[5vw] font-semibold text-white uppercase font-heading",children:"send message"}),(0,r.jsx)("svg",{className:"inline",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M27.5002 0.450166L1.50021 15.4439C-0.649788 16.6877 -0.443538 19.8689 1.85646 20.8127L9.00021 23.7689V29.0439C9.00021 31.9439 12.7002 33.1377 14.4127 30.8314L17.1502 27.1377L24.144 30.0252C24.5127 30.1752 24.9002 30.2502 25.2877 30.2502C25.8002 30.2502 26.3065 30.1189 26.7627 29.8627C27.5627 29.4127 28.1127 28.6127 28.2565 27.7064L31.969 3.50642C32.3502 1.00017 29.6627 -0.793584 27.5002 0.450166ZM12.0002 29.0439V25.0064L14.2877 25.9502L12.0002 29.0439ZM25.2877 27.2502L15.6752 23.2814L24.4377 10.6377C25.1065 9.66892 23.844 8.54392 22.9565 9.31267L9.73771 20.8314L3.00021 18.0439L29.0002 3.04392L25.2877 27.2502Z",fill:"#FFFCF7"})})]})]})]})},x=()=>(0,r.jsx)(g,{});var b=x},3461:function(e){var t,n;"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab="//"),(n=t={}).endianness=function(){return"LE"},n.hostname=function(){return"undefined"!=typeof location?location.hostname:""},n.loadavg=function(){return[]},n.uptime=function(){return 0},n.freemem=function(){return Number.MAX_VALUE},n.totalmem=function(){return Number.MAX_VALUE},n.cpus=function(){return[]},n.type=function(){return"Browser"},n.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},n.networkInterfaces=n.getNetworkInterfaces=function(){return{}},n.arch=function(){return"javascript"},n.platform=function(){return"browser"},n.tmpdir=n.tmpDir=function(){return"/tmp"},n.EOL="\n",n.homedir=function(){return"/"},e.exports=t},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,o=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else if(47===n)break;else n=47;if(47===n){if(o===a-1||1===s);else if(o!==a-1&&2===s){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",i=0):i=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),o=a,s=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=a,s=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(o+1,a):r=e.slice(o+1,a),i=a-o-1;o=a,s=0}else 46===n&&-1!==s?++s:s=-1}return r}var r={resolve:function(){for(var e,r,i="",o=!1,s=arguments.length-1;s>=-1&&!o;s--)s>=0?r=arguments[s]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(i=r+"/"+i,o=47===r.charCodeAt(0));return(i=n(i,!o),o)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,s=o-i,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var l=n.length-a,c=s<l?s:l,u=-1,d=0;d<=c;++d){if(d===c){if(l>c){if(47===n.charCodeAt(a+d))return n.slice(a+d+1);if(0===d)return n.slice(a+d)}else s>c&&(47===e.charCodeAt(i+d)?u=d:0===d&&(u=0));break}var f=e.charCodeAt(i+d);if(f!==n.charCodeAt(a+d))break;47===f&&(u=d)}var p="";for(d=i+u+1;d<=o;++d)(d===o||47===e.charCodeAt(d))&&(0===p.length?p+="..":p+="/..");return p.length>0?p+n.slice(a+u):(a+=u,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(n=e.charCodeAt(s))){if(!o){i=s;break}}else o=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,o=-1,s=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,l=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!s){i=r+1;break}}else -1===l&&(s=!1,l=r+1),a>=0&&(c===n.charCodeAt(a)?-1==--a&&(o=r):(a=-1,o=l))}return i===o?o=l:-1===o&&(o=e.length),e.slice(i,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!s){i=r+1;break}}else -1===o&&(s=!1,o=r+1);return -1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,o=!0,s=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(47===l){if(!o){r=a+1;break}continue}-1===i&&(o=!1,i=a+1),46===l?-1===n?n=a:1!==s&&(s=1):-1!==n&&(s=-1)}return -1===n||-1===i||0===s||1===s&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var s=-1,a=0,l=-1,c=!0,u=e.length-1,d=0;u>=n;--u){if(47===(i=e.charCodeAt(u))){if(!c){a=u+1;break}continue}-1===l&&(c=!1,l=u+1),46===i?-1===s?s=u:1!==d&&(d=1):-1!==s&&(d=-1)}return -1===s||-1===l||0===d||1===d&&s===l-1&&s===a+1?-1!==l&&(0===a&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(a,l)):(0===a&&o?(r.name=e.slice(1,s),r.base=e.slice(1,l)):(r.name=e.slice(a,s),r.base=e.slice(a,l)),r.ext=e.slice(s,l)),a>0?r.dir=e.slice(0,a-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,r),s=!1}finally{s&&delete n[e]}return o.exports}r.ab="//";var i=r(114);e.exports=i}()},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var l=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,r),s=!1}finally{s&&delete n[e]}return o.exports}r.ab="//";var i=r(229);e.exports=i}()},6647:function(){},9968:function(e){"use strict";e.exports=JSON.parse('{"name":"dotenv","version":"16.0.3","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"require":"./lib/main.js","types":"./lib/main.d.ts","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^17.0.9","decache":"^4.6.1","dtslint":"^3.7.0","sinon":"^12.0.1","standard":"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2","tap":"^15.1.6","tar":"^6.1.11","typescript":"^4.5.4"},"engines":{"node":">=12"}}')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);