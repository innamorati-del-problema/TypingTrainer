const uh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};uh();function kr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const hh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fh=kr(hh);function Cc(t){return!!t||t===""}function Mr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ye(s)?_h(s):Mr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ye(t))return t;if(fe(t))return t}}const dh=/;(?![^(]*\))/g,ph=/:(.+)/;function _h(t){const e={};return t.split(dh).forEach(n=>{if(n){const s=n.split(ph);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function es(t){let e="";if(ye(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=es(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function gh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ai(t[s],e[s]);return n}function ai(t,e){if(t===e)return!0;let n=Wo(t),s=Wo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=F(t),s=F(e),n||s)return n&&s?gh(t,e):!1;if(n=fe(t),s=fe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ai(t[o],e[o]))return!1}}return String(t)===String(e)}function mh(t,e){return t.findIndex(n=>ai(n,e))}const Mv=t=>ye(t)?t:t==null?"":F(t)||fe(t)&&(t.toString===Ic||!U(t.toString))?JSON.stringify(t,bc,2):String(t),bc=(t,e)=>e&&e.__v_isRef?bc(t,e.value):fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:hi(e)?{[`Set(${e.size})`]:[...e.values()]}:fe(e)&&!F(e)&&!Tc(e)?String(e):e,ne={},hn=[],je=()=>{},yh=()=>!1,vh=/^on[^a-z]/,ui=t=>vh.test(t),Dr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Lr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Eh=Object.prototype.hasOwnProperty,z=(t,e)=>Eh.call(t,e),F=Array.isArray,fn=t=>fi(t)==="[object Map]",hi=t=>fi(t)==="[object Set]",Wo=t=>t instanceof Date,U=t=>typeof t=="function",ye=t=>typeof t=="string",Fr=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",wc=t=>fe(t)&&U(t.then)&&U(t.catch),Ic=Object.prototype.toString,fi=t=>Ic.call(t),Ch=t=>fi(t).slice(8,-1),Tc=t=>fi(t)==="[object Object]",Br=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,As=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),di=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bh=/-(\w)/g,tt=di(t=>t.replace(bh,(e,n)=>n?n.toUpperCase():"")),wh=/\B([A-Z])/g,Tn=di(t=>t.replace(wh,"-$1").toLowerCase()),pi=di(t=>t.charAt(0).toUpperCase()+t.slice(1)),Li=di(t=>t?`on${pi(t)}`:""),ts=(t,e)=>!Object.is(t,e),Ps=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ls=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $o;const Ih=()=>$o||($o=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Xe;class Th{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Xe&&(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Xe;try{return Xe=this,e()}finally{Xe=n}}}on(){Xe=this}off(){Xe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Sh(t,e=Xe){e&&e.active&&e.effects.push(t)}const Hr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sc=t=>(t.w&St)>0,Rc=t=>(t.n&St)>0,Rh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=St},xh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Sc(i)&&!Rc(i)?i.delete(t):e[n++]=i,i.w&=~St,i.n&=~St}e.length=n}},Xi=new WeakMap;let Wn=0,St=1;const Ji=30;let He;const Ut=Symbol(""),Zi=Symbol("");class Ur{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sh(this,s)}run(){if(!this.active)return this.fn();let e=He,n=wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,wt=!0,St=1<<++Wn,Wn<=Ji?Rh(this):Vo(this),this.fn()}finally{Wn<=Ji&&xh(this),St=1<<--Wn,He=this.parent,wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Vo(this),this.onStop&&this.onStop(),this.active=!1)}}function Vo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wt=!0;const xc=[];function Sn(){xc.push(wt),wt=!1}function Rn(){const t=xc.pop();wt=t===void 0?!0:t}function Le(t,e,n){if(wt&&He){let s=Xi.get(t);s||Xi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Hr()),Nc(i)}}function Nc(t,e){let n=!1;Wn<=Ji?Rc(t)||(t.n|=St,n=!Sc(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function ut(t,e,n,s,i,r){const o=Xi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,a)=>{(a==="length"||a>=s)&&l.push(c)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":F(t)?Br(n)&&l.push(o.get("length")):(l.push(o.get(Ut)),fn(t)&&l.push(o.get(Zi)));break;case"delete":F(t)||(l.push(o.get(Ut)),fn(t)&&l.push(o.get(Zi)));break;case"set":fn(t)&&l.push(o.get(Ut));break}if(l.length===1)l[0]&&er(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);er(Hr(c))}}function er(t,e){for(const n of F(t)?t:[...t])(n!==He||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Nh=kr("__proto__,__v_isRef,__isVue"),Ac=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Fr)),Ah=Wr(),Ph=Wr(!1,!0),Oh=Wr(!0),jo=kh();function kh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Q(this);for(let r=0,o=this.length;r<o;r++)Le(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Q)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sn();const s=Q(this)[e].apply(this,n);return Rn(),s}}),t}function Wr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Yh:Dc:e?Mc:kc).get(s))return s;const o=F(s);if(!t&&o&&z(jo,i))return Reflect.get(jo,i,r);const l=Reflect.get(s,i,r);return(Fr(i)?Ac.has(i):Nh(i))||(t||Le(s,"get",i),e)?l:Ce(l)?!o||!Br(i)?l.value:l:fe(l)?t?Lc(l):ms(l):l}}const Mh=Pc(),Dh=Pc(!0);function Pc(t=!1){return function(n,s,i,r){let o=n[s];if(ns(o)&&Ce(o)&&!Ce(i))return!1;if(!t&&!ns(i)&&(Fc(i)||(i=Q(i),o=Q(o)),!F(n)&&Ce(o)&&!Ce(i)))return o.value=i,!0;const l=F(n)&&Br(s)?Number(s)<n.length:z(n,s),c=Reflect.set(n,s,i,r);return n===Q(r)&&(l?ts(i,o)&&ut(n,"set",s,i):ut(n,"add",s,i)),c}}function Lh(t,e){const n=z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ut(t,"delete",e,void 0),s}function Fh(t,e){const n=Reflect.has(t,e);return(!Fr(e)||!Ac.has(e))&&Le(t,"has",e),n}function Bh(t){return Le(t,"iterate",F(t)?"length":Ut),Reflect.ownKeys(t)}const Oc={get:Ah,set:Mh,deleteProperty:Lh,has:Fh,ownKeys:Bh},Hh={get:Oh,set(t,e){return!0},deleteProperty(t,e){return!0}},Uh=Te({},Oc,{get:Ph,set:Dh}),$r=t=>t,_i=t=>Reflect.getPrototypeOf(t);function ws(t,e,n=!1,s=!1){t=t.__v_raw;const i=Q(t),r=Q(e);e!==r&&!n&&Le(i,"get",e),!n&&Le(i,"get",r);const{has:o}=_i(i),l=s?$r:n?qr:ss;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Is(t,e=!1){const n=this.__v_raw,s=Q(n),i=Q(t);return t!==i&&!e&&Le(s,"has",t),!e&&Le(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Ts(t,e=!1){return t=t.__v_raw,!e&&Le(Q(t),"iterate",Ut),Reflect.get(t,"size",t)}function qo(t){t=Q(t);const e=Q(this);return _i(e).has.call(e,t)||(e.add(t),ut(e,"add",t,t)),this}function zo(t,e){e=Q(e);const n=Q(this),{has:s,get:i}=_i(n);let r=s.call(n,t);r||(t=Q(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ts(e,o)&&ut(n,"set",t,e):ut(n,"add",t,e),this}function Ko(t){const e=Q(this),{has:n,get:s}=_i(e);let i=n.call(e,t);i||(t=Q(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ut(e,"delete",t,void 0),r}function Go(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&ut(t,"clear",void 0,void 0),n}function Ss(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Q(o),c=e?$r:t?qr:ss;return!t&&Le(l,"iterate",Ut),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Rs(t,e,n){return function(...s){const i=this.__v_raw,r=Q(i),o=fn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?$r:e?qr:ss;return!e&&Le(r,"iterate",c?Zi:Ut),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function mt(t){return function(...e){return t==="delete"?!1:this}}function Wh(){const t={get(r){return ws(this,r)},get size(){return Ts(this)},has:Is,add:qo,set:zo,delete:Ko,clear:Go,forEach:Ss(!1,!1)},e={get(r){return ws(this,r,!1,!0)},get size(){return Ts(this)},has:Is,add:qo,set:zo,delete:Ko,clear:Go,forEach:Ss(!1,!0)},n={get(r){return ws(this,r,!0)},get size(){return Ts(this,!0)},has(r){return Is.call(this,r,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ss(!0,!1)},s={get(r){return ws(this,r,!0,!0)},get size(){return Ts(this,!0)},has(r){return Is.call(this,r,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Rs(r,!1,!1),n[r]=Rs(r,!0,!1),e[r]=Rs(r,!1,!0),s[r]=Rs(r,!0,!0)}),[t,n,e,s]}const[$h,Vh,jh,qh]=Wh();function Vr(t,e){const n=e?t?qh:jh:t?Vh:$h;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(z(n,i)&&i in s?n:s,i,r)}const zh={get:Vr(!1,!1)},Kh={get:Vr(!1,!0)},Gh={get:Vr(!0,!1)},kc=new WeakMap,Mc=new WeakMap,Dc=new WeakMap,Yh=new WeakMap;function Qh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xh(t){return t.__v_skip||!Object.isExtensible(t)?0:Qh(Ch(t))}function ms(t){return ns(t)?t:jr(t,!1,Oc,zh,kc)}function Jh(t){return jr(t,!1,Uh,Kh,Mc)}function Lc(t){return jr(t,!0,Hh,Gh,Dc)}function jr(t,e,n,s,i){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Xh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function dn(t){return ns(t)?dn(t.__v_raw):!!(t&&t.__v_isReactive)}function ns(t){return!!(t&&t.__v_isReadonly)}function Fc(t){return!!(t&&t.__v_isShallow)}function Bc(t){return dn(t)||ns(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function Hc(t){return Ls(t,"__v_skip",!0),t}const ss=t=>fe(t)?ms(t):t,qr=t=>fe(t)?Lc(t):t;function Uc(t){wt&&He&&(t=Q(t),Nc(t.dep||(t.dep=Hr())))}function Wc(t,e){t=Q(t),t.dep&&er(t.dep)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function $c(t){return Vc(t,!1)}function Zh(t){return Vc(t,!0)}function Vc(t,e){return Ce(t)?t:new ef(t,e)}class ef{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:ss(e)}get value(){return Uc(this),this._value}set value(e){e=this.__v_isShallow?e:Q(e),ts(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ss(e),Wc(this))}}function jn(t){return Ce(t)?t.value:t}const tf={get:(t,e,n)=>jn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ce(i)&&!Ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function jc(t){return dn(t)?t:new Proxy(t,tf)}class nf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ur(e,()=>{this._dirty||(this._dirty=!0,Wc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Q(this);return Uc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sf(t,e,n=!1){let s,i;const r=U(t);return r?(s=t,i=je):(s=t.get,i=t.set),new nf(s,i,r||!i,n)}function It(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){gi(r,e,n)}return i}function qe(t,e,n,s){if(U(t)){const r=It(t,e,n,s);return r&&wc(r)&&r.catch(o=>{gi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(qe(t[r],e,n,s));return i}function gi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){It(c,null,10,[t,o,l]);return}}rf(t,n,i,s)}function rf(t,e,n,s=!0){console.error(t)}let Bs=!1,tr=!1;const De=[];let ot=0;const qn=[];let $n=null,ln=0;const zn=[];let Et=null,cn=0;const qc=Promise.resolve();let zr=null,nr=null;function zc(t){const e=zr||qc;return t?e.then(this?t.bind(this):t):e}function of(t){let e=ot+1,n=De.length;for(;e<n;){const s=e+n>>>1;is(De[s])<t?e=s+1:n=s}return e}function Kc(t){(!De.length||!De.includes(t,Bs&&t.allowRecurse?ot+1:ot))&&t!==nr&&(t.id==null?De.push(t):De.splice(of(t.id),0,t),Gc())}function Gc(){!Bs&&!tr&&(tr=!0,zr=qc.then(Xc))}function lf(t){const e=De.indexOf(t);e>ot&&De.splice(e,1)}function Yc(t,e,n,s){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Gc()}function cf(t){Yc(t,$n,qn,ln)}function af(t){Yc(t,Et,zn,cn)}function Kr(t,e=null){if(qn.length){for(nr=e,$n=[...new Set(qn)],qn.length=0,ln=0;ln<$n.length;ln++)$n[ln]();$n=null,ln=0,nr=null,Kr(t,e)}}function Qc(t){if(zn.length){const e=[...new Set(zn)];if(zn.length=0,Et){Et.push(...e);return}for(Et=e,Et.sort((n,s)=>is(n)-is(s)),cn=0;cn<Et.length;cn++)Et[cn]();Et=null,cn=0}}const is=t=>t.id==null?1/0:t.id;function Xc(t){tr=!1,Bs=!0,Kr(t),De.sort((n,s)=>is(n)-is(s));const e=je;try{for(ot=0;ot<De.length;ot++){const n=De[ot];n&&n.active!==!1&&It(n,null,14)}}finally{ot=0,De.length=0,Qc(),Bs=!1,zr=null,(De.length||qn.length||zn.length)&&Xc(t)}}function uf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ne;f?i=n.map(_=>_.trim()):h&&(i=n.map(Fs))}let l,c=s[l=Li(e)]||s[l=Li(tt(e))];!c&&r&&(c=s[l=Li(Tn(e))]),c&&qe(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qe(a,t,6,i)}}function Jc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const c=a=>{const u=Jc(a,e,!0);u&&(l=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(s.set(t,null),null):(F(r)?r.forEach(c=>o[c]=null):Te(o,r),s.set(t,o),o)}function mi(t,e){return!t||!ui(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Tn(e))||z(t,e))}let We=null,yi=null;function Hs(t){const e=We;return We=t,yi=t&&t.type.__scopeId||null,e}function hf(t){yi=t}function ff(){yi=null}function df(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&il(-1);const r=Hs(e),o=t(...i);return Hs(r),s._d&&il(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Fi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:N}=t;let R,P;const B=Hs(t);try{if(n.shapeFlag&4){const X=i||s;R=Ze(u.call(X,X,h,r,_,f,m)),P=c}else{const X=e;R=Ze(X.length>1?X(r,{attrs:c,slots:l,emit:a}):X(r,null)),P=e.props?c:pf(c)}}catch(X){Kn.length=0,gi(X,t,1),R=we(jt)}let G=R;if(P&&N!==!1){const X=Object.keys(P),{shapeFlag:Se}=G;X.length&&Se&7&&(o&&X.some(Dr)&&(P=_f(P,o)),G=rs(G,P))}return n.dirs&&(G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),R=G,Hs(B),R}const pf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ui(n))&&((e||(e={}))[n]=t[n]);return e},_f=(t,e)=>{const n={};for(const s in t)(!Dr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Yo(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!mi(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Yo(s,o,a):!0:!!o;return!1}function Yo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!mi(n,r))return!0}return!1}function mf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yf=t=>t.__isSuspense;function vf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):af(t)}function Os(t,e){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[t]=e}}function ct(t,e,n=!1){const s=Ee||We;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s.proxy):e}}const Qo={};function ks(t,e,n){return Zc(t,e,n)}function Zc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ne){const l=Ee;let c,a=!1,u=!1;if(Ce(t)?(c=()=>t.value,a=Fc(t)):dn(t)?(c=()=>t,s=!0):F(t)?(u=!0,a=t.some(dn),c=()=>t.map(P=>{if(Ce(P))return P.value;if(dn(P))return Ft(P);if(U(P))return It(P,l,2)})):U(t)?e?c=()=>It(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),qe(t,l,3,[f])}:c=je,e&&s){const P=c;c=()=>Ft(P())}let h,f=P=>{h=R.onStop=()=>{It(P,l,4)}};if(os)return f=je,e?n&&qe(e,l,3,[c(),u?[]:void 0,f]):c(),je;let _=u?[]:Qo;const m=()=>{if(!!R.active)if(e){const P=R.run();(s||a||(u?P.some((B,G)=>ts(B,_[G])):ts(P,_)))&&(h&&h(),qe(e,l,3,[P,_===Qo?void 0:_,f]),_=P)}else R.run()};m.allowRecurse=!!e;let N;i==="sync"?N=m:i==="post"?N=()=>Re(m,l&&l.suspense):N=()=>{!l||l.isMounted?cf(m):m()};const R=new Ur(c,N);return e?n?m():_=R.run():i==="post"?Re(R.run.bind(R),l&&l.suspense):R.run(),()=>{R.stop(),l&&l.scope&&Lr(l.scope.effects,R)}}function Ef(t,e,n){const s=this.proxy,i=ye(t)?t.includes(".")?ea(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=Ee;yn(this);const l=Zc(i,r.bind(s),n);return o?yn(o):$t(),l}function ea(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ft(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))Ft(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Ft(t[n],e);else if(hi(t)||fn(t))t.forEach(n=>{Ft(n,e)});else if(Tc(t))for(const n in t)Ft(t[n],e);return t}function ta(t){return U(t)?{setup:t,name:t.name}:t}const sr=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function Cf(t,e){sa(t,"a",e)}function bf(t,e){sa(t,"da",e)}function sa(t,e,n=Ee){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(vi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)na(i.parent.vnode)&&wf(s,e,n,i),i=i.parent}}function wf(t,e,n,s){const i=vi(e,t,s,!0);ia(()=>{Lr(s[e],i)},n)}function vi(t,e,n=Ee,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sn(),yn(n);const l=qe(e,n,t,o);return $t(),Rn(),l});return s?i.unshift(r):i.push(r),r}}const dt=t=>(e,n=Ee)=>(!os||t==="sp")&&vi(t,e,n),If=dt("bm"),Tf=dt("m"),Sf=dt("bu"),Rf=dt("u"),xf=dt("bum"),ia=dt("um"),Nf=dt("sp"),Af=dt("rtg"),Pf=dt("rtc");function Of(t,e=Ee){vi("ec",t,e)}let ir=!0;function kf(t){const e=oa(t),n=t.proxy,s=t.ctx;ir=!1,e.beforeCreate&&Xo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:N,deactivated:R,beforeDestroy:P,beforeUnmount:B,destroyed:G,unmounted:X,render:Se,renderTracked:Oe,renderTriggered:nt,errorCaptured:Jt,serverPrefetch:Ke,expose:gt,inheritAttrs:st,components:it,directives:Zt,filters:en}=e;if(a&&Mf(a,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const J=o[ie];U(J)&&(s[ie]=J.bind(n))}if(i){const ie=i.call(n,n);fe(ie)&&(t.data=ms(ie))}if(ir=!0,r)for(const ie in r){const J=r[ie],ke=U(J)?J.bind(n,n):U(J.get)?J.get.bind(n,n):je,nn=!U(J)&&U(J.set)?J.set.bind(n):je,rt=et({get:ke,set:nn});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ge=>rt.value=Ge})}if(l)for(const ie in l)ra(l[ie],s,n,ie);if(c){const ie=U(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(J=>{Os(J,ie[J])})}u&&Xo(u,t,"c");function de(ie,J){F(J)?J.forEach(ke=>ie(ke.bind(n))):J&&ie(J.bind(n))}if(de(If,h),de(Tf,f),de(Sf,_),de(Rf,m),de(Cf,N),de(bf,R),de(Of,Jt),de(Pf,Oe),de(Af,nt),de(xf,B),de(ia,X),de(Nf,Ke),F(gt))if(gt.length){const ie=t.exposed||(t.exposed={});gt.forEach(J=>{Object.defineProperty(ie,J,{get:()=>n[J],set:ke=>n[J]=ke})})}else t.exposed||(t.exposed={});Se&&t.render===je&&(t.render=Se),st!=null&&(t.inheritAttrs=st),it&&(t.components=it),Zt&&(t.directives=Zt)}function Mf(t,e,n=je,s=!1){F(t)&&(t=rr(t));for(const i in t){const r=t[i];let o;fe(r)?"default"in r?o=ct(r.from||i,r.default,!0):o=ct(r.from||i):o=ct(r),Ce(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Xo(t,e,n){qe(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ra(t,e,n,s){const i=s.includes(".")?ea(n,s):()=>n[s];if(ye(t)){const r=e[t];U(r)&&ks(i,r)}else if(U(t))ks(i,t.bind(n));else if(fe(t))if(F(t))t.forEach(r=>ra(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&ks(i,r,t)}}function oa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Us(c,a,o,!0)),Us(c,e,o)),r.set(e,c),c}function Us(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Us(t,r,n,!0),i&&i.forEach(o=>Us(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Df[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Df={data:Jo,props:Ot,emits:Ot,methods:Ot,computed:Ot,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Ot,directives:Ot,watch:Ff,provide:Jo,inject:Lf};function Jo(t,e){return e?t?function(){return Te(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Lf(t,e){return Ot(rr(t),rr(e))}function rr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Ot(t,e){return t?Te(Te(Object.create(null),t),e):e}function Ff(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Ie(t[s],e[s]);return n}function Bf(t,e,n,s=!1){const i={},r={};Ls(r,Ei,1),t.propsDefaults=Object.create(null),la(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Hf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Q(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(mi(t.emitsOptions,f))continue;const _=e[f];if(c)if(z(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const m=tt(f);i[m]=or(c,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{la(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!z(e,h)&&((u=Tn(h))===h||!z(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=or(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!z(e,h)&&!0)&&(delete r[h],a=!0)}a&&ut(t,"set","$attrs")}function la(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(As(c))continue;const a=e[c];let u;i&&z(i,u=tt(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:mi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Q(n),a=l||ne;for(let u=0;u<r.length;u++){const h=r[u];n[h]=or(i,c,h,a[h],t,!z(a,h))}}return o}function or(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=z(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&U(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(yn(i),s=a[n]=c.call(null,e),$t())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Tn(n))&&(s=!0))}return s}function ca(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!U(t)){const u=h=>{c=!0;const[f,_]=ca(h,e,!0);Te(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return s.set(t,hn),hn;if(F(r))for(let u=0;u<r.length;u++){const h=tt(r[u]);Zo(h)&&(o[h]=ne)}else if(r)for(const u in r){const h=tt(u);if(Zo(h)){const f=r[u],_=o[h]=F(f)||U(f)?{type:f}:f;if(_){const m=nl(Boolean,_.type),N=nl(String,_.type);_[0]=m>-1,_[1]=N<0||m<N,(m>-1||z(_,"default"))&&l.push(h)}}}const a=[o,l];return s.set(t,a),a}function Zo(t){return t[0]!=="$"}function el(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function tl(t,e){return el(t)===el(e)}function nl(t,e){return F(e)?e.findIndex(n=>tl(n,t)):U(e)&&tl(e,t)?0:-1}const aa=t=>t[0]==="_"||t==="$stable",Gr=t=>F(t)?t.map(Ze):[Ze(t)],Uf=(t,e,n)=>{const s=df((...i)=>Gr(e(...i)),n);return s._c=!1,s},ua=(t,e,n)=>{const s=t._ctx;for(const i in t){if(aa(i))continue;const r=t[i];if(U(r))e[i]=Uf(i,r,s);else if(r!=null){const o=Gr(r);e[i]=()=>o}}},ha=(t,e)=>{const n=Gr(e);t.slots.default=()=>n},Wf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),Ls(e,"_",n)):ua(e,t.slots={})}else t.slots={},e&&ha(t,e);Ls(t.slots,Ei,1)},$f=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ne;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Te(i,e),!n&&l===1&&delete i._):(r=!e.$stable,ua(e,i)),o=e}else e&&(ha(t,e),o={default:1});if(r)for(const l in i)!aa(l)&&!(l in o)&&delete i[l]};function Vf(t,e){const n=We;if(n===null)return t;const s=Ci(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=ne]=e[r];U(o)&&(o={mounted:o,updated:o}),o.deep&&Ft(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a})}return t}function Nt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Sn(),qe(c,n,8,[t.el,l,t,e]),Rn())}}function fa(){return{app:null,config:{isNativeTag:yh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jf=0;function qf(t,e){return function(s,i=null){U(s)||(s=Object.assign({},s)),i!=null&&!fe(i)&&(i=null);const r=fa(),o=new Set;let l=!1;const c=r.app={_uid:jf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:md,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&U(a.install)?(o.add(a),a.install(c,...u)):U(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=we(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,Ci(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c}};return c}}function lr(t,e,n,s,i=!1){if(F(t)){t.forEach((f,_)=>lr(f,e&&(F(e)?e[_]:e),n,s,i));return}if(sr(s)&&!i)return;const r=s.shapeFlag&4?Ci(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ne?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(ye(a)?(u[a]=null,z(h,a)&&(h[a]=null)):Ce(a)&&(a.value=null)),U(c))It(c,l,12,[o,u]);else{const f=ye(c),_=Ce(c);if(f||_){const m=()=>{if(t.f){const N=f?u[c]:c.value;i?F(N)&&Lr(N,r):F(N)?N.includes(r)||N.push(r):f?(u[c]=[r],z(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,z(h,c)&&(h[c]=o)):Ce(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Re(m,n)):m()}}}const Re=vf;function zf(t){return Kf(t)}function Kf(t,e){const n=Ih();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=je,cloneNode:m,insertStaticContent:N}=t,R=(d,p,g,E=null,v=null,I=null,x=!1,w=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Mn(d,p)&&(E=k(d),Fe(d,v,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:M,shapeFlag:A}=p;switch(C){case Yr:P(d,p,g,E);break;case jt:B(d,p,g,E);break;case Ms:d==null&&G(p,g,E,x);break;case Je:Zt(d,p,g,E,v,I,x,w,T);break;default:A&1?Oe(d,p,g,E,v,I,x,w,T):A&6?en(d,p,g,E,v,I,x,w,T):(A&64||A&128)&&C.process(d,p,g,E,v,I,x,w,T,re)}M!=null&&v&&lr(M,d&&d.ref,I,p||d,!p)},P=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const v=p.el=d.el;p.children!==d.children&&a(v,p.children)}},B=(d,p,g,E)=>{d==null?s(p.el=c(p.children||""),g,E):p.el=d.el},G=(d,p,g,E)=>{[d.el,d.anchor]=N(d.children,p,g,E,d.el,d.anchor)},X=({el:d,anchor:p},g,E)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,E),d=v;s(p,g,E)},Se=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},Oe=(d,p,g,E,v,I,x,w,T)=>{x=x||p.type==="svg",d==null?nt(p,g,E,v,I,x,w,T):gt(d,p,v,I,x,w,T)},nt=(d,p,g,E,v,I,x,w)=>{let T,C;const{type:M,props:A,shapeFlag:D,transition:H,patchFlag:K,dirs:ue}=d;if(d.el&&m!==void 0&&K===-1)T=d.el=m(d.el);else{if(T=d.el=o(d.type,I,A&&A.is,A),D&8?u(T,d.children):D&16&&Ke(d.children,T,null,E,v,I&&M!=="foreignObject",x,w),ue&&Nt(d,null,E,"created"),A){for(const ce in A)ce!=="value"&&!As(ce)&&r(T,ce,null,A[ce],I,d.children,E,v,S);"value"in A&&r(T,"value",null,A.value),(C=A.onVnodeBeforeMount)&&Qe(C,E,d)}Jt(T,d,d.scopeId,x,E)}ue&&Nt(d,null,E,"beforeMount");const ee=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;ee&&H.beforeEnter(T),s(T,p,g),((C=A&&A.onVnodeMounted)||ee||ue)&&Re(()=>{C&&Qe(C,E,d),ee&&H.enter(T),ue&&Nt(d,null,E,"mounted")},v)},Jt=(d,p,g,E,v)=>{if(g&&_(d,g),E)for(let I=0;I<E.length;I++)_(d,E[I]);if(v){let I=v.subTree;if(p===I){const x=v.vnode;Jt(d,x,x.scopeId,x.slotScopeIds,v.parent)}}},Ke=(d,p,g,E,v,I,x,w,T=0)=>{for(let C=T;C<d.length;C++){const M=d[C]=w?Ct(d[C]):Ze(d[C]);R(null,M,p,g,E,v,I,x,w)}},gt=(d,p,g,E,v,I,x)=>{const w=p.el=d.el;let{patchFlag:T,dynamicChildren:C,dirs:M}=p;T|=d.patchFlag&16;const A=d.props||ne,D=p.props||ne;let H;g&&At(g,!1),(H=D.onVnodeBeforeUpdate)&&Qe(H,g,p,d),M&&Nt(p,d,g,"beforeUpdate"),g&&At(g,!0);const K=v&&p.type!=="foreignObject";if(C?st(d.dynamicChildren,C,w,g,E,K,I):x||ke(d,p,w,null,g,E,K,I,!1),T>0){if(T&16)it(w,p,A,D,g,E,v);else if(T&2&&A.class!==D.class&&r(w,"class",null,D.class,v),T&4&&r(w,"style",A.style,D.style,v),T&8){const ue=p.dynamicProps;for(let ee=0;ee<ue.length;ee++){const ce=ue[ee],Be=A[ce],sn=D[ce];(sn!==Be||ce==="value")&&r(w,ce,Be,sn,v,d.children,g,E,S)}}T&1&&d.children!==p.children&&u(w,p.children)}else!x&&C==null&&it(w,p,A,D,g,E,v);((H=D.onVnodeUpdated)||M)&&Re(()=>{H&&Qe(H,g,p,d),M&&Nt(p,d,g,"updated")},E)},st=(d,p,g,E,v,I,x)=>{for(let w=0;w<p.length;w++){const T=d[w],C=p[w],M=T.el&&(T.type===Je||!Mn(T,C)||T.shapeFlag&70)?h(T.el):g;R(T,C,M,null,E,v,I,x,!0)}},it=(d,p,g,E,v,I,x)=>{if(g!==E){for(const w in E){if(As(w))continue;const T=E[w],C=g[w];T!==C&&w!=="value"&&r(d,w,C,T,x,p.children,v,I,S)}if(g!==ne)for(const w in g)!As(w)&&!(w in E)&&r(d,w,g[w],null,x,p.children,v,I,S);"value"in E&&r(d,"value",g.value,E.value)}},Zt=(d,p,g,E,v,I,x,w,T)=>{const C=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:H}=p;H&&(w=w?w.concat(H):H),d==null?(s(C,g,E),s(M,g,E),Ke(p.children,g,M,v,I,x,w,T)):A>0&&A&64&&D&&d.dynamicChildren?(st(d.dynamicChildren,D,g,v,I,x,w),(p.key!=null||v&&p===v.subTree)&&da(d,p,!0)):ke(d,p,g,M,v,I,x,w,T)},en=(d,p,g,E,v,I,x,w,T)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,g,E,x,T):tn(p,g,E,v,I,x,T):de(d,p,T)},tn=(d,p,g,E,v,I,x)=>{const w=d.component=ud(d,E,v);if(na(d)&&(w.ctx.renderer=re),hd(w),w.asyncDep){if(v&&v.registerDep(w,ie),!d.el){const T=w.subTree=we(jt);B(null,T,p,g)}return}ie(w,d,p,g,v,I,x)},de=(d,p,g)=>{const E=p.component=d.component;if(gf(d,p,g))if(E.asyncDep&&!E.asyncResolved){J(E,p,g);return}else E.next=p,lf(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},ie=(d,p,g,E,v,I,x)=>{const w=()=>{if(d.isMounted){let{next:M,bu:A,u:D,parent:H,vnode:K}=d,ue=M,ee;At(d,!1),M?(M.el=K.el,J(d,M,x)):M=K,A&&Ps(A),(ee=M.props&&M.props.onVnodeBeforeUpdate)&&Qe(ee,H,M,K),At(d,!0);const ce=Fi(d),Be=d.subTree;d.subTree=ce,R(Be,ce,h(Be.el),k(Be),d,v,I),M.el=ce.el,ue===null&&mf(d,ce.el),D&&Re(D,v),(ee=M.props&&M.props.onVnodeUpdated)&&Re(()=>Qe(ee,H,M,K),v)}else{let M;const{el:A,props:D}=p,{bm:H,m:K,parent:ue}=d,ee=sr(p);if(At(d,!1),H&&Ps(H),!ee&&(M=D&&D.onVnodeBeforeMount)&&Qe(M,ue,p),At(d,!0),A&&W){const ce=()=>{d.subTree=Fi(d),W(A,d.subTree,d,v,null)};ee?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ce()):ce()}else{const ce=d.subTree=Fi(d);R(null,ce,g,E,d,v,I),p.el=ce.el}if(K&&Re(K,v),!ee&&(M=D&&D.onVnodeMounted)){const ce=p;Re(()=>Qe(M,ue,ce),v)}p.shapeFlag&256&&d.a&&Re(d.a,v),d.isMounted=!0,p=g=E=null}},T=d.effect=new Ur(w,()=>Kc(d.update),d.scope),C=d.update=T.run.bind(T);C.id=d.uid,At(d,!0),C()},J=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,Hf(d,p.props,E,g),$f(d,p.children,g),Sn(),Kr(void 0,d.update),Rn()},ke=(d,p,g,E,v,I,x,w,T=!1)=>{const C=d&&d.children,M=d?d.shapeFlag:0,A=p.children,{patchFlag:D,shapeFlag:H}=p;if(D>0){if(D&128){rt(C,A,g,E,v,I,x,w,T);return}else if(D&256){nn(C,A,g,E,v,I,x,w,T);return}}H&8?(M&16&&S(C,v,I),A!==C&&u(g,A)):M&16?H&16?rt(C,A,g,E,v,I,x,w,T):S(C,v,I,!0):(M&8&&u(g,""),H&16&&Ke(A,g,E,v,I,x,w,T))},nn=(d,p,g,E,v,I,x,w,T)=>{d=d||hn,p=p||hn;const C=d.length,M=p.length,A=Math.min(C,M);let D;for(D=0;D<A;D++){const H=p[D]=T?Ct(p[D]):Ze(p[D]);R(d[D],H,g,null,v,I,x,w,T)}C>M?S(d,v,I,!0,!1,A):Ke(p,g,E,v,I,x,w,T,A)},rt=(d,p,g,E,v,I,x,w,T)=>{let C=0;const M=p.length;let A=d.length-1,D=M-1;for(;C<=A&&C<=D;){const H=d[C],K=p[C]=T?Ct(p[C]):Ze(p[C]);if(Mn(H,K))R(H,K,g,null,v,I,x,w,T);else break;C++}for(;C<=A&&C<=D;){const H=d[A],K=p[D]=T?Ct(p[D]):Ze(p[D]);if(Mn(H,K))R(H,K,g,null,v,I,x,w,T);else break;A--,D--}if(C>A){if(C<=D){const H=D+1,K=H<M?p[H].el:E;for(;C<=D;)R(null,p[C]=T?Ct(p[C]):Ze(p[C]),g,K,v,I,x,w,T),C++}}else if(C>D)for(;C<=A;)Fe(d[C],v,I,!0),C++;else{const H=C,K=C,ue=new Map;for(C=K;C<=D;C++){const Me=p[C]=T?Ct(p[C]):Ze(p[C]);Me.key!=null&&ue.set(Me.key,C)}let ee,ce=0;const Be=D-K+1;let sn=!1,Bo=0;const kn=new Array(Be);for(C=0;C<Be;C++)kn[C]=0;for(C=H;C<=A;C++){const Me=d[C];if(ce>=Be){Fe(Me,v,I,!0);continue}let Ye;if(Me.key!=null)Ye=ue.get(Me.key);else for(ee=K;ee<=D;ee++)if(kn[ee-K]===0&&Mn(Me,p[ee])){Ye=ee;break}Ye===void 0?Fe(Me,v,I,!0):(kn[Ye-K]=C+1,Ye>=Bo?Bo=Ye:sn=!0,R(Me,p[Ye],g,null,v,I,x,w,T),ce++)}const Ho=sn?Gf(kn):hn;for(ee=Ho.length-1,C=Be-1;C>=0;C--){const Me=K+C,Ye=p[Me],Uo=Me+1<M?p[Me+1].el:E;kn[C]===0?R(null,Ye,g,Uo,v,I,x,w,T):sn&&(ee<0||C!==Ho[ee]?Ge(Ye,g,Uo,2):ee--)}}},Ge=(d,p,g,E,v=null)=>{const{el:I,type:x,transition:w,children:T,shapeFlag:C}=d;if(C&6){Ge(d.component.subTree,p,g,E);return}if(C&128){d.suspense.move(p,g,E);return}if(C&64){x.move(d,p,g,re);return}if(x===Je){s(I,p,g);for(let A=0;A<T.length;A++)Ge(T[A],p,g,E);s(d.anchor,p,g);return}if(x===Ms){X(d,p,g);return}if(E!==2&&C&1&&w)if(E===0)w.beforeEnter(I),s(I,p,g),Re(()=>w.enter(I),v);else{const{leave:A,delayLeave:D,afterLeave:H}=w,K=()=>s(I,p,g),ue=()=>{A(I,()=>{K(),H&&H()})};D?D(I,K,ue):ue()}else s(I,p,g)},Fe=(d,p,g,E=!1,v=!1)=>{const{type:I,props:x,ref:w,children:T,dynamicChildren:C,shapeFlag:M,patchFlag:A,dirs:D}=d;if(w!=null&&lr(w,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const H=M&1&&D,K=!sr(d);let ue;if(K&&(ue=x&&x.onVnodeBeforeUnmount)&&Qe(ue,p,d),M&6)O(d.component,g,E);else{if(M&128){d.suspense.unmount(g,E);return}H&&Nt(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,v,re,E):C&&(I!==Je||A>0&&A&64)?S(C,p,g,!1,!0):(I===Je&&A&384||!v&&M&16)&&S(T,p,g),E&&Di(d)}(K&&(ue=x&&x.onVnodeUnmounted)||H)&&Re(()=>{ue&&Qe(ue,p,d),H&&Nt(d,null,p,"unmounted")},g)},Di=d=>{const{type:p,el:g,anchor:E,transition:v}=d;if(p===Je){y(g,E);return}if(p===Ms){Se(d);return}const I=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:w}=v,T=()=>x(g,I);w?w(d.el,I,T):T()}else I()},y=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},O=(d,p,g)=>{const{bum:E,scope:v,update:I,subTree:x,um:w}=d;E&&Ps(E),v.stop(),I&&(I.active=!1,Fe(x,d,p,g)),w&&Re(w,p),Re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(d,p,g,E=!1,v=!1,I=0)=>{for(let x=I;x<d.length;x++)Fe(d[x],p,g,E,v)},k=d=>d.shapeFlag&6?k(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Z=(d,p,g)=>{d==null?p._vnode&&Fe(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),Qc(),p._vnode=d},re={p:R,um:Fe,m:Ge,r:Di,mt:tn,mc:Ke,pc:ke,pbc:st,n:k,o:t};let j,W;return e&&([j,W]=e(re)),{render:Z,hydrate:j,createApp:qf(Z,j)}}function At({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function da(t,e,n=!1){const s=t.children,i=e.children;if(F(s)&&F(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ct(i[r]),l.el=o.el),n||da(o,l))}}function Gf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Yf=t=>t.__isTeleport,pa="components";function Qf(t,e){return Jf(pa,t,!0,e)||t}const Xf=Symbol();function Jf(t,e,n=!0,s=!1){const i=We||Ee;if(i){const r=i.type;if(t===pa){const l=_d(r);if(l&&(l===e||l===tt(e)||l===pi(tt(e))))return r}const o=sl(i[t]||r[t],e)||sl(i.appContext[t],e);return!o&&s?r:o}}function sl(t,e){return t&&(t[e]||t[tt(e)]||t[pi(tt(e))])}const Je=Symbol(void 0),Yr=Symbol(void 0),jt=Symbol(void 0),Ms=Symbol(void 0),Kn=[];let Wt=null;function Ws(t=!1){Kn.push(Wt=t?null:[])}function Zf(){Kn.pop(),Wt=Kn[Kn.length-1]||null}let $s=1;function il(t){$s+=t}function _a(t){return t.dynamicChildren=$s>0?Wt||hn:null,Zf(),$s>0&&Wt&&Wt.push(t),t}function cr(t,e,n,s,i,r){return _a(ht(t,e,n,s,i,r,!0))}function ed(t,e,n,s,i){return _a(we(t,e,n,s,i,!0))}function ar(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const Ei="__vInternal",ga=({key:t})=>t!=null?t:null,Ds=({ref:t,ref_key:e,ref_for:n})=>t!=null?ye(t)||Ce(t)||U(t)?{i:We,r:t,k:e,f:!!n}:t:null;function ht(t,e=null,n=null,s=0,i=null,r=t===Je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ga(e),ref:e&&Ds(e),scopeId:yi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Qr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),$s>0&&!o&&Wt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Wt.push(c),c}const we=td;function td(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Xf)&&(t=jt),ar(t)){const l=rs(t,e,!0);return n&&Qr(l,n),l}if(gd(t)&&(t=t.__vccOpts),e){e=nd(e);let{class:l,style:c}=e;l&&!ye(l)&&(e.class=es(l)),fe(c)&&(Bc(c)&&!F(c)&&(c=Te({},c)),e.style=Mr(c))}const o=ye(t)?1:yf(t)?128:Yf(t)?64:fe(t)?4:U(t)?2:0;return ht(t,e,n,s,i,o,r,!0)}function nd(t){return t?Bc(t)||Ei in t?Te({},t):t:null}function rs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?od(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ga(l),ref:e&&e.ref?n&&i?F(i)?i.concat(Ds(e)):[i,Ds(e)]:Ds(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),el:t.el,anchor:t.anchor}}function sd(t=" ",e=0){return we(Yr,null,t,e)}function id(t,e){const n=we(Ms,null,t);return n.staticCount=e,n}function rd(t="",e=!1){return e?(Ws(),ed(jt,null,t)):we(jt,null,t)}function Ze(t){return t==null||typeof t=="boolean"?we(jt):F(t)?we(Je,null,t.slice()):typeof t=="object"?Ct(t):we(Yr,null,String(t))}function Ct(t){return t.el===null||t.memo?t:rs(t)}function Qr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Qr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ei in e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[sd(e)]):n=8);t.children=e,t.shapeFlag|=n}function od(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=es([e.class,s.class]));else if(i==="style")e.style=Mr([e.style,s.style]);else if(ui(i)){const r=e[i],o=s[i];o&&r!==o&&!(F(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Qe(t,e,n,s=null){qe(t,e,7,[n,s])}function Dv(t,e,n,s){let i;const r=n&&n[s];if(F(t)||ye(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(fe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const ur=t=>t?ma(t)?Ci(t)||t.proxy:ur(t.parent):null,Vs=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ur(t.parent),$root:t=>ur(t.root),$emit:t=>t.emit,$options:t=>oa(t),$forceUpdate:t=>()=>Kc(t.update),$nextTick:t=>zc.bind(t.proxy),$watch:t=>Ef.bind(t)}),ld={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ne&&z(s,e))return o[e]=1,s[e];if(i!==ne&&z(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&z(a,e))return o[e]=3,r[e];if(n!==ne&&z(n,e))return o[e]=4,n[e];ir&&(o[e]=0)}}const u=Vs[e];let h,f;if(u)return e==="$attrs"&&Le(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ne&&z(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,z(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ne&&z(i,e)?(i[e]=n,!0):s!==ne&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ne&&z(t,o)||e!==ne&&z(e,o)||(l=r[0])&&z(l,o)||z(s,o)||z(Vs,o)||z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},cd=fa();let ad=0;function ud(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||cd,r={uid:ad++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Th(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ca(s,i),emitsOptions:Jc(s,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=uf.bind(null,r),t.ce&&t.ce(r),r}let Ee=null;const yn=t=>{Ee=t,t.scope.on()},$t=()=>{Ee&&Ee.scope.off(),Ee=null};function ma(t){return t.vnode.shapeFlag&4}let os=!1;function hd(t,e=!1){os=e;const{props:n,children:s}=t.vnode,i=ma(t);Bf(t,n,i,e),Wf(t,s);const r=i?fd(t,e):void 0;return os=!1,r}function fd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hc(new Proxy(t.ctx,ld));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?pd(t):null;yn(t),Sn();const r=It(s,t,0,[t.props,i]);if(Rn(),$t(),wc(r)){if(r.then($t,$t),e)return r.then(o=>{rl(t,o,e)}).catch(o=>{gi(o,t,0)});t.asyncDep=r}else rl(t,r,e)}else ya(t,e)}function rl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=jc(e)),ya(t,n)}let ol;function ya(t,e,n){const s=t.type;if(!t.render){if(!e&&ol&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=Te(Te({isCustomElement:r,delimiters:l},o),c);s.render=ol(i,a)}}t.render=s.render||je}yn(t),Sn(),kf(t),Rn(),$t()}function dd(t){return new Proxy(t.attrs,{get(e,n){return Le(t,"get","$attrs"),e[n]}})}function pd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=dd(t))},slots:t.slots,emit:t.emit,expose:e}}function Ci(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jc(Hc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)}}))}function _d(t){return U(t)&&t.displayName||t.name}function gd(t){return U(t)&&"__vccOpts"in t}const et=(t,e)=>sf(t,e,os);function va(t,e,n){const s=arguments.length;return s===2?fe(e)&&!F(e)?ar(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ar(n)&&(n=[n]),we(t,e,n))}const md="3.2.33",yd="http://www.w3.org/2000/svg",Dt=typeof document!="undefined"?document:null,ll=Dt&&Dt.createElement("template"),vd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Dt.createElementNS(yd,t):Dt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ll.innerHTML=s?`<svg>${t}</svg>`:t;const l=ll.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ed(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Cd(t,e,n){const s=t.style,i=ye(n);if(n&&!i){for(const r in n)hr(s,r,n[r]);if(e&&!ye(e))for(const r in e)n[r]==null&&hr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const cl=/\s*!important$/;function hr(t,e,n){if(F(n))n.forEach(s=>hr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=bd(t,e);cl.test(n)?t.setProperty(Tn(s),n.replace(cl,""),"important"):t[s]=n}}const al=["Webkit","Moz","ms"],Bi={};function bd(t,e){const n=Bi[e];if(n)return n;let s=tt(e);if(s!=="filter"&&s in t)return Bi[e]=s;s=pi(s);for(let i=0;i<al.length;i++){const r=al[i]+s;if(r in t)return Bi[e]=r}return e}const ul="http://www.w3.org/1999/xlink";function wd(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ul,e.slice(6,e.length)):t.setAttributeNS(ul,e,n);else{const r=fh(e);n==null||r&&!Cc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Id(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Cc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[Ea,Td]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let fr=0;const Sd=Promise.resolve(),Rd=()=>{fr=0},xd=()=>fr||(Sd.then(Rd),fr=Ea());function Lt(t,e,n,s){t.addEventListener(e,n,s)}function Nd(t,e,n,s){t.removeEventListener(e,n,s)}function Ad(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Pd(e);if(s){const a=r[e]=Od(s,i);Lt(t,l,a,c)}else o&&(Nd(t,l,o,c),r[e]=void 0)}}const hl=/(?:Once|Passive|Capture)$/;function Pd(t){let e;if(hl.test(t)){e={};let n;for(;n=t.match(hl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Tn(t.slice(2)),e]}function Od(t,e){const n=s=>{const i=s.timeStamp||Ea();(Td||i>=n.attached-1)&&qe(kd(s,n.value),e,5,[s])};return n.value=t,n.attached=xd(),n}function kd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const fl=/^on[a-z]/,Md=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?Ed(t,s,i):e==="style"?Cd(t,n,s):ui(e)?Dr(e)||Ad(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dd(t,e,s,i))?Id(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),wd(t,e,s,i))};function Dd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&fl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fl.test(e)&&ye(n)?!1:e in t}const js=t=>{const e=t.props["onUpdate:modelValue"];return F(e)?n=>Ps(e,n):e};function Ld(t){t.target.composing=!0}function dl(t){const e=t.target;e.composing&&(e.composing=!1,Fd(e,"input"))}function Fd(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Lv={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=js(i);const r=s||i.props&&i.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n?l=l.trim():r&&(l=Fs(l)),t._assign(l)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",Ld),Lt(t,"compositionend",dl),Lt(t,"change",dl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=js(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Fs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Fv={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=hi(e);Lt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fs(qs(o)):qs(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=js(s)},mounted(t,{value:e}){pl(t,e)},beforeUpdate(t,e,n){t._assign=js(n)},updated(t,{value:e}){pl(t,e)}};function pl(t,e){const n=t.multiple;if(!(n&&!F(e)&&!hi(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=qs(r);if(n)F(e)?r.selected=mh(e,o)>-1:r.selected=e.has(o);else if(ai(qs(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qs(t){return"_value"in t?t._value:t.value}const Bd={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Dn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Dn(t,!0),s.enter(t)):s.leave(t,()=>{Dn(t,!1)}):Dn(t,e))},beforeUnmount(t,{value:e}){Dn(t,e)}};function Dn(t,e){t.style.display=e?t._vod:"none"}const Hd=Te({patchProp:Md},vd);let _l;function Ud(){return _l||(_l=zf(Hd))}const Wd=(...t)=>{const e=Ud().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=$d(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $d(t){return ye(t)?document.querySelector(t):t}var Vd=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const Ca=t=>(hf("data-v-40de88de"),t=t(),ff(),t),jd={class:"sun"},qd=Ca(()=>ht("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[ht("path",{d:"M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"})],-1)),zd=[qd],Kd={key:0,class:"moon"},Gd=Ca(()=>ht("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[ht("path",{d:"M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"})],-1)),Yd=[Gd],Qd={setup(t){const e=$c(!1);function n(){e.value=!e.value}return(s,i)=>(Ws(),cr("div",{class:es(["dark-toggle",{checked:e.value}]),onClick:n},[ht("div",{class:es(["ball",{checked:e.value}])},[Vf(ht("div",jd,zd,512),[[Bd,!e.value]]),e.value?(Ws(),cr("div",Kd,Yd)):rd("",!0)],2)],2))}};var Xd=Vd(Qd,[["__scopeId","data-v-40de88de"]]);const Jd=id('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&amp;display=swap" rel="stylesheet"><div class="bground" id="b"><div id="b-img" class="bground-img"></div></div>',4),Zd={class:"viewmode-container"},ep={setup(t){function e(){document.documentElement.className==="dark-mode"?document.documentElement.className="":document.documentElement.className="dark-mode"}return(n,s)=>{const i=Qf("router-view");return Ws(),cr(Je,null,[Jd,ht("div",Zd,[we(Xd,{onClick:e,class:"btn-change"})]),we(i)],64)}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw xn(e)},xn=function(t){return new Error("Firebase Database ("+ba.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const m=a<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ia=function(t){const e=wa(t);return Xr.encodeByteArray(e,!0)},Ta=function(t){return Ia(t).replace(/\./g,"")},gl=function(t){try{return Xr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){return Sa(void 0,t)}function Sa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sp(n)||(t[n]=Sa(t[n],e[n]));return t}function sp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ra())}function Bv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hv(){const t=Ra();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Na(){return ba.NODE_ADMIN===!0}function rp(){return typeof indexedDB=="object"}function op(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="FirebaseError";class Jr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lp,Object.setPrototypeOf(this,Jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?cp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jr(i,l,s)}}function cp(t,e){return t.replace(ap,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ap=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ls(gl(r[0])||""),n=ls(gl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},up=function(t){const e=Pa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hp=function(t){const e=Pa(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yl(r)&&yl(o)){if(!dr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Uv(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Wv(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function $v(t,e){const n=new pp(t,e);return n.subscribe.bind(n)}class pp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");_p(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Hi),i.error===void 0&&(i.error=Hi),i.complete===void 0&&(i.complete=Hi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _p(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hi(){}function Zr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){return new Promise((n,s)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var r;s(`${e}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class vl{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Oa(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new ka(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Oa{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new ka(this._transaction.objectStore(e))}}class ka{constructor(e){this._store=e}index(e){return new El(this._store.index(e))}createIndex(e,n,s){return new El(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return Vn(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return Vn(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Vn(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Vn(e,"Error clearing IndexedDB object store")}}class El{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Vn(n,"Error reading from IndexedDB")}}function mp(t,e,n){return new Promise((s,i)=>{try{const r=indexedDB.open(t,e);r.onsuccess=o=>{s(new vl(o.target.result))},r.onerror=o=>{var l;i(`Error opening indexedDB: ${(l=o.target.error)===null||l===void 0?void 0:l.message}`)},r.onupgradeneeded=o=>{n(new vl(r.result),o.oldVersion,o.newVersion,new Oa(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class cs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ep(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vp(t){return t===kt?void 0:t}function Ep(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const bp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},wp=oe.INFO,Ip={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Tp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ip[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=wp,this._logHandler=Tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pr="@firebase/app",Cl="0.7.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Ma("@firebase/app"),xp="@firebase/app-compat",Np="@firebase/analytics-compat",Ap="@firebase/analytics",Pp="@firebase/app-check-compat",Op="@firebase/app-check",kp="@firebase/auth",Mp="@firebase/auth-compat",Dp="@firebase/database",Lp="@firebase/database-compat",Fp="@firebase/functions",Bp="@firebase/functions-compat",Hp="@firebase/installations",Up="@firebase/installations-compat",Wp="@firebase/messaging",$p="@firebase/messaging-compat",Vp="@firebase/performance",jp="@firebase/performance-compat",qp="@firebase/remote-config",zp="@firebase/remote-config-compat",Kp="@firebase/storage",Gp="@firebase/storage-compat",Yp="@firebase/firestore",Qp="@firebase/firestore-compat",Xp="firebase",Jp="9.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="[DEFAULT]",Zp={[pr]:"fire-core",[xp]:"fire-core-compat",[Ap]:"fire-analytics",[Np]:"fire-analytics-compat",[Op]:"fire-app-check",[Pp]:"fire-app-check-compat",[kp]:"fire-auth",[Mp]:"fire-auth-compat",[Dp]:"fire-rtdb",[Lp]:"fire-rtdb-compat",[Fp]:"fire-fn",[Bp]:"fire-fn-compat",[Hp]:"fire-iid",[Up]:"fire-iid-compat",[Wp]:"fire-fcm",[$p]:"fire-fcm-compat",[Vp]:"fire-perf",[jp]:"fire-perf-compat",[qp]:"fire-rc",[zp]:"fire-rc-compat",[Kp]:"fire-gcs",[Gp]:"fire-gcs-compat",[Yp]:"fire-fst",[Qp]:"fire-fst-compat","fire-js":"fire-js",[Xp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Map,_r=new Map;function e_(t,e){try{t.container.addComponent(e)}catch(n){eo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(_r.has(e))return eo.debug(`There were multiple attempts to register component ${e}.`),!1;_r.set(e,t);for(const n of Ks.values())e_(n,t);return!0}function t_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},qt=new Aa("app","Firebase",n_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=Jp;function r_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Da,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});const i=Ks.get(s);if(i){if(dr(t,i.options)&&dr(n,i.config))return i;throw qt.create("duplicate-app",{appName:s})}const r=new Cp(s);for(const l of _r.values())r.addComponent(l);const o=new s_(t,n,r);return Ks.set(s,o),o}function o_(t=Da){const e=Ks.get(t);if(!e)throw qt.create("no-app",{appName:t});return e}function pn(t,e,n){var s;let i=(s=Zp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),eo.warn(l.join(" "));return}Gs(new cs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="firebase-heartbeat-database",c_=1,as="firebase-heartbeat-store";let Ui=null;function La(){return Ui||(Ui=mp(l_,c_,(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}).catch(t=>{throw qt.create("storage-open",{originalErrorMessage:t.message})})),Ui}async function a_(t){try{return(await La()).transaction(as).objectStore(as).get(Fa(t))}catch(e){throw qt.create("storage-get",{originalErrorMessage:e.message})}}async function bl(t,e){try{const s=(await La()).transaction(as,"readwrite");return await s.objectStore(as).put(e,Fa(t)),s.complete}catch(n){throw qt.create("storage-set",{originalErrorMessage:n.message})}}function Fa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=1024,h_=30*24*60*60*1e3;class f_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=h_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wl(),{heartbeatsToSend:n,unsentEntries:s}=d_(this._heartbeatsCache.heartbeats),i=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wl(){return new Date().toISOString().substring(0,10)}function d_(t,e=u_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Il(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class p_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rp()?op().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await a_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Il(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){Gs(new cs("platform-logger",e=>new Sp(e),"PRIVATE")),Gs(new cs("heartbeat",e=>new f_(e),"PRIVATE")),pn(pr,Cl,t),pn(pr,Cl,"esm2017"),pn("fire-js","")}__("");var g_="firebase",m_="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(g_,m_,"app");const y_="modulepreload",Tl={},v_="/",Pt=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${v_}${s}`,s in Tl)return;Tl[s]=!0;const i=s.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":y_,i||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),i)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ba=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Nn=t=>Ba?Symbol(t):"_vr_"+t,E_=Nn("rvlm"),Sl=Nn("rvd"),Ti=Nn("r"),Ha=Nn("rl"),gr=Nn("rvl"),an=typeof window!="undefined";function C_(t){return t.__esModule||Ba&&t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Wi(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const Gn=()=>{},b_=/\/$/,w_=t=>t.replace(b_,"");function $i(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("?"),c=e.indexOf("#",l>-1?l:0);return l>-1&&(s=e.slice(0,l),r=e.slice(l+1,c>-1?c:e.length),i=t(r)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=R_(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function I_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function T_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&En(e.matched[s],n.matched[i])&&Ua(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function En(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ua(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!S_(t[n],e[n]))return!1;return!0}function S_(t,e){return Array.isArray(t)?xl(t,e):Array.isArray(e)?xl(e,t):t===e}function xl(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function R_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var us;(function(t){t.pop="pop",t.push="push"})(us||(us={}));var Yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yn||(Yn={}));function x_(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),w_(t)}const N_=/^[^#]+#/;function A_(t,e){return t.replace(N_,"#")+e}function P_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Si=()=>({left:window.pageXOffset,top:window.pageYOffset});function O_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=P_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nl(t,e){return(history.state?history.state.position-e:-1)+t}const mr=new Map;function k_(t,e){mr.set(t,e)}function M_(t){const e=mr.get(t);return mr.delete(t),e}let D_=()=>location.protocol+"//"+location.host;function Wa(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Rl(c,"")}return Rl(n,t)+s+i}function L_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Wa(t,location),m=n.value,N=e.value;let R=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}R=N?f.position-N.position:0}else s(_);i.forEach(P=>{P(n.value,m,{delta:R,type:us.pop,direction:R?R>0?Yn.forward:Yn.back:Yn.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(te({},f.state,{scroll:Si()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:a,destroy:h}}function Al(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Si():null}}function F_(t){const{history:e,location:n}=window,s={value:Wa(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:D_()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=te({},e.state,Al(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=te({},i.value,e.state,{forward:c,scroll:Si()});r(u.current,u,!0);const h=te({},Al(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function B_(t){t=x_(t);const e=F_(t),n=L_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:A_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function H_(t){return typeof t=="string"||t&&typeof t=="object"}function $a(t){return typeof t=="string"||typeof t=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Va=Nn("nf");var Pl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pl||(Pl={}));function Cn(t,e){return te(new Error,{type:t,[Va]:!0},e)}function vt(t,e){return t instanceof Error&&Va in t&&(e==null||!!(t.type&e))}const Ol="[^/]+?",U_={sensitive:!1,strict:!1,start:!0,end:!0},W_=/[.+*?^${}()[\]/\\]/g;function $_(t,e){const n=te({},U_,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(W_,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:N,optional:R,regexp:P}=f;r.push({name:m,repeatable:N,optional:R});const B=P||Ol;if(B!==Ol){_+=10;try{new RegExp(`(${B})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${m}" (${B}): `+X.message)}}let G=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(G=R&&a.length<2?`(?:/${G})`:"/"+G),R&&(G+="?"),i+=G,_+=20,R&&(_+=-8),N&&(_+=-20),B===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:N,optional:R}=_,P=m in a?a[m]:"";if(Array.isArray(P)&&!N)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const B=Array.isArray(P)?P.join("/"):P;if(!B)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=B}}return u}return{re:o,score:s,keys:r,parse:l,stringify:c}}function V_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function j_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=V_(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const q_={type:0,value:""},z_=/[a-zA-Z0-9_]/;function K_(t){if(!t)return[[]];if(t==="/")return[[q_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){!a||(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:z_.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function G_(t,e,n){const s=$_(K_(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Y_(t,e){const n=[],s=new Map;e=Ml({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=X_(u);m.aliasOf=f&&f.record;const N=Ml(e,u),R=[m];if("alias"in u){const G=typeof u.alias=="string"?[u.alias]:u.alias;for(const X of G)R.push(te({},m,{components:f?f.record.components:m.components,path:X,aliasOf:f?f.record:m}))}let P,B;for(const G of R){const{path:X}=G;if(h&&X[0]!=="/"){const Se=h.record.path,Oe=Se[Se.length-1]==="/"?"":"/";G.path=h.record.path+(X&&Oe+X)}if(P=G_(G,h,N),f?f.alias.push(P):(B=B||P,B!==P&&B.alias.push(P),_&&u.name&&!kl(P)&&o(u.name)),"children"in m){const Se=m.children;for(let Oe=0;Oe<Se.length;Oe++)r(Se[Oe],P,f&&f.children[Oe])}f=f||P,c(P)}return B?()=>{o(B)}:Gn}function o(u){if($a(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&j_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ja(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!kl(u)&&s.set(u.record.name,u)}function a(u,h){let f,_={},m,N;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Cn(1,{location:u});N=f.record.name,_=te(Q_(h.params,f.keys.filter(B=>!B.optional).map(B=>B.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(B=>B.re.test(m)),f&&(_=f.parse(m),N=f.record.name);else{if(f=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!f)throw Cn(1,{location:u,currentLocation:h});N=f.record.name,_=te({},h.params,u.params),m=f.stringify(_)}const R=[];let P=f;for(;P;)R.unshift(P.record),P=P.parent;return{name:N,path:m,params:_,matched:R,meta:Z_(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Q_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function X_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:J_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function J_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function kl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Z_(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Ml(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ja(t,e){return e.children.some(n=>n===t||ja(t,n))}const qa=/#/g,eg=/&/g,tg=/\//g,ng=/=/g,sg=/\?/g,za=/\+/g,ig=/%5B/g,rg=/%5D/g,Ka=/%5E/g,og=/%60/g,Ga=/%7B/g,lg=/%7C/g,Ya=/%7D/g,cg=/%20/g;function to(t){return encodeURI(""+t).replace(lg,"|").replace(ig,"[").replace(rg,"]")}function ag(t){return to(t).replace(Ga,"{").replace(Ya,"}").replace(Ka,"^")}function yr(t){return to(t).replace(za,"%2B").replace(cg,"+").replace(qa,"%23").replace(eg,"%26").replace(og,"`").replace(Ga,"{").replace(Ya,"}").replace(Ka,"^")}function ug(t){return yr(t).replace(ng,"%3D")}function hg(t){return to(t).replace(qa,"%23").replace(sg,"%3F")}function fg(t){return t==null?"":hg(t).replace(tg,"%2F")}function Ys(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dg(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(za," "),o=r.indexOf("="),l=Ys(o<0?r:r.slice(0,o)),c=o<0?null:Ys(r.slice(o+1));if(l in e){let a=e[l];Array.isArray(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function Dl(t){let e="";for(let n in t){const s=t[n];if(n=ug(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&yr(r)):[s&&yr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function pg(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function Ln(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(Cn(4,{from:n,to:e})):h instanceof Error?l(h):H_(h)?l(Cn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function Vi(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(_g(l)){const a=(l.__vccOpts||l)[e];a&&i.push(bt(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=C_(a)?a.default:a;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&bt(f,n,s,r,o)()}))}}return i}function _g(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ll(t){const e=ct(Ti),n=ct(Ha),s=et(()=>e.resolve(jn(t.to))),i=et(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(En.bind(null,u));if(f>-1)return f;const _=Fl(c[a-2]);return a>1&&Fl(u)===_&&h[h.length-1].path!==_?h.findIndex(En.bind(null,c[a-2])):f}),r=et(()=>i.value>-1&&vg(n.params,s.value.params)),o=et(()=>i.value>-1&&i.value===n.matched.length-1&&Ua(n.params,s.value.params));function l(c={}){return yg(c)?e[jn(t.replace)?"replace":"push"](jn(t.to)).catch(Gn):Promise.resolve()}return{route:s,href:et(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const gg=ta({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ll,setup(t,{slots:e}){const n=ms(Ll(t)),{options:s}=ct(Ti),i=et(()=>({[Bl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:va("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),mg=gg;function yg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vg(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Fl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bl=(t,e,n)=>t!=null?t:e!=null?e:n,Eg=ta({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=ct(gr),i=et(()=>t.route||s.value),r=ct(Sl,0),o=et(()=>i.value.matched[r]);Os(Sl,r+1),Os(E_,o),Os(gr,i);const l=$c();return ks(()=>[l.value,o.value,t.name],([c,a,u],[h,f,_])=>{a&&(a.instances[u]=c,f&&f!==a&&c&&c===h&&(a.leaveGuards.size||(a.leaveGuards=f.leaveGuards),a.updateGuards.size||(a.updateGuards=f.updateGuards))),c&&a&&(!f||!En(a,f)||!h)&&(a.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,a=o.value,u=a&&a.components[t.name],h=t.name;if(!u)return Hl(n.default,{Component:u,route:c});const f=a.props[t.name],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,N=va(u,te({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(a.instances[h]=null)},ref:l}));return Hl(n.default,{Component:N,route:c})||N}}});function Hl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Cg=Eg;function bg(t){const e=Y_(t.routes,t),n=t.parseQuery||dg,s=t.stringifyQuery||Dl,i=t.history,r=Ln(),o=Ln(),l=Ln(),c=Zh(yt);let a=yt;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wi.bind(null,y=>""+y),h=Wi.bind(null,fg),f=Wi.bind(null,Ys);function _(y,O){let S,k;return $a(y)?(S=e.getRecordMatcher(y),k=O):k=y,e.addRoute(k,S)}function m(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function N(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function P(y,O){if(O=te({},O||c.value),typeof y=="string"){const W=$i(n,y,O.path),d=e.resolve({path:W.path},O),p=i.createHref(W.fullPath);return te(W,d,{params:f(d.params),hash:Ys(W.hash),redirectedFrom:void 0,href:p})}let S;if("path"in y)S=te({},y,{path:$i(n,y.path,O.path).path});else{const W=te({},y.params);for(const d in W)W[d]==null&&delete W[d];S=te({},y,{params:h(y.params)}),O.params=h(O.params)}const k=e.resolve(S,O),Z=y.hash||"";k.params=u(f(k.params));const re=I_(s,te({},y,{hash:ag(Z),path:k.path})),j=i.createHref(re);return te({fullPath:re,hash:Z,query:s===Dl?pg(y.query):y.query||{}},k,{redirectedFrom:void 0,href:j})}function B(y){return typeof y=="string"?$i(n,y,c.value.path):te({},y)}function G(y,O){if(a!==y)return Cn(8,{from:O,to:y})}function X(y){return nt(y)}function Se(y){return X(te(B(y),{replace:!0}))}function Oe(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:S}=O;let k=typeof S=="function"?S(y):S;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=B(k):{path:k},k.params={}),te({query:y.query,hash:y.hash,params:y.params},k)}}function nt(y,O){const S=a=P(y),k=c.value,Z=y.state,re=y.force,j=y.replace===!0,W=Oe(S);if(W)return nt(te(B(W),{state:Z,force:re,replace:j}),O||S);const d=S;d.redirectedFrom=O;let p;return!re&&T_(s,k,S)&&(p=Cn(16,{to:d,from:k}),nn(k,k,!0,!1)),(p?Promise.resolve(p):Ke(d,k)).catch(g=>vt(g)?vt(g,2)?g:ke(g):ie(g,d,k)).then(g=>{if(g){if(vt(g,2))return nt(te(B(g.to),{state:Z,force:re,replace:j}),O||d)}else g=st(d,k,!0,j,Z);return gt(d,k,g),g})}function Jt(y,O){const S=G(y,O);return S?Promise.reject(S):Promise.resolve()}function Ke(y,O){let S;const[k,Z,re]=wg(y,O);S=Vi(k.reverse(),"beforeRouteLeave",y,O);for(const W of k)W.leaveGuards.forEach(d=>{S.push(bt(d,y,O))});const j=Jt.bind(null,y,O);return S.push(j),rn(S).then(()=>{S=[];for(const W of r.list())S.push(bt(W,y,O));return S.push(j),rn(S)}).then(()=>{S=Vi(Z,"beforeRouteUpdate",y,O);for(const W of Z)W.updateGuards.forEach(d=>{S.push(bt(d,y,O))});return S.push(j),rn(S)}).then(()=>{S=[];for(const W of y.matched)if(W.beforeEnter&&!O.matched.includes(W))if(Array.isArray(W.beforeEnter))for(const d of W.beforeEnter)S.push(bt(d,y,O));else S.push(bt(W.beforeEnter,y,O));return S.push(j),rn(S)}).then(()=>(y.matched.forEach(W=>W.enterCallbacks={}),S=Vi(re,"beforeRouteEnter",y,O),S.push(j),rn(S))).then(()=>{S=[];for(const W of o.list())S.push(bt(W,y,O));return S.push(j),rn(S)}).catch(W=>vt(W,8)?W:Promise.reject(W))}function gt(y,O,S){for(const k of l.list())k(y,O,S)}function st(y,O,S,k,Z){const re=G(y,O);if(re)return re;const j=O===yt,W=an?history.state:{};S&&(k||j?i.replace(y.fullPath,te({scroll:j&&W&&W.scroll},Z)):i.push(y.fullPath,Z)),c.value=y,nn(y,O,S,j),ke()}let it;function Zt(){it=i.listen((y,O,S)=>{const k=P(y),Z=Oe(k);if(Z){nt(te(Z,{replace:!0}),k).catch(Gn);return}a=k;const re=c.value;an&&k_(Nl(re.fullPath,S.delta),Si()),Ke(k,re).catch(j=>vt(j,12)?j:vt(j,2)?(nt(j.to,k).then(W=>{vt(W,20)&&!S.delta&&S.type===us.pop&&i.go(-1,!1)}).catch(Gn),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ie(j,k,re))).then(j=>{j=j||st(k,re,!1),j&&(S.delta?i.go(-S.delta,!1):S.type===us.pop&&vt(j,20)&&i.go(-1,!1)),gt(k,re,j)}).catch(Gn)})}let en=Ln(),tn=Ln(),de;function ie(y,O,S){ke(y);const k=tn.list();return k.length?k.forEach(Z=>Z(y,O,S)):console.error(y),Promise.reject(y)}function J(){return de&&c.value!==yt?Promise.resolve():new Promise((y,O)=>{en.add([y,O])})}function ke(y){return de||(de=!y,Zt(),en.list().forEach(([O,S])=>y?S(y):O()),en.reset()),y}function nn(y,O,S,k){const{scrollBehavior:Z}=t;if(!an||!Z)return Promise.resolve();const re=!S&&M_(Nl(y.fullPath,0))||(k||!S)&&history.state&&history.state.scroll||null;return zc().then(()=>Z(y,O,re)).then(j=>j&&O_(j)).catch(j=>ie(j,y,O))}const rt=y=>i.go(y);let Ge;const Fe=new Set;return{currentRoute:c,addRoute:_,removeRoute:m,hasRoute:R,getRoutes:N,resolve:P,options:t,push:X,replace:Se,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:tn.add,isReady:J,install(y){const O=this;y.component("RouterLink",mg),y.component("RouterView",Cg),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>jn(c)}),an&&!Ge&&c.value===yt&&(Ge=!0,X(i.location).catch(Z=>{}));const S={};for(const Z in yt)S[Z]=et(()=>c.value[Z]);y.provide(Ti,O),y.provide(Ha,ms(S)),y.provide(gr,c);const k=y.unmount;Fe.add(y),y.unmount=function(){Fe.delete(y),Fe.size<1&&(a=yt,it&&it(),c.value=yt,Ge=!1,de=!1),k()}}}}function rn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wg(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>En(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>En(a,c))||i.push(c))}return[n,s,i]}function Vv(){return ct(Ti)}const Ig=bg({history:B_(),routes:[{path:"/",component:()=>Pt(()=>import("./LandingPage.c759a94e.js"),["assets/LandingPage.c759a94e.js","assets/LandingPage.725f98f0.css","assets/index-7078a255.2bdf327a.js"])},{path:"/practice",component:()=>Pt(()=>import("./Practice.913daef6.js"),["assets/Practice.913daef6.js","assets/index-7078a255.2bdf327a.js","assets/Navigation.cf78933b.js","assets/Navigation.285f2afa.css","assets/TextPractice.5a99c877.js","assets/TextPractice.acbcfce7.css","assets/texts.eb7eb334.js"])},{path:"/textpractice",component:()=>Pt(()=>import("./TextPractice.5a99c877.js"),["assets/TextPractice.5a99c877.js","assets/TextPractice.acbcfce7.css","assets/texts.eb7eb334.js"])},{path:"/letterpractice",component:()=>Pt(()=>import("./SingleLetterPractice.36b93637.js"),["assets/SingleLetterPractice.36b93637.js","assets/SingleLetterPractice.f682bc67.css","assets/texts.eb7eb334.js"])},{path:"/profile",component:()=>Pt(()=>import("./Profile.796394f5.js"),["assets/Profile.796394f5.js","assets/Navigation.cf78933b.js","assets/Navigation.285f2afa.css"])},{path:"/test",component:()=>Pt(()=>import("./Test.d17d0a20.js"),["assets/Test.d17d0a20.js","assets/Test.4bfa31be.css"])},{path:"/challenges",component:()=>Pt(()=>import("./Challenges.3590d6fd.js"),["assets/Challenges.3590d6fd.js","assets/Challenges.8051a1ee.css","assets/Navigation.cf78933b.js","assets/Navigation.285f2afa.css"])}]}),Ul="@firebase/database",Wl="0.12.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa="";function Tg(t){Qa=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Sg(e)}}catch{}return new Rg},Bt=Xa("localStorage"),vr=Xa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Ma("@firebase/database"),xg=function(){let t=1;return function(){return t++}}(),Ja=function(t){const e=gp(t),n=new dp;n.update(e);const s=n.digest();return Xr.encodeByteArray(s)},ys=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ys.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let Vt=null,$l=!0;const Ng=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_n.logLevel=oe.VERBOSE,Vt=_n.log.bind(_n),e&&vr.set("logging_enabled",!0)):typeof t=="function"?Vt=t:(Vt=null,vr.remove("logging_enabled"))},be=function(...t){if($l===!0&&($l=!1,Vt===null&&vr.get("logging_enabled")===!0&&Ng(!0)),Vt){const e=ys.apply(null,t);Vt(e)}},vs=function(t){return function(...e){be(t,...e)}},Er=function(...t){const e="FIREBASE INTERNAL ERROR: "+ys(...t);_n.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${ys(...t)}`;throw _n.error(e),new Error(e)},Ae=function(...t){const e="FIREBASE WARNING: "+ys(...t);_n.warn(e)},Ag=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Za=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Pg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bn="[MIN_NAME]",Kt="[MAX_NAME]",An=function(t,e){if(t===e)return 0;if(t===bn||e===Kt)return-1;if(e===bn||t===Kt)return 1;{const n=Vl(t),s=Vl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Og=function(t,e){return t===e?0:t<e?-1:1},Fn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},no=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=no(t[e[s]]);return n+="}",n},eu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tu=function(t){b(!Za(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},kg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Mg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Dg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Lg=new RegExp("^-?(0*)\\d{1,10}$"),Fg=-2147483648,Bg=2147483647,Vl=function(t){if(Lg.test(t)){const e=Number(t);if(e>=Fg&&e<=Bg)return e}return null},Pn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ae("Exception was thrown by user callback.",n),e},Math.floor(0))}},Hg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ae(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ae(e)}}class Cr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="5",nu="v",su="s",iu="r",ru="f",ou=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lu="ls",$g="p",br="ac",cu="websocket",au="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function uu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===cu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===au)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jg(t)&&(n.ns=t.namespace);const i=[];return Pe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.counters_={}}incrementCounter(e,n=1){pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return np(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={},qi={};function io(t){const e=t.toString();return ji[e]||(ji[e]=new qg),ji[e]}function zg(t,e){const n=t.toString();return qi[n]||(qi[n]=e()),qi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Pn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="start",Gg="close",Yg="pLPCommand",Qg="pRTLPCB",hu="id",fu="pw",du="ser",Xg="cb",Jg="seg",Zg="ts",em="d",tm="dframe",pu=1870,_u=30,nm=pu-_u,sm=25e3,im=3e4;class un{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vs(e),this.stats_=io(n),this.urlFn=c=>(this.appCheckToken&&(c[br]=this.appCheckToken),uu(n,au,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Kg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(im)),Pg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ro((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jl)this.id=l,this.password=c;else if(o===Gg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[jl]="t",s[du]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Xg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[nu]=so,this.transportSessionId&&(s[su]=this.transportSessionId),this.lastSessionId&&(s[lu]=this.lastSessionId),this.applicationId&&(s[$g]=this.applicationId),this.appCheckToken&&(s[br]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&ou.test(location.hostname)&&(s[iu]=ru);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){un.forceAllow_=!0}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){return un.forceAllow_?!0:!un.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!kg()&&!Mg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ia(n),i=eu(s,nm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[tm]="t",s[hu]=e,s[fu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ro{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xg(),window[Yg+this.uniqueCallbackIdentifier]=e,window[Qg+this.uniqueCallbackIdentifier]=n,this.myIFrame=ro.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hu]=this.myID,e[fu]=this.myPW,e[du]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_u+s.length<=pu;){const o=this.pendingSegs.shift();s=s+"&"+Jg+i+"="+o.seg+"&"+Zg+i+"="+o.ts+"&"+em+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(sm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=16384,om=45e3;let Qs=null;typeof MozWebSocket!="undefined"?Qs=MozWebSocket:typeof WebSocket!="undefined"&&(Qs=WebSocket);class Ue{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vs(this.connId),this.stats_=io(n),this.connURL=Ue.connectionURL_(n,o,l,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i){const r={};return r[nu]=so,typeof location!="undefined"&&location.hostname&&ou.test(location.hostname)&&(r[iu]=ru),n&&(r[su]=n),s&&(r[lu]=s),i&&(r[br]=i),uu(e,cu,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bt.set("previous_websocket_failure",!0);try{if(!Na()){const s={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Qs(this.connURL,[],s)}}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qs!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Bt.isInMemoryStorage||Bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eu(n,rm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(om))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[un,Ue]}initTransports_(e){const n=Ue&&Ue.isAvailable();let s=n&&!Ue.previouslyFailed();if(e.webSocketOnly&&(n||Ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ue];else{const i=this.transports_=[];for(const r of oo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=6e4,cm=5e3,am=10*1024,um=100*1024,zi="t",ql="d",hm="s",zl="r",fm="e",Kl="o",Gl="a",Yl="n",Ql="p",dm="h";class pm{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vs("c:"+this.id+":"),this.transportManager_=new oo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>um?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>am?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zi in e){const n=e[zi];n===Gl?this.upgradeIfSecondaryHealthy_():n===zl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ql,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fn(zi,e);if(ql in e){const s=e[ql];if(n===dm)this.onHandshake_(s);else if(n===Yl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hm?this.onConnectionShutdown_(s):n===zl?this.onReset_(s):n===fm?Er("Server Error: "+s):n===Kl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Er("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),so!==s&&Ae("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ql,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends mu{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!xa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xs}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=32,Jl=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new se("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rt(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function yu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _m(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Eu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return xe(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lo(t,e){if(Rt(t)!==Rt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function $e(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Rt(t)>Rt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class gm{constructor(e,n){this.errorPrefix_=n,this.parts_=vu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wi(this.parts_[s]);Cu(this)}}function mm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wi(e),Cu(t)}function ym(t){const e=t.parts_.pop();t.byteLength_-=wi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Cu(t){if(t.byteLength_>Jl)throw new Error(t.errorPrefix_+"has a key path longer than "+Jl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xl+") or object contains a cycle "+Mt(t))}function Mt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends mu{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new co}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=1e3,vm=60*5*1e3,Em=3*1e3,Zl=30*1e3,Cm=1.3,bm=3e4,wm="server_kill",ec=3;class at extends gu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=at.nextPersistentConnectionId_++,this.log_=vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bn,this.maxReconnectDelay_=vm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Na())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");co.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new bi,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,l,!1,null),n.resolve(l)):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},Em),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;at.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ae(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=up(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Er("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bm&&(this.reconnectDelay_=Bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Cm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+at.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new pm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ae(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(wm)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ae(h),c())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>no(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ec&&(this.reconnectDelay_=Zl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ec&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qa.replace(/\./g,"-")]=1,xa()?e["framework.cordova"]=1:ip()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xs.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}at.nextPersistentConnectionId_=0;at.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(bn,e),i=new V(bn,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class bu extends Ri{static get __EMPTY_NODE(){return xs}static set __EMPTY_NODE(e){xs=e}compare(e,n){return An(e.name,n.name)}isDefinedOn(e){throw xn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(Kt,xs)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,xs)}toString(){return".key"}}const gn=new bu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ge.RED,this.left=i!=null?i:Ne.EMPTY_NODE,this.right=r!=null?r:Ne.EMPTY_NODE}copy(e,n,s,i,r){return new ge(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class Im{copy(e,n,s,i,r){return this}insert(e,n,s){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ne{constructor(e,n=Ne.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ne(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ns(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ns(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ns(this.root_,null,this.comparator_,!0,e)}}Ne.EMPTY_NODE=new Im;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e){return An(t.name,e.name)}function ao(t,e){return An(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;function Sm(t){wr=t}const wu=function(t){return typeof t=="number"?"number:"+tu(t):"string:"+t},Iu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pt(e,".sv"),"Priority must be a string or number.")}else b(t===wr||t.isEmpty(),"priority of unexpected type.");b(t===wr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iu(this.priorityNode_)}static set __childrenNodeConstructor(e){tc=e}static get __childrenNodeConstructor(){return tc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:$(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Rt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tu(this.value_):e+=this.value_,this.lazyHash_=Ja(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),r=_e.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu,Su;function Rm(t){Tu=t}function xm(t){Su=t}class Nm extends Ri{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?An(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(Kt,new _e("[PRIORITY-POST]",Su))}makePost(e,n){const s=Tu(e);return new V(n,new _e("[PRIORITY-POST]",s))}toString(){return".priority"}}const he=new Nm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=Math.log(2);class Pm{constructor(e){const n=r=>parseInt(Math.log(r)/Am,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Js=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new ge(f,h.node,ge.BLACK,null,null);{const _=parseInt(u/2,10)+c,m=i(c,_),N=i(_+1,a);return h=t[_],f=n?n(h):h,new ge(f,h.node,ge.BLACK,m,N)}},r=function(c){let a=null,u=null,h=t.length;const f=function(m,N){const R=h-m,P=h;h-=m;const B=i(R+1,P),G=t[R],X=n?n(G):G;_(new ge(X,G.node,N,null,B))},_=function(m){a?(a.left=m,a=m):(u=m,a=m)};for(let m=0;m<c.count;++m){const N=c.nextBitIsOne(),R=Math.pow(2,c.count-(m+1));N?f(R,ge.BLACK):(f(R,ge.BLACK),f(R,ge.RED))}return u},o=new Pm(t.length),l=r(o);return new Ne(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;const on={};class lt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(on&&he,"ChildrenNode.ts has not been loaded"),Ki=Ki||new lt({".priority":on},{".priority":he}),Ki}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ne?n:null}hasIndex(e){return pt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==gn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Js(s,e.getCompare()):l=on;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new lt(u,a)}addToIndexes(e,n){const s=zs(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===on)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(V.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),Js(l,o.getCompare())}else return on;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new V(e.name,l))),c.insert(e,e.node)}});return new lt(s,this.indexSet_)}removeFromIndexes(e,n){const s=zs(this.indexes_,i=>{if(i===on)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new lt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Iu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hn||(Hn=new L(new Ne(ao),null,lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{b($(e)!==".priority"||Rt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(he,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wu(this.getPriority().val())+":"),this.forEachChild(he,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ja(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===gn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(he),i=n.getIterator(he);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Om extends L{constructor(){super(new Ne(ao),L.EMPTY_NODE,lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Es=new Om;Object.defineProperties(V,{MIN:{value:new V(bn,L.EMPTY_NODE)},MAX:{value:new V(Kt,Es)}});bu.__EMPTY_NODE=L.EMPTY_NODE;_e.__childrenNodeConstructor=L;Sm(Es);xm(Es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=!0;function ve(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,ve(e))}if(!(t instanceof Array)&&km){const n=[];let s=!1;if(Pe(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=ve(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new V(o,c)))}}),n.length===0)return L.EMPTY_NODE;const r=Js(n,Tm,o=>o.name,ao);if(s){const o=Js(n,he.getCompare());return new L(r,ve(e),new lt({".priority":o},{".priority":he}))}else return new L(r,ve(e),lt.Default)}else{let n=L.EMPTY_NODE;return Pe(t,(s,i)=>{if(pt(t,s)&&s.substring(0,1)!=="."){const r=ve(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ve(e))}}Rm(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm extends Ri{constructor(e){super(),this.indexPath_=e,b(!q(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?An(e.name,n.name):r}makePost(e,n){const s=ve(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Es);return new V(Kt,e)}toString(){return vu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm extends Ri{compare(e,n){const s=e.node.compareTo(n.node);return s===0?An(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=ve(e);return new V(n,s)}toString(){return".value"}}const Lm=new Dm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){return{type:"value",snapshotNode:t}}function wn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Fm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(wn(n,s)):o.trackChildChange(fs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(he,(i,r)=>{n.hasChild(i)||s.trackChildChange(hs(i,r))}),n.isLeafNode()||n.forEachChild(he,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fs(i,r,o))}else s.trackChildChange(wn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.indexedFilter_=new uo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ds.getStartPost_(e),this.endPost_=ds.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(he,(o,l)=>{r.matches(new V(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.rangedFilter_=new ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:c=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,c)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r,o,l,c;if(this.reverse_){c=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else c=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let a=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&l(r,h)<=0&&(u=!0),u&&a<this.limit_&&l(h,o)<=0?a++:i=i.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const c=new V(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(fs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(hs(n,h));const N=l.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(wn(f.name,f.node)),N.updateImmediateChild(f.name,f.node)):N}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(hs(a.name,a.node)),r.trackChildChange(wn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new ho;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hm(t){return t.loadsAllData()?new uo(t.getIndex()):t.hasLimit()?new Bm(t):new ds(t)}function nc(t){const e={};if(t.isDefault())return e;let n;return t.index_===he?n="$priority":t.index_===Lm?n="$value":t.index_===gn?n="$key":(b(t.index_ instanceof Mm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_&&(e.startAt=me(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+me(t.indexStartName_))),t.endSet_&&(e.endAt=me(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+me(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends gu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=vs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zs.getListenId_(e,s),l={};this.listens_[o]=l;const c=nc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),vn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=Zs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=nc(e._queryParams),s=e._path.toString(),i=new bi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ls(l.responseText)}catch{Ae("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Ae("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return{value:null,children:new Map}}function xu(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,ei());const i=t.children.get(s);e=le(e),xu(i,e,n)}}function Ir(t,e,n){t.value!==null?n(e,t.value):Wm(t,(s,i)=>{const r=new se(e.toString()+"/"+s);Ir(i,r,n)})}function Wm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=10*1e3,Vm=30*1e3,jm=5*60*1e3;class qm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $m(e);const s=ic+(Vm-ic)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Pe(e,(i,r)=>{r>0&&pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*jm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function Nu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function po(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ve.ACK_USER_WRITE,this.source=Nu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new ti(Y(),n,this.revert)}}else return b($(this.path)===e,"operationForChild called for unrelated child."),new ti(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.source=e,this.path=n,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new ps(this.source,Y()):new ps(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ve.OVERWRITE}operationForChild(e){return q(this.path)?new Gt(this.source,Y(),this.snap.getImmediateChild(e)):new Gt(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ve.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Gt(this.source,Y(),n.value):new _s(this.source,Y(),n)}else return b($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Km(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Fm(o.childName,o.snapshotNode))}),Un(t,i,"child_removed",e,s,n),Un(t,i,"child_added",e,s,n),Un(t,i,"child_moved",r,s,n),Un(t,i,"child_changed",e,s,n),Un(t,i,"value",e,s,n),i}function Un(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Ym(t,l,c)),o.forEach(l=>{const c=Gm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Gm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ym(t,e,n){if(e.childName==null||n.childName==null)throw xn("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e){return{eventCache:t,serverCache:e}}function Xn(t,e,n,s){return xi(new Yt(e,n,s),t.serverCache)}function Au(t,e,n,s){return xi(t.eventCache,new Yt(e,n,s))}function Tr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi;const Qm=()=>(Gi||(Gi=new Ne(Og)),Gi);class ae{constructor(e,n=Qm()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Pe(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(q(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:pe(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new ae(null)}}set(e,n){if(q(e))return new ae(n,this.children);{const s=$(e),r=(this.children.get(s)||new ae(null)).set(le(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(q(e))return n;{const s=$(e),r=(this.children.get(s)||new ae(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(le(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),pe(n,i),s):new ae(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.writeTree_=e}static empty(){return new ze(new ae(null))}}function Jn(t,e,n){if(q(e))return new ze(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=xe(i,e);return r=r.updateChild(o,n),new ze(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new ze(r)}}}function rc(t,e,n){let s=t;return Pe(n,(i,r)=>{s=Jn(s,pe(e,i),r)}),s}function oc(t,e){if(q(e))return ze.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new ze(n)}}function Sr(t,e){return Xt(t,e)!=null}function Xt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function lc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function Tt(t,e){if(q(e))return t;{const n=Xt(t,e);return n!=null?new ze(new ae(n)):new ze(t.writeTree_.subtree(e))}}function Rr(t){return t.writeTree_.isEmpty()}function In(t,e){return Pu(Y(),t.writeTree_,e)}function Pu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Pu(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e){return Du(e,t)}function Xm(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Jn(t.visibleWrites,e,n)),t.lastWriteId=s}function Jm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Zm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ey(l,s.path)?i=!1:$e(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return ty(t),!0;if(s.snap)t.visibleWrites=oc(t.visibleWrites,s.path);else{const l=s.children;Pe(l,c=>{t.visibleWrites=oc(t.visibleWrites,pe(s.path,c))})}return!0}else return!1}function ey(t,e){if(t.snap)return $e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$e(pe(t.path,n),e))return!0;return!1}function ty(t){t.visibleWrites=Ou(t.allWrites,ny,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ny(t){return t.visible}function Ou(t,e,n){let s=ze.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)$e(n,o)?(l=xe(n,o),s=Jn(s,l,r.snap)):$e(o,n)&&(l=xe(o,n),s=Jn(s,Y(),r.snap.getChild(l)));else if(r.children){if($e(n,o))l=xe(n,o),s=rc(s,l,r.children);else if($e(o,n))if(l=xe(o,n),q(l))s=rc(s,Y(),r.children);else{const c=vn(r.children,$(l));if(c){const a=c.getChild(le(l));s=Jn(s,Y(),a)}}}else throw xn("WriteRecord should have .snap or .children")}}return s}function ku(t,e,n,s,i){if(!s&&!i){const r=Xt(t.visibleWrites,e);if(r!=null)return r;{const o=Tt(t.visibleWrites,e);if(Rr(o))return n;if(n==null&&!Sr(o,Y()))return null;{const l=n||L.EMPTY_NODE;return In(o,l)}}}else{const r=Tt(t.visibleWrites,e);if(!i&&Rr(r))return n;if(!i&&n==null&&!Sr(r,Y()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&($e(a.path,e)||$e(e,a.path))},l=Ou(t.allWrites,o,e),c=n||L.EMPTY_NODE;return In(l,c)}}}function sy(t,e,n){let s=L.EMPTY_NODE;const i=Xt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Tt(t.visibleWrites,e);return n.forEachChild(he,(o,l)=>{const c=In(Tt(r,new se(o)),l);s=s.updateImmediateChild(o,c)}),lc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Tt(t.visibleWrites,e);return lc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function iy(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(Sr(t.visibleWrites,r))return null;{const o=Tt(t.visibleWrites,r);return Rr(o)?i.getChild(n):In(o,i.getChild(n))}}function ry(t,e,n,s){const i=pe(e,n),r=Xt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Tt(t.visibleWrites,i);return In(o,s.getNode().getImmediateChild(n))}else return null}function oy(t,e){return Xt(t.visibleWrites,e)}function ly(t,e,n,s,i,r,o){let l;const c=Tt(t.visibleWrites,e),a=Xt(c,Y());if(a!=null)l=a;else if(n!=null)l=In(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function cy(){return{visibleWrites:ze.empty(),allWrites:[],lastWriteId:-1}}function ni(t,e,n,s){return ku(t.writeTree,t.treePath,e,n,s)}function go(t,e){return sy(t.writeTree,t.treePath,e)}function cc(t,e,n,s){return iy(t.writeTree,t.treePath,e,n,s)}function si(t,e){return oy(t.writeTree,pe(t.treePath,e))}function ay(t,e,n,s,i,r){return ly(t.writeTree,t.treePath,e,n,s,i,r)}function mo(t,e,n){return ry(t.writeTree,t.treePath,e,n)}function Mu(t,e){return Du(pe(t.treePath,e),t.writeTree)}function Du(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,hs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,wn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fs(s,e.snapshotNode,i.oldSnap));else throw xn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Lu=new hy;class yo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qt(this.viewCache_),r=ay(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){return{filter:t}}function dy(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function py(t,e,n,s,i){const r=new uy;let o,l;if(n.type===Ve.OVERWRITE){const a=n;a.source.fromUser?o=xr(t,e,a.path,a.snap,s,i,r):(b(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=ii(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Ve.MERGE){const a=n;a.source.fromUser?o=gy(t,e,a.path,a.children,s,i,r):(b(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Nr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Ve.ACK_USER_WRITE){const a=n;a.revert?o=vy(t,e,a.path,s,i,r):o=my(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Ve.LISTEN_COMPLETE)o=yy(t,e,n.path,s,r);else throw xn("Unknown operation type: "+n.type);const c=r.getChanges();return _y(e,o,c),{viewCache:o,changes:c}}function _y(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Tr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ru(Tr(e)))}}function Fu(t,e,n,s,i,r){const o=e.eventCache;if(si(s,n)!=null)return e;{let l,c;if(q(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=Qt(e),u=a instanceof L?a:L.EMPTY_NODE,h=go(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=ni(s,Qt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){b(Rt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=cc(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=le(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=cc(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=mo(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return Xn(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function ii(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=$(n);if(!c.isCompleteForPath(n)&&Rt(n)>1)return e;const m=le(n),R=c.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?a=u.updatePriority(c.getNode(),R):a=u.updateChild(c.getNode(),_,R,m,Lu,null)}const h=Au(e,a,c.isFullyInitialized()||q(n),u.filtersNodes()),f=new yo(i,h,r);return Fu(t,h,n,i,f,l)}function xr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new yo(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Xn(e,a,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Xn(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=le(n),_=l.getNode().getImmediateChild(h);let m;if(q(f))m=s;else{const N=u.getCompleteChild(h);N!=null?yu(f)===".priority"&&N.getChild(Eu(f)).isEmpty()?m=N:m=N.updateChild(f,s):m=L.EMPTY_NODE}if(_.equals(m))c=e;else{const N=t.filter.updateChild(l.getNode(),h,m,f,u,o);c=Xn(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ac(t,e){return t.eventCache.isCompleteForChild(e)}function gy(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=pe(n,c);ac(e,$(u))&&(l=xr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=pe(n,c);ac(e,$(u))||(l=xr(t,l,u,a,i,r,o))}),l}function uc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Nr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new ae(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=uc(t,_,f);c=ii(t,c,new se(h),m,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),N=uc(t,m,f);c=ii(t,c,new se(h),N,i,r,o,l)}}),c}function my(t,e,n,s,i,r,o){if(si(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ii(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new ae(null);return c.getNode().forEachChild(gn,(u,h)=>{a=a.set(new se(u),h)}),Nr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ae(null);return s.foreach((u,h)=>{const f=pe(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),Nr(t,e,n,a,i,r,l,o)}}function yy(t,e,n,s,i){const r=e.serverCache,o=Au(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Fu(t,o,n,s,Lu,i)}function vy(t,e,n,s,i,r){let o;if(si(s,n)!=null)return e;{const l=new yo(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ni(s,Qt(e));else{const h=e.serverCache.getNode();b(h instanceof L,"serverChildren would be complete if leaf node"),u=go(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=$(n);let h=mo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,le(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,L.EMPTY_NODE,le(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ni(s,Qt(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||si(s,Y())!=null,Xn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new uo(s.getIndex()),r=Hm(s);this.processor_=fy(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new Yt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Yt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=xi(h,u),this.eventGenerator_=new zm(this.query_)}get query(){return this.query_}}function Cy(t){return t.viewCache_.serverCache.getNode()}function by(t,e){const n=Qt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function hc(t){return t.eventRegistrations_.length===0}function wy(t,e){t.eventRegistrations_.push(e)}function fc(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function dc(t,e,n,s){e.type===Ve.MERGE&&e.source.queryId!==null&&(b(Qt(t.viewCache_),"We should always have a full cache before handling merges"),b(Tr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=py(t.processor_,i,e,n,s);return dy(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Bu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Iy(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(r,o)=>{s.push(wn(r,o))}),n.isFullyInitialized()&&s.push(Ru(n.getNode())),Bu(t,s,n.getNode(),e)}function Bu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Km(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri;class Ty{constructor(){this.views=new Map}}function Sy(t){b(!ri,"__referenceConstructor has already been defined"),ri=t}function Ry(){return b(ri,"Reference.ts has not been loaded"),ri}function xy(t){return t.views.size===0}function vo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),dc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(dc(o,e,n,s));return r}}function Ny(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ni(n,i?s:null),c=!1;l?c=!0:s instanceof L?(l=go(n,s),c=!1):(l=L.EMPTY_NODE,c=!1);const a=xi(new Yt(l,c,!1),new Yt(s,i,!1));return new Ey(e,a)}return o}function Ay(t,e,n,s,i,r){const o=Ny(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wy(o,n),Iy(o,n)}function Py(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=xt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(fc(a,n,s)),hc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(fc(c,n,s)),hc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!xt(t)&&r.push(new(Ry())(e._repo,e._path)),{removed:r,events:o}}function Hu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mn(t,e){let n=null;for(const s of t.views.values())n=n||by(s,e);return n}function Uu(t,e){if(e._queryParams.loadsAllData())return Ni(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Wu(t,e){return Uu(t,e)!=null}function xt(t){return Ni(t)!=null}function Ni(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;function Oy(t){b(!oi,"__referenceConstructor has already been defined"),oi=t}function ky(){return b(oi,"Reference.ts has not been loaded"),oi}let My=1;class pc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=cy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $u(t,e,n,s,i){return Xm(t.pendingWriteTree_,e,n,s,i),i?Cs(t,new Gt(Nu(),e,n)):[]}function Ht(t,e,n=!1){const s=Jm(t.pendingWriteTree_,e);if(Zm(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(Y(),!0):Pe(s.children,o=>{r=r.set(new se(o),!0)}),Cs(t,new ti(s.path,r,n))}else return[]}function Ai(t,e,n){return Cs(t,new Gt(fo(),e,n))}function Dy(t,e,n){const s=ae.fromObject(n);return Cs(t,new _s(fo(),e,s))}function Ly(t,e){return Cs(t,new ps(fo(),e))}function Fy(t,e,n){const s=Co(t,n);if(s){const i=bo(s),r=i.path,o=i.queryId,l=xe(r,e),c=new ps(po(o),l);return wo(t,r,c)}else return[]}function Ar(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||Wu(r,e))){const l=Py(r,e,n,s);xy(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;o=l.events;const a=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>xt(f));if(a&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=Uy(h);for(let _=0;_<f.length;++_){const m=f[_],N=m.query,R=qu(t,m);t.listenProvider_.startListening(Zn(N),li(t,N),R.hashFn,R.onComplete)}}}!u&&c.length>0&&!s&&(a?t.listenProvider_.stopListening(Zn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(Pi(h));t.listenProvider_.stopListening(Zn(h),f)})),Wy(t,c)}return o}function By(t,e,n,s){const i=Co(t,s);if(i!=null){const r=bo(i),o=r.path,l=r.queryId,c=xe(o,e),a=new Gt(po(l),c,n);return wo(t,o,a)}else return[]}function Hy(t,e,n,s){const i=Co(t,s);if(i){const r=bo(i),o=r.path,l=r.queryId,c=xe(o,e),a=ae.fromObject(n),u=new _s(po(l),c,a);return wo(t,o,u)}else return[]}function _c(t,e,n){const s=e._path;let i=null,r=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const _=xe(h,s);i=i||mn(f,_),r=r||xt(f)});let o=t.syncPointTree_.get(s);o?(r=r||xt(o),i=i||mn(o,Y())):(o=new Ty,t.syncPointTree_=t.syncPointTree_.set(s,o));let l;i!=null?l=!0:(l=!1,i=L.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,_)=>{const m=mn(_,Y());m&&(i=i.updateImmediateChild(f,m))}));const c=Wu(o,e);if(!c&&!e._queryParams.loadsAllData()){const h=Pi(e);b(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=$y();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const a=_o(t.pendingWriteTree_,s);let u=Ay(o,e,n,a,i,l);if(!c&&!r){const h=Uu(o,e);u=u.concat(Vy(t,e,h))}return u}function Eo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=xe(o,e),a=mn(l,c);if(a)return a});return ku(i,e,r,n,!0)}function Cs(t,e){return Vu(e,t.syncPointTree_,null,_o(t.pendingWriteTree_,Y()))}function Vu(t,e,n,s){if(q(t.path))return ju(t,e,n,s);{const i=e.get(Y());n==null&&i!=null&&(n=mn(i,Y()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Mu(s,o);r=r.concat(Vu(l,c,a,u))}return i&&(r=r.concat(vo(i,t,s,n))),r}}function ju(t,e,n,s){const i=e.get(Y());n==null&&i!=null&&(n=mn(i,Y()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Mu(s,o),u=t.operationForChild(o);u&&(r=r.concat(ju(u,l,c,a)))}),i&&(r=r.concat(vo(i,t,s,n))),r}function qu(t,e){const n=e.query,s=li(t,n);return{hashFn:()=>(Cy(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Fy(t,n._path,s):Ly(t,n._path);{const r=Dg(i,n);return Ar(t,n,null,r)}}}}function li(t,e){const n=Pi(e);return t.queryToTagMap.get(n)}function Pi(t){return t._path.toString()+"$"+t._queryIdentifier}function Co(t,e){return t.tagToQueryMap.get(e)}function bo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function wo(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=_o(t.pendingWriteTree_,e);return vo(s,n,i,null)}function Uy(t){return t.fold((e,n,s)=>{if(n&&xt(n))return[Ni(n)];{let i=[];return n&&(i=Hu(n)),Pe(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ky())(t._repo,t._path):t}function Wy(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Pi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function $y(){return My++}function Vy(t,e,n){const s=e._path,i=li(t,e),r=qu(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!q(a)&&u&&xt(u))return[Ni(u).query];{let f=[];return u&&(f=f.concat(Hu(u).map(_=>_.query))),Pe(h,(_,m)=>{f=f.concat(m)}),f}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(Zn(u),li(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Io(n)}node(){return this.node_}}class To{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new To(this.syncTree_,n)}node(){return Eo(this.syncTree_,this.path_)}}const jy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gc=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zy(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},zy=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ky=function(t,e,n,s){return So(e,new To(n,t),s)},zu=function(t,e,n){return So(t,new Io(e),n)};function So(t,e,n){const s=t.getPriority().val(),i=gc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=gc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new _e(l,ve(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new _e(i))),o.forEachChild(he,(l,c)=>{const a=So(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function xo(t,e){let n=e instanceof se?e:new se(e),s=t,i=$(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new Ro(i,s,r),n=le(n),i=$(n)}return s}function On(t){return t.node.value}function Ku(t,e){t.node.value=e,Pr(t)}function Gu(t){return t.node.childCount>0}function Gy(t){return On(t)===void 0&&!Gu(t)}function Oi(t,e){Pe(t.node.children,(n,s)=>{e(new Ro(n,t,s))})}function Yu(t,e,n,s){n&&!s&&e(t),Oi(t,i=>{Yu(i,e,!0,s)}),n&&s&&e(t)}function Yy(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bs(t){return new se(t.parent===null?t.name:bs(t.parent)+"/"+t.name)}function Pr(t){t.parent!==null&&Qy(t.parent,t.name,t)}function Qy(t,e,n){const s=Gy(n),i=pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Pr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=/[\[\].#$\/\u0000-\u001F\u007F]/,Jy=/[\[\].#$\u0000-\u001F\u007F]/,Yi=10*1024*1024,Qu=function(t){return typeof t=="string"&&t.length!==0&&!Xy.test(t)},Xu=function(t){return typeof t=="string"&&t.length!==0&&!Jy.test(t)},Zy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xu(t)},ev=function(t,e,n,s){s&&e===void 0||No(Zr(t,"value"),e,n)},No=function(t,e,n){const s=n instanceof se?new gm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Mt(s)+" with contents = "+e.toString());if(Za(e))throw new Error(t+"contains "+e.toString()+" "+Mt(s));if(typeof e=="string"&&e.length>Yi/3&&wi(e)>Yi)throw new Error(t+"contains a string greater than "+Yi+" utf8 bytes "+Mt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Pe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Qu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mm(s,o),No(t,l,s),ym(s)}),i&&r)throw new Error(t+' contains ".value" child '+Mt(s)+" in addition to actual children.")}},Ju=function(t,e,n,s){if(!(s&&n===void 0)&&!Xu(n))throw new Error(Zr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},tv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ju(t,e,n,s)},nv=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},sv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Zy(n))throw new Error(Zr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ao(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!lo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Zu(t,e,n){Ao(t,n),eh(t,s=>lo(s,e))}function ft(t,e,n){Ao(t,n),eh(t,s=>$e(s,e)||$e(e,s))}function eh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(rv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Vt&&be("event: "+n.toString()),Pn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="repo_interrupt",lv=25;class cv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ei(),this.transactionQueueTree_=new Ro,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function av(t,e,n){if(t.stats_=io(t.repoInfo_),t.forceRestClient_||Hg())t.server_=new Zs(t.repoInfo_,(s,i,r,o)=>{mc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yc(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new at(t.repoInfo_,e,(s,i,r,o)=>{mc(t,s,i,r,o)},s=>{yc(t,s)},s=>{hv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=zg(t.repoInfo_,()=>new qm(t.stats_,t.server_)),t.infoData_=new Um,t.infoSyncTree_=new pc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ai(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Oo(t,"connected",!1),t.serverSyncTree_=new pc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ft(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function uv(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Po(t){return jy({timestamp:uv(t)})}function mc(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=zs(n,a=>ve(a));o=Hy(t.serverSyncTree_,r,c,i)}else{const c=ve(n);o=By(t.serverSyncTree_,r,c,i)}else if(s){const c=zs(n,a=>ve(a));o=Dy(t.serverSyncTree_,r,c)}else{const c=ve(n);o=Ai(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=ki(t,r)),ft(t.eventQueue_,l,o)}function yc(t,e){Oo(t,"connected",e),e===!1&&dv(t)}function hv(t,e){Pe(e,(n,s)=>{Oo(t,n,s)})}function Oo(t,e,n){const s=new se("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(s,i);const r=Ai(t.infoSyncTree_,s,i);ft(t.eventQueue_,s,r)}function th(t){return t.nextWriteId_++}function fv(t,e,n,s,i){ko(t,"set",{path:e.toString(),value:n,priority:s});const r=Po(t),o=ve(n,s),l=Eo(t.serverSyncTree_,e),c=zu(o,l,r),a=th(t),u=$u(t.serverSyncTree_,e,c,a,!0);Ao(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Ae("set at "+e+" failed: "+f);const N=Ht(t.serverSyncTree_,a,!m);ft(t.eventQueue_,e,N),gv(t,i,f,_)});const h=oh(t,e);ki(t,h),ft(t.eventQueue_,h,[])}function dv(t){ko(t,"onDisconnectEvents");const e=Po(t),n=ei();Ir(t.onDisconnect_,Y(),(i,r)=>{const o=Ky(i,r,t.serverSyncTree_,e);xu(n,i,o)});let s=[];Ir(n,Y(),(i,r)=>{s=s.concat(Ai(t.serverSyncTree_,i,r));const o=oh(t,i);ki(t,o)}),t.onDisconnect_=ei(),ft(t.eventQueue_,Y(),s)}function pv(t,e,n){let s;$(e._path)===".info"?s=_c(t.infoSyncTree_,e,n):s=_c(t.serverSyncTree_,e,n),Zu(t.eventQueue_,e._path,s)}function vc(t,e,n){let s;$(e._path)===".info"?s=Ar(t.infoSyncTree_,e,n):s=Ar(t.serverSyncTree_,e,n),Zu(t.eventQueue_,e._path,s)}function _v(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ov)}function ko(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function gv(t,e,n,s){e&&Pn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function nh(t,e,n){return Eo(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Mo(t,e=t.transactionQueueTree_){if(e||Mi(t,e),On(e)){const n=ih(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mv(t,bs(e),n)}else Gu(e)&&Oi(e,n=>{Mo(t,n)})}function mv(t,e,n){const s=n.map(a=>a.currentWriteId),i=nh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{ko(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ht(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Mi(t,xo(t.transactionQueueTree_,e)),Mo(t,t.transactionQueueTree_),ft(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Pn(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ae("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}ki(t,e)}},o)}function ki(t,e){const n=sh(t,e),s=bs(n),i=ih(t,n);return yv(t,i,s),s}function yv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=xe(n,c.path);let u=!1,h;if(b(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=lv)u=!0,h="maxretry",i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0));else{const f=nh(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){No("transaction failed: Data returned ",_,c.path);let m=ve(_);typeof _=="object"&&_!=null&&pt(_,".priority")||(m=m.updatePriority(f.getPriority()));const R=c.currentWriteId,P=Po(t),B=zu(m,f,P);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=B,c.currentWriteId=th(t),o.splice(o.indexOf(R),1),i=i.concat($u(t.serverSyncTree_,c.path,B,c.currentWriteId,c.applyLocally)),i=i.concat(Ht(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0))}ft(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Mi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Pn(s[l]);Mo(t,t.transactionQueueTree_)}function sh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&On(s)===void 0;)s=xo(s,n),e=le(e),n=$(e);return s}function ih(t,e){const n=[];return rh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function rh(t,e,n){const s=On(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Oi(e,i=>{rh(t,i,n)})}function Mi(t,e){const n=On(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ku(e,n.length>0?n:void 0)}Oi(e,s=>{Mi(t,s)})}function oh(t,e){const n=bs(sh(t,e)),s=xo(t.transactionQueueTree_,e);return Yy(s,i=>{Qi(t,i)}),Qi(t,s),Yu(s,i=>{Qi(t,i)}),n}function Qi(t,e){const n=On(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ht(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ku(e,void 0):n.length=r+1,ft(t.eventQueue_,bs(e),i);for(let o=0;o<s.length;o++)Pn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ev(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ae(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ec=function(t,e){const n=Cv(t),s=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ag();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Vg(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},Cv=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=vv(t.substring(u,h)));const f=Ev(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class ch{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:yu(this._path)}get ref(){return new _t(this._repo,this._path)}get _queryIdentifier(){const e=sc(this._queryParams),n=no(e);return n==="{}"?"default":n}get _queryObject(){return sc(this._queryParams)}isEqual(e){if(e=Ii(e),!(e instanceof Do))return!1;const n=this._repo===e._repo,s=lo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_m(this._path)}}class _t extends Do{constructor(e,n){super(e,n,new ho,!1)}get parent(){const e=Eu(this._path);return e===null?null:new _t(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=ci(this.ref,e);return new gs(this._node.getChild(n),s,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new gs(i,ci(this.ref,s),he)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jv(t,e){return t=Ii(t),t._checkNotDeleted("ref"),e!==void 0?ci(t._root,e):t._root}function ci(t,e){return t=Ii(t),$(t._path)===null?tv("child","path",e,!1):Ju("child","path",e,!1),new _t(t._repo,pe(t._path,e))}function qv(t,e){t=Ii(t),nv("set",t._path),ev("set",e,t._path,!1);const n=new bi;return fv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Lo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new lh("value",this,new gs(e.snapshotNode,new _t(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ch(this,e,n):null}matches(e){return e instanceof Lo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ch(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=ci(new _t(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new lh(e.type,this,new gs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function wv(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,h)=>{vc(t._repo,t,l),c(u,h)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new bv(n,r||void 0),l=e==="value"?new Lo(o):new Fo(e,o);return pv(t._repo,t,l),()=>vc(t._repo,t,l)}function zv(t,e,n,s){return wv(t,"value",e,n,s)}Sy(_t);Oy(_t);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="FIREBASE_DATABASE_EMULATOR_HOST",Or={};let Tv=!1;function Sv(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ec(r,i),l=o.repoInfo,c,a;typeof process!="undefined"&&process.env&&(a=process.env[Iv]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=Ec(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Cr(Cr.OWNER):new Wg(t.name,t.options,e);sv("Invalid Firebase Database URL",o),q(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=xv(l,t,u,new Ug(t.name,n));return new Nv(h,t)}function Rv(t,e){const n=Or[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_v(t),delete n[t.key]}function xv(t,e,n,s){let i=Or[e.name];i||(i={},Or[e.name]=i);let r=i[t.toURLString()];return r&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new cv(t,Tv,n,s),i[t.toURLString()]=r,r}class Nv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(av(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _t(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Rv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function Av(t=o_(),e){return t_(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){Tg(i_),Gs(new cs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Sv(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),pn(Ul,Wl,t),pn(Ul,Wl,"esm2017")}at.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};at.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Pv();const Ov={apiKey:"AIzaSyAVbk24Nk25oIo56nroa9jHfZPQ29aCOfU",databaseURL:"https://typingtrainer-e86b2-default-rtdb.europe-west1.firebasedatabase.app",authDomain:"typingtrainer-e86b2.firebaseapp.com",projectId:"typingtrainer-e86b2",storageBucket:"typingtrainer-e86b2.appspot.com",messagingSenderId:"409787799441",appId:"1:409787799441:web:9c7eae4c8bd0f7d689ec30"},kv=r_(Ov);Av(kv);const ah=Wd(ep);ah.use(Ig);ah.mount("#app");export{t_ as A,dr as B,cs as C,Bv as D,Aa as E,Je as F,$v as G,Ra as H,Hv as I,oe as J,Jr as K,Ma as L,Uv as M,Wv as N,fp as O,gl as P,ml as Q,xf as R,i_ as S,zv as T,es as U,df as V,Qf as W,sd as X,id as Y,Vd as _,ht as a,jn as b,cr as c,ff as d,Fv as e,$c as f,Av as g,Dv as h,Ce as i,we as j,ed as k,rd as l,Ii as m,xa as n,Ws as o,hf as p,ip as q,jv as r,qv as s,Mv as t,Vv as u,Lv as v,Vf as w,Gs as x,pn as y,o_ as z};
