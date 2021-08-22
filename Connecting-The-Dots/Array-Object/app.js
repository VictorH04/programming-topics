// Arrays === list of values
// Objects === collection of values

let names = [ 'john', 'bob', 'barry', 'olga', 'ben', 1, 2, 3, 4 ];
let result = names.length;

// Logs the length of the (names) array
console.log(result);

// Finds the last name in the (names) array
console.log(names[names.length - 1]);

// Logs the array in reverse
// console.log(names.reverse());

// concatinating two arrays "adding the two arrays"
let lastName = [ 'pepper', 'onion', 'banana' ];
console.log(names.concat(lastName));

// unshift adds a value in the beginning of the array
console.log(names.unshift('susy'));
console.log(names);

// shift removes the first value from the array
console.log(names.shift());
console.log(names);

// push adds a new item/value to the array
console.log(names.push('hello world'));
console.log(names);

// pop removes the last value from the array
console.log(names.pop());
console.log(names);

// splice removes an desired element.
// console.log(names.splice(2, 3));
// console.log(names);

// sorts an array alphabetacly
console.log(names.sort());
console.log(names);
