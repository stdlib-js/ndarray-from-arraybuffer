"use strict";var q=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(r){throw i=0,r}}};var f=q(function(z,h){"use strict";var c=require("@stdlib/assert-is-collection"),d=require("@stdlib/assert-is-arraybuffer"),y=require("@stdlib/assert-is-nonnegative-integer-array").primitives,E=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,b=require("@stdlib/assert-is-integer-array").primitives,T=require("@stdlib/ndarray-base-assert-is-order"),p=require("@stdlib/ndarray-base-assert-is-data-type"),V=require("@stdlib/ndarray-base-assert-is-generic-data-type"),x=require("@stdlib/ndarray-base-assert-is-binary-data-type"),F=require("@stdlib/ndarray-base-assert-is-struct-data-type"),B=require("@stdlib/ndarray-base-assert-is-buffer-length-compatible"),A=require("@stdlib/ndarray-base-numel"),I=require("@stdlib/ndarray-base-minmax-view-buffer-index"),N=require("@stdlib/ndarray-base-strides2offset"),s=require("@stdlib/ndarray-ctor"),D=require("@stdlib/buffer-from-arraybuffer"),S=require("@stdlib/array-typed"),R=require("@stdlib/array-struct-factory"),n=require("@stdlib/string-format");function j(e,i,r,a,u,m,w){var o,g,t,v,l;if(!p(e))throw new TypeError(n("invalid argument. First argument must be a supported ndarray data type. Value: `%s`.",e));if(V(e))throw new TypeError(n("invalid argument. ArrayBuffer is incompatible with the specified data type. Value: `%s`.",e));if(!d(i))throw new TypeError(n("invalid argument. Second argument must be an ArrayBuffer. Value: `%s`.",i));if(!y(r)&&(!c(r)||r.length>0))throw new TypeError(n("invalid argument. Third argument must be an array-like object containing nonnegative integers. Value: `%s`.",r));if(g=r.length,!b(a))throw new TypeError(n("invalid argument. Fourth argument must be an array-like object containing integers. Value: `%s`.",a));if(g>0){if(a.length!==g)throw new RangeError(n("invalid argument. Fourth argument length must match the number of dimensions. Expected number of dimensions: `%u`. Strides length: `%u`.",g,a.length))}else{if(a.length!==1)throw new RangeError("invalid argument. Fourth argument length must be equal to 1 when creating a zero-dimensional ndarray.");if(a[0]!==0)throw new RangeError(n("invalid argument. Fourth argument must contain a single element equal to 0. Value: `%d`.",a[0]))}if(!E(u))throw new TypeError(n("invalid argument. Fifth argument must be a nonnegative integer. Value: `%s`.",u));if(!T(m))throw new TypeError(n("invalid argument. Sixth argument must be a supported order. Value: `%s`.",m));if(o=N(r,a),v=I(r,a,o),l=v[1]-v[0]+1,x(e)?t=D(i,u,l):F(e)?t=R(e)(i,u,l):t=S(i,u,l,e),g>0&&!B(t.length,r,a,o)&&A(r)>0)throw new Error("invalid arguments. Input buffer is incompatible with the specified meta data. Ensure that the offset is valid with regard to the strides array and that the buffer has enough elements to satisfy the desired array shape.");return arguments.length>6?new s(e,t,r,a,o,m,w):new s(e,t,r,a,o,m)}h.exports=j});var k=f();module.exports=k;
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
