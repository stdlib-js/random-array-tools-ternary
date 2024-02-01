/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

'use strict';

var triangular = require( '@stdlib/random-base-triangular' );
var dtypes = require( '@stdlib/array-dtypes' );
var Random = require( './../lib' );

var dt = dtypes( 'real_floating_point_and_generic' );
var random = new Random( triangular, dt, 'float64' );

var x = random.generate( 10, 2.0, 5.0, 3.33 );
console.log( x );
// => <Float64Array>

x = random.generate( 10, 2.0, 5.0, 3.33, {
	'dtype': 'float32'
});
console.log( x );
// => <Float32Array>

x = random.generate( 10, 2.0, 5.0, 3.33, {
	'dtype': 'generic'
});
console.log( x );
// => [...]
