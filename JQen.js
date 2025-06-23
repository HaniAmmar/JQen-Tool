var JQenModule = (() => {
  var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  return (
async function(moduleArg = {}) {
  var moduleRtn;

var c=moduleArg,aa="object"==typeof window,q="undefined"!=typeof WorkerGlobalScope,t="object"==typeof process&&process.versions?.node&&"renderer"!=process.type,u=(a,b)=>{throw b;};"undefined"!=typeof __filename?_scriptName=__filename:q&&(_scriptName=self.location.href);var v="",w,x;
if(t){var fs=require("fs");v=__dirname+"/";x=a=>{a=y(a)?new URL(a):a;return fs.readFileSync(a)};w=async a=>{a=y(a)?new URL(a):a;return fs.readFileSync(a,void 0)};process.argv.slice(2);u=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||q){try{v=(new URL(".",_scriptName)).href}catch{}q&&(x=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});w=async a=>{if(y(a))return new Promise((d,f)=>{var h=new XMLHttpRequest;h.open("GET",a,
!0);h.responseType="arraybuffer";h.onload=()=>{200==h.status||0==h.status&&h.response?d(h.response):f(h.status)};h.onerror=f;h.send(null)});var b=await fetch(a,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw Error(b.status+" : "+b.url);}}console.log.bind(console);var z=console.error.bind(console),A,B=!1,C,y=a=>a.startsWith("file://"),D,E,F,I,J,K=!1;
function L(){var a=F.buffer;I=new Int8Array(a);new Int16Array(a);J=new Uint8Array(a);new Uint16Array(a);new Int32Array(a);new Uint32Array(a);new Float32Array(a);new Float64Array(a);new BigInt64Array(a);new BigUint64Array(a)}var M=0,N=null;function O(a){c.onAbort?.(a);a="Aborted("+a+")";z(a);B=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");E?.(a);throw a;}var P;
async function ca(a){if(!A)try{var b=await w(a);return new Uint8Array(b)}catch{}if(a==P&&A)a=new Uint8Array(A);else if(x)a=x(a);else throw"both async and sync fetching of the wasm failed";return a}async function da(a,b){try{var d=await ca(a);return await WebAssembly.instantiate(d,b)}catch(f){z(`failed to asynchronously prepare wasm: ${f}`),O(f)}}
async function ea(a){var b=P;if(!A&&"function"==typeof WebAssembly.instantiateStreaming&&!y(b)&&!t)try{var d=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(d,a)}catch(f){z(`wasm streaming compile failed: ${f}`),z("falling back to ArrayBuffer instantiation")}return da(b,a)}class Q{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var R=a=>{for(;0<a.length;)a.shift()(c)},S=[],T=[],fa=()=>{var a=c.preRun.shift();T.push(a)},U=!0,V=0,W={},ha=a=>{C=a;U||0<V||(c.onExit?.(a),B=!0);u(a,new Q(a))},ia=a=>{if(!B)try{if(a(),!(U||0<V))try{C=a=C,ha(a)}catch(b){b instanceof Q||"unwind"==b||u(1,b)}}catch(b){b instanceof Q||"unwind"==b||u(1,b)}},ja=new TextDecoder,ma=(a,b,d,f)=>{var h={string:g=>{var l=0;if(null!==g&&void 0!==g&&0!==g){for(var e=l=0;e<g.length;++e){var k=g.charCodeAt(e);127>=k?l++:2047>=k?l+=2:55296<=k&&57343>=k?(l+=4,++e):
l+=3}var p=l+1;e=l=X(p);k=J;if(0<p){p=e+p-1;for(var G=0;G<g.length;++G){var m=g.codePointAt(G);if(127>=m){if(e>=p)break;k[e++]=m}else if(2047>=m){if(e+1>=p)break;k[e++]=192|m>>6;k[e++]=128|m&63}else if(65535>=m){if(e+2>=p)break;k[e++]=224|m>>12;k[e++]=128|m>>6&63;k[e++]=128|m&63}else{if(e+3>=p)break;k[e++]=240|m>>18;k[e++]=128|m>>12&63;k[e++]=128|m>>6&63;k[e++]=128|m&63;G++}}k[e]=0}}return l},array:g=>{var l=X(g.length);I.set(g,l);return l}};a=c["_"+a];var n=[],H=0;if(f)for(var r=0;r<f.length;r++){var ba=
h[d[r]];ba?(0===H&&(H=ka()),n[r]=ba(f[r])):n[r]=f[r]}d=a(...n);return d=function(g){0!==H&&la(H);if("string"===b)if(g){for(var l=g+NaN,e=g;!(e>=l)&&J[e];)++e;g=ja.decode(J.subarray(g,e))}else g="";else g="boolean"===b?!!g:g;return g}(d)};c.noExitRuntime&&(U=c.noExitRuntime);c.printErr&&(z=c.printErr);c.wasmBinary&&(A=c.wasmBinary);c.cwrap=(a,b,d,f)=>{var h=!d||d.every(n=>"number"===n||"boolean"===n);return"string"!==b&&h&&!f?c["_"+a]:(...n)=>ma(a,b,d,n)};
var na,la,X,ka,oa={c:()=>O(""),b:()=>{U=!1;V=0},d:(a,b)=>{W[a]&&(clearTimeout(W[a].id),delete W[a]);if(!b)return 0;var d=setTimeout(()=>{delete W[a];ia(()=>na(a,performance.now()))},b);W[a]={id:d,m:b};return 0},e:a=>{var b=J.length;a>>>=0;if(2147483648<a)return!1;for(var d=1;4>=d;d*=2){var f=b*(1+.2/d);f=Math.min(f,a+100663296);a:{f=(Math.min(2147483648,65536*Math.ceil(Math.max(a,f)/65536))-F.buffer.byteLength+65535)/65536|0;try{F.grow(f);L();var h=1;break a}catch(n){}h=void 0}if(h)return!0}return!1},
a:ha},Y=await (async function(){function a(d){Y=d.exports;F=Y.f;L();d=Y;c._JQen_Render=d.h;na=d.i;la=d.j;X=d.k;ka=d.l;M--;c.monitorRunDependencies?.(M);0==M&&N&&(d=N,N=null,d());return Y}M++;c.monitorRunDependencies?.(M);var b={a:oa};if(c.instantiateWasm)return new Promise(d=>{c.instantiateWasm(b,(f,h)=>{d(a(f,h))})});P??=c.locateFile?c.locateFile("JQen.wasm",v):v+"JQen.wasm";return a((await ea(b)).instance)}());
function Z(){function a(){c.calledRun=!0;if(!B){K=!0;Y.g();D?.(c);c.onRuntimeInitialized?.();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();S.push(b)}R(S)}}if(0<M)N=Z;else{if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)fa();R(T);0<M?N=Z:c.setStatus?(c.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>c.setStatus(""),1);a()},1)):a()}}
if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.shift()();Z();K?moduleRtn=c:moduleRtn=new Promise((a,b)=>{D=a;E=b});


  return moduleRtn;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = JQenModule;
  // This default export looks redundant, but it allows TS to import this
  // commonjs style module.
  module.exports.default = JQenModule;
} else if (typeof define === 'function' && define['amd'])
  define([], () => JQenModule);
