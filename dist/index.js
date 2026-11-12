"use strict";var c=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(r){throw i=0,r}}};var w=c(function(G,h){"use strict";var d=require("@stdlib/assert-is-collection"),y=require("@stdlib/assert-is-arraybuffer"),E=require("@stdlib/assert-is-nonnegative-integer-array").primitives,b=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,T=require("@stdlib/assert-is-integer-array").primitives,p=require("@stdlib/ndarray-base-assert-is-order"),V=require("@stdlib/ndarray-base-assert-is-data-type"),x=require("@stdlib/ndarray-base-assert-is-generic-data-type"),F=require("@stdlib/ndarray-base-assert-is-binary-data-type"),B=require("@stdlib/ndarray-base-assert-is-struct-data-type"),A=require("@stdlib/ndarray-base-assert-is-buffer-length-compatible"),I=require("@stdlib/ndarray-base-numel"),N=require("@stdlib/ndarray-base-minmax-view-buffer-index"),D=require("@stdlib/ndarray-base-strides2offset"),f=require("@stdlib/ndarray-ctor"),S=require("@stdlib/buffer-from-arraybuffer"),R=require("@stdlib/array-typed"),j=require("@stdlib/array-struct-factory"),n=require("@stdlib/string-format");function k(e,i,r,a,g,m,q){var l,t,u,v,s,o;if(!V(e))throw new TypeError(n("invalid argument. First argument must be a supported ndarray data type. Value: `%s`.",e));if(x(e))throw new TypeError(n("invalid argument. ArrayBuffer is incompatible with the specified data type. Value: `%s`.",e));if(!y(i))throw new TypeError(n("invalid argument. Second argument must be an ArrayBuffer. Value: `%s`.",i));if(!E(r)&&(!d(r)||r.length>0))throw new TypeError(n("invalid argument. Third argument must be an array-like object containing nonnegative integers. Value: `%s`.",r));if(t=r.length,!T(a))throw new TypeError(n("invalid argument. Fourth argument must be an array-like object containing integers. Value: `%s`.",a));if(t>0){if(a.length!==t)throw new RangeError(n("invalid argument. Fourth argument length must match the number of dimensions. Expected number of dimensions: `%u`. Strides length: `%u`.",t,a.length))}else{if(a.length!==1)throw new RangeError("invalid argument. Fourth argument length must be equal to 1 when creating a zero-dimensional ndarray.");if(a[0]!==0)throw new RangeError(n("invalid argument. Fourth argument must contain a single element equal to 0. Value: `%d`.",a[0]))}if(!b(g))throw new TypeError(n("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",g));if(!p(m))throw new TypeError(n("invalid argument. Sixth argument must be a supported order. Value: `%s`.",m));if(l=D(r,a),v=N(r,a,l),s=I(r),t===0?o=1:s===0?o=0:o=v[1]-v[0]+1,F(e)?u=S(i,g,o):B(e)?u=j(e)(i,g,o):u=R(i,g,o,e),t>0&&s>0&&!A(u.length,r,a,l))throw new Error("invalid arguments. Input buffer is incompatible with the specified meta data. Ensure that the offset is valid with regard to the strides array and that the buffer has enough elements to satisfy the desired array shape.");return arguments.length>6?new f(e,u,r,a,l,m,q):new f(e,u,r,a,l,m)}h.exports=k});var C=w();module.exports=C;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
