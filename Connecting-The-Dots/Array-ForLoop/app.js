// for loop from 1-9

/* for (let i = 0; i < 10; i++) {
	console.log(`Your number is ${i}`);
} */

// Looping over the (friends) array
let friends = [ 'bob', 'susy', 'john', 'eddy', 'olga' ];

/*
for (let i = 0; i < friends.length; i++) {
	console.log(`Your friend number ${i + 1} is ${friends[i]}`);
}
*/

// Looping over the (friends) array in reverse
for (let i = friends.length - 1; i >= 0; i--) {
	console.log(`Your friend number ${i + 1} is ${friends[i]}`);
}
