var JQenModule=(()=>{var _scriptName=globalThis.document?.currentScript?.src;return async function(moduleArg={}){var moduleRtn;var c=moduleArg,aa=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,t=globalThis.process?.versions?.node&&"renderer"!=globalThis.process?.type,u=(a,b)=>{throw b;};"undefined"!=typeof __filename?_scriptName=__filename:r&&(_scriptName=self.location.href);var v="",w,x;
if(t){var fs=require("fs");v=__dirname+"/";x=a=>{a=y(a)?new URL(a):a;return fs.readFileSync(a)};w=async a=>{a=y(a)?new URL(a):a;return fs.readFileSync(a,void 0)};process.argv.slice(2);u=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||r){try{v=(new URL(".",_scriptName)).href}catch{}r&&(x=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});w=async a=>{if(y(a))return new Promise((d,f)=>{var h=new XMLHttpRequest;h.open("GET",a,
!0);h.responseType="arraybuffer";h.onload=()=>{200==h.status||0==h.status&&h.response?d(h.response):f(h.status)};h.onerror=f;h.send(null)});var b=await fetch(a,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw Error(b.status+" : "+b.url);}}console.log.bind(console);var z=console.error.bind(console),A,B=!1,C,y=a=>a.startsWith("file://"),F,G,H,I,J=!1;
function K(){var a=L.buffer;H=new Int8Array(a);new Int16Array(a);I=new Uint8Array(a);new Uint16Array(a);new Int32Array(a);new Uint32Array(a);new Float32Array(a);new Float64Array(a);new BigInt64Array(a);new BigUint64Array(a)}function M(a){c.onAbort?.(a);a="Aborted("+a+")";z(a);B=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");G?.(a);throw a;}var N;
async function ba(a){if(!A)try{var b=await w(a);return new Uint8Array(b)}catch{}if(a==N&&A)a=new Uint8Array(A);else if(x)a=x(a);else throw"both async and sync fetching of the wasm failed";return a}async function ca(a,b){try{var d=await ba(a);return await WebAssembly.instantiate(d,b)}catch(f){z(`failed to asynchronously prepare wasm: ${f}`),M(f)}}
async function da(a){var b=N;if(!A&&!y(b)&&!t)try{var d=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(d,a)}catch(f){z(`wasm streaming compile failed: ${f}`),z("falling back to ArrayBuffer instantiation")}return ca(b,a)}class O{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var P=a=>{for(;0<a.length;)a.shift()(c)},Q=[],R=[],ea=()=>{var a=c.preRun.shift();R.push(a)},S=!0,T=0,U={},V=a=>{C=a;S||0<T||(c.onExit?.(a),B=!0);u(a,new O(a))},fa=a=>{if(!B)try{if(a(),!(S||0<T))try{C=a=C,V(a)}catch(b){b instanceof O||"unwind"==b||u(1,b)}}catch(b){b instanceof O||"unwind"==b||u(1,b)}},ha=new TextDecoder,ja=(a,b,d,f)=>{var h={string:g=>{var l=0;if(null!==g&&void 0!==g&&0!==g){for(var e=l=0;e<g.length;++e){var k=g.charCodeAt(e);127>=k?l++:2047>=k?l+=2:55296<=k&&57343>=k?(l+=4,++e):
l+=3}var p=l+1;e=l=W(p);k=I;if(0<p){p=e+p-1;for(var D=0;D<g.length;++D){var m=g.codePointAt(D);if(127>=m){if(e>=p)break;k[e++]=m}else if(2047>=m){if(e+1>=p)break;k[e++]=192|m>>6;k[e++]=128|m&63}else if(65535>=m){if(e+2>=p)break;k[e++]=224|m>>12;k[e++]=128|m>>6&63;k[e++]=128|m&63}else{if(e+3>=p)break;k[e++]=240|m>>18;k[e++]=128|m>>12&63;k[e++]=128|m>>6&63;k[e++]=128|m&63;D++}}k[e]=0}}return l},array:g=>{var l=W(g.length);H.set(g,l);return l}};a=c["_"+a];var n=[],E=0;if(f)for(var q=0;q<f.length;q++){var Y=
h[d[q]];Y?(0===E&&(E=X()),n[q]=Y(f[q])):n[q]=f[q]}d=a(...n);return d=function(g){0!==E&&ia(E);if("string"===b)if(g){for(var l=g,e=I,k=l+void 0;e[l]&&!(l>=k);)++l;g=ha.decode(I.subarray(g,l))}else g="";else g="boolean"===b?!!g:g;return g}(d)};c.noExitRuntime&&(S=c.noExitRuntime);c.printErr&&(z=c.printErr);c.wasmBinary&&(A=c.wasmBinary);if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.shift()();
c.cwrap=(a,b,d,f)=>{var h=!d||d.every(n=>"number"===n||"boolean"===n);return"string"!==b&&h&&!f?c["_"+a]:(...n)=>ja(a,b,d,n)};
var ka,ia,W,X,L,la={c:()=>M(""),b:()=>{S=!1;T=0},d:(a,b)=>{U[a]&&(clearTimeout(U[a].id),delete U[a]);if(!b)return 0;var d=setTimeout(()=>{delete U[a];fa(()=>ka(a,performance.now()))},b);U[a]={id:d,m:b};return 0},e:a=>{var b=I.length;a>>>=0;if(2147483648<a)return!1;for(var d=1;4>=d;d*=2){var f=b*(1+.2/d);f=Math.min(f,a+100663296);a:{f=(Math.min(2147483648,65536*Math.ceil(Math.max(a,f)/65536))-L.buffer.byteLength+65535)/65536|0;try{L.grow(f);K();var h=1;break a}catch(n){}h=void 0}if(h)return!0}return!1},
a:V},Z;Z=await (async function(){function a(d){d=Z=d.exports;c._JQenRender=d.h;ka=d.i;ia=d.j;W=d.k;X=d.l;L=d.f;K();return Z}var b={a:la};if(c.instantiateWasm)return new Promise(d=>{c.instantiateWasm(b,(f,h)=>{d(a(f,h))})});N??=c.locateFile?c.locateFile("JQen.wasm",v):v+"JQen.wasm";return a((await da(b)).instance)}());
(function(){function a(){c.calledRun=!0;if(!B){J=!0;Z.g();F?.(c);c.onRuntimeInitialized?.();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();Q.push(b)}P(Q)}}if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)ea();P(R);c.setStatus?(c.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>c.setStatus(""),1);a()},1)):a()})();J?moduleRtn=c:moduleRtn=new Promise((a,b)=>{F=a;G=b});
;return moduleRtn}})();if(typeof exports==="object"&&typeof module==="object"){module.exports=JQenModule;module.exports.default=JQenModule}else if(typeof define==="function"&&define["amd"])define([],()=>JQenModule);
const LoadJQenRender = () => {
    return JQenModule().then((i) => {
        i.JQenRender = i.cwrap(
            "JQenRender",
            "string",
            ["string", "number", "string", "number", "string", "number"]
        );

        return (a, b, c = "") => {
            return i.JQenRender(
                a,
                a.length,
                b,
                b.length,
                c,
                c.length
            );
        };
    });
};
