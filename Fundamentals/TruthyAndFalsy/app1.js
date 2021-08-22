// Truthy and falsy values and equality operators

// falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values

let height;
height = 23;

if (height || height === 0) {
	console.log('Variable is defined');
} else {
	console.log('Variable has NOT been defined');
}

// Equality Operators

if (height === '23') {
	console.log('The == operator does type coercion!');
} else {
	console.log(false);
}
