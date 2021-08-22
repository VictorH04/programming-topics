/*
- Everything in javascript is either: one of six primitive data types or an object
- Objects are key value pairs
- If a property is a function it is called a method
*/

// Object literals
const person = {};

// construction function
const secondPerson = new Object();

// Add property
person.name = 'john';
console.log(person);

// access property
console.log(person.name);

// Modify property
person.name = 'bob';
console.log(person['name']); // Another method of accessing property

// Assign value
let lastName = person.lastName;
console.log(lastName);

// Check if exists
let check = 'lastName' in person;
console.log(check);

// Check with undefined
if (person.lastName === undefined) {
}

// Delete property
delete person.name;
console.log(person);

// Create object
const human = {
	name: 'bob',
	nickName: 'zippy',
	height: 7,
	weight: 200,
	married: true,
	education: false,
	friends: [ 'john', 'susy' ],
	sing() {
		return `i'm singing away`;
	}
};
let song = human.sing();
console.log(song);

// Iterate or loop over object
for (const key in human) {
	console.log(`${key} : ${human[key]}`);
}

// Nested objects
const people = {
	person1: {
		name: 'susy',
		age: 34
	},
	person2: {
		name: 'john'
	}
};

// Objects as parameters
function hello({ greet, name }) {
	return `${greet}!!!!${name}`;
}
let greetPerson = hello({ name: 'john', greet: 'Hello there...' });
console.log(greetPerson);
