<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# arraybuffer2ndarray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [ndarray][@stdlib/ndarray/ctor] from an [ArrayBuffer][@stdlib/array/buffer].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-from-arraybuffer
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var arraybuffer2ndarray = require( '@stdlib/ndarray-from-arraybuffer' );
```

#### arraybuffer2ndarray( dtype, buffer, shape, strides, byteOffset, order\[, options] )

Returns an [ndarray][@stdlib/ndarray/ctor] view of an [ArrayBuffer][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

// Specify the array configuration:
var buffer = new ArrayBuffer( 32 );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order );
// returns <ndarray>
```

The function expects the following arguments:

-   **dtype**: underlying [data type][@stdlib/ndarray/dtypes].
-   **buffer**: data buffer.
-   **shape**: array shape (dimensions).
-   **strides**: array strides which are index offsets (in units of elements) specifying how to access along corresponding dimensions.
-   **byteOffset**: byte offset (in units of bytes) specifying the location of the first indexed element in the data buffer (i.e., the start of the ndarray view).
-   **order**: array order, which is either `row-major` (C-style) or `column-major` (Fortran-style).

The function accepts the following options:

-   **mode**: specifies how to handle indices which exceed array dimensions. Default: `'throw'`.
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions. If provided fewer modes than dimensions, the returned ndarray recycles modes using modulo arithmetic. Default: `[ options.mode ]`.
-   **readonly**: boolean indicating whether an array should be **read-only**. Default: `false`.

The function supports the following `modes`:

-   **throw**: specifies that an [`ndarray`][@stdlib/ndarray/ctor] instance should throw an error when an index exceeds array dimensions.
-   **normalize**: specifies that an [`ndarray`][@stdlib/ndarray/ctor] instance should normalize negative indices and throw an error when an index exceeds array dimensions.
-   **wrap**: specifies that an [`ndarray`][@stdlib/ndarray/ctor] instance should wrap around an index exceeding array dimensions using modulo arithmetic.
-   **clamp**: specifies that an [`ndarray`][@stdlib/ndarray/ctor] instance should set an index exceeding array dimensions to either `0` (minimum index) or the maximum index.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   To create a zero-dimensional array, provide an empty `shape` and a single `strides` element equal to `0`. The `order` can be either `row-major` or `column-major` and has no effect on data storage or access.

    ```javascript
    var ArrayBuffer = require( '@stdlib/array-buffer' );

    var buffer = new ArrayBuffer( 8 );
    var shape = [];
    var order = 'row-major';
    var strides = [ 0 ];
    var offset = 0;

    // Create a new zero-dimensional array:
    var arr = arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order );
    // returns <ndarray>
    ```

-   The function does **not** support "generic" data types.

-   In contrast to the [ndarray][@stdlib/ndarray/ctor] constructor, the `byteOffset` argument indicates the location of the first indexed element within the underlying `ArrayBuffer`, irrespective of the provided strides, and **not** the location of the first element from the perspective of the view. Thus, the `byteOffset` specifies the start of the view "range" and not necessarily the first element in the [ndarray][@stdlib/ndarray/ctor] from the perspective of a downstream consumer.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var arraybuffer2ndarray = require( '@stdlib/ndarray-from-arraybuffer' );

// Create a data buffer:
var buffer = new Float32Array( (3*3*3*3) + 100 );

// Specify the array shape:
var shape = [ 3, 3, 3, 3 ];

// Specify the array strides:
var strides = [ 27, 9, 3, 1 ];

// Specify the byte offset:
var offset = 4 * buffer.BYTES_PER_ELEMENT;

// Specify the order:
var order = 'row-major'; // C-style

// Create a new ndarray:
var arr = arraybuffer2ndarray( 'float32', buffer.buffer, shape, strides, offset, order );

// Retrieve an array value:
var v = arr.get( 1, 2, 1, 2 );
// returns 0.0

// Set an array value:
arr.set( 1, 2, 1, 2, 10.0 );

// Retrieve the array value:
v = arr.get( 1, 2, 1, 2 );
// returns 10.0
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-from-arraybuffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-from-arraybuffer

[test-image]: https://github.com/stdlib-js/ndarray-from-arraybuffer/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-from-arraybuffer/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-from-arraybuffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-from-arraybuffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-from-arraybuffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-from-arraybuffer/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-from-arraybuffer/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-from-arraybuffer/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-from-arraybuffer/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-from-arraybuffer/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-from-arraybuffer/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-from-arraybuffer/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-from-arraybuffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-from-arraybuffer/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders

[@stdlib/ndarray/index-modes]: https://github.com/stdlib-js/ndarray-index-modes

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
