var JQenModule=(()=>{var _scriptName=globalThis.document?.currentScript?.src;return async function(moduleArg={}){var Module=moduleArg;var q=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,t=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer",u=(a,b)=>{throw b;};typeof __filename!="undefined"?_scriptName=__filename:r&&(_scriptName=self.location.href);var v="",w,x;
if(t){var fs=require("node:fs");v=__dirname+"/";x=a=>{a=y(a)?new URL(a):a;return fs.readFileSync(a)};w=async a=>{a=y(a)?new URL(a):a;return fs.readFileSync(a,void 0)};process.argv.slice(2);u=(a,b)=>{process.exitCode=a;throw b;}}else if(q||r){try{v=(new URL(".",_scriptName)).href}catch{}r&&(x=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});w=async a=>{if(y(a))return new Promise((f,c)=>{var k=new XMLHttpRequest;k.open("GET",
a,!0);k.responseType="arraybuffer";k.onload=()=>{k.status==200||k.status==0&&k.response?f(k.response):c(k.status)};k.onerror=c;k.send(null)});var b=await fetch(a,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw Error(b.status+" : "+b.url);}}console.log.bind(console);var z=console.error.bind(console),A=!1,D,y=a=>a.startsWith("file://");function E(){var a=Module.preRun;a&&(typeof a=="function"&&(a=[a]),F.push(...a));for(a=F;a.length>0;)a.shift()(Module)}
function G(){var a=Module.postRun;a&&(typeof a=="function"&&(a=[a]),H.push(...a));for(a=H;a.length>0;)a.shift()(Module)}function I(a){Module.onAbort?.(a);a=`Aborted(${a})`;z(a);A=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var J;async function K(a){try{var b=await w(a);return new Uint8Array(b)}catch{}if(x)a=x(a);else throw"both async and sync fetching of the wasm failed";return a}
async function aa(a,b){try{var f=await K(a);return await WebAssembly.instantiate(f,b)}catch(c){z(`failed to asynchronously prepare wasm: ${c}`),I(c)}}async function ba(a){var b=J;if(!y(b)&&!t)try{var f=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(f,a)}catch(c){z(`wasm streaming compile failed: ${c}`),z("falling back to ArrayBuffer instantiation")}return aa(b,a)}
class L{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var M,N,H=[],F=[],O=!0,P=0,Q={},S=a=>{D=a;O||P>0||(Module.onExit?.(a),A=!0);u(a,new L(a))},ca=a=>{if(!A)try{a()}catch(b){b instanceof L||b=="unwind"||u(1,b)}finally{if(!(O||P>0))try{D=a=D,S(a)}catch(b){b instanceof L||b=="unwind"||u(1,b)}}},da=new TextDecoder,ea=(a,b,f,c)=>{var k={string:e=>{var h=0;if(e!==null&&e!==void 0&&e!==0){for(var d=h=0;d<e.length;++d){var g=e.charCodeAt(d);g<=127?h++:g<=2047?h+=2:g>=55296&&g<=57343?(h+=4,++d):h+=3}var m=h+1;d=h=T(m);g=N;if(m>0){m=d+m-1;for(var B=0;B<e.length;++B){var l=
e.codePointAt(B);if(l<=127){if(d>=m)break;g[d++]=l}else if(l<=2047){if(d+1>=m)break;g[d++]=192|l>>6;g[d++]=128|l&63}else if(l<=65535){if(d+2>=m)break;g[d++]=224|l>>12;g[d++]=128|l>>6&63;g[d++]=128|l&63}else{if(d+3>=m)break;g[d++]=240|l>>18;g[d++]=128|l>>12&63;g[d++]=128|l>>6&63;g[d++]=128|l&63;B++}}g[d]=0}}return h},array:e=>{var h=T(e.length);M.set(e,h);return h}};a=Module["_"+a];var n=[],C=0;if(c)for(var p=0;p<c.length;p++){var R=k[f[p]];R?(C===0&&(C=U()),n[p]=R(c[p])):n[p]=c[p]}f=a(...n);return f=
function(e){C!==0&&V(C);if(b==="string")if(e){for(var h=e,d=N,g=h+NaN;d[h]&&!(h>=g);)++h;e=da.decode(N.subarray(e,h))}else e="";else e=b==="boolean"?!!e:e;return e}(f)};Module.noExitRuntime&&(O=Module.noExitRuntime);Module.printErr&&(z=Module.printErr);var W=Module.preInit;if(W)for(typeof W=="function"&&(Module.preInit=W=[W]);W.length>0;)W.shift()();Module.cwrap=(a,b,f,c)=>{var k=!f||f.every(n=>n==="number"||n==="boolean");return b!=="string"&&k&&!c?Module["_"+a]:(...n)=>ea(a,b,f,n)};
var X,V,T,U,Y,fa={e:()=>I(""),d:()=>{O=!1;P=0},a:(a,b)=>{Q[a]&&(clearTimeout(Q[a].id),delete Q[a]);if(!b)return 0;var f=setTimeout(()=>{delete Q[a];ca(()=>X(a,performance.now()))},b);Q[a]={id:f,m:b};return 0},b:()=>{I("OOM")},c:S},Z;
Z=await (async function(){function a(c){c=Z=c.exports;Module._JQenRender=c.h;X=c.i;V=c.j;T=c.k;U=c.l;Y=c.f;c=Y.buffer;M=new Int8Array(c);new Int16Array(c);N=new Uint8Array(c);new Uint16Array(c);new Int32Array(c);new Uint32Array(c);new Float32Array(c);new Float64Array(c);new BigInt64Array(c);new BigUint64Array(c);return Z}var b={a:fa},f=Module.instantiateWasm;if(f)return new Promise(c=>{f(b,k=>c(a(k)))});J??=Module.locateFile?Module.locateFile("JQen.wasm",v):v+"JQen.wasm";return function(c){return a(c.instance)}(await ba(b))}());
await (async function(){E();var a=Module.setStatus;a&&(a("Running..."),await new Promise(b=>setTimeout(b,1)),setTimeout(a,1,""));A||(Z.g(),Module.onRuntimeInitialized?.(),G())}());
;return Module}})();if(typeof exports==="object"&&typeof module==="object"){module.exports=JQenModule;module.exports.default=JQenModule}else if(typeof define==="function"&&define["amd"])define([],()=>JQenModule);
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
