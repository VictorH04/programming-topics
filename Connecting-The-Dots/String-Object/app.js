// Objects or methods

let human = 'John Pepper';

// Find the length of the (human) variable
let length = human.length;
console.log(human.length);

// Transforms (human) upperCase or lowerCase
console.log(human.toLocaleLowerCase());
console.log(human.toLocaleUpperCase());

// Finding a character in the (human) variable
console.log(human.charAt(1));
console.log(human.charAt(human.length - 1));

// Checking what would be the index of anything you want
console.log(human.indexOf('e'));

// Starts and ends with (case sensetive)
console.log(human.toLowerCase().startsWith('john'));
console.log(human.toLowerCase().endsWith('pepper'));

console.log(human.slice(0, 3));
console.log(human.slice(-5));

// Checks if (human) includes something for example (('John') == true)
console.log(human.includes('zzz'));
