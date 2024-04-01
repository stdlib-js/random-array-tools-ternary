// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-ternary@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";function j(t,e,n){if(!(this instanceof j))return new j(t,e,n);if(!s(t))throw new TypeError(m("1qn3c",t));if(!r(e))throw new TypeError(m("1qnAS",e));if(!i(e,n))throw new TypeError(m("1qnFO",n));return this._prng=t,this._dtypes=e,this._dtype=n,this}t(j.prototype,"generate",(function(t,s,r,n,j){var a,f,y,c,v;if(!e(t))throw new TypeError(m("1qn2d",t));if(a={},arguments.length>4&&(c=function(t,e,s){return h(s)?l(s,"dtype")&&(t.dtype=s.dtype,!i(e,t.dtype))?new TypeError(m("1qn4S","dtype",e.join('", "'),t.dtype)):null:new TypeError(m("1qn2V",s))}(a,this._dtypes,j),c))throw c;return f=this._prng,"generic"===(v=a.dtype||this._dtype)?d(t,(function(){return f(s,r,n)})):(y=new(p(v))(t),o([[s],[r],[n],y],[t],[0,0,0,1],f),y)})),t(j.prototype,"assign",(function(t,e,s,r){if(!n(r))throw new TypeError(m("1qn2l",r));return o([[t],[e],[s],r],[r.length],[0,0,0,1],this._prng),r}));export{j as default};
//# sourceMappingURL=index.mjs.map
