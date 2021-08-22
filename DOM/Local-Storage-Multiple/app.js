// ! Names array
const names = [ 'john', 'peter', 'bob' ];

// // ! Setting array to the local storage
// localStorage.setItem('names', names);

// // ! Getting the values in the local storage
// const values = localStorage.getItem('names');

// ! Setting the names-array to the local-storage and converting it to JSON.stringify
localStorage.setItem('names', JSON.stringify(names));

const values = JSON.parse(localStorage.getItem('names'));
console.log(values[0]);

let fruits;

if (localStorage.getItem('fruits') === null) {
	fruits = [];
} else {
	fruits = JSON.parse(localStorage.getItem('fruits'));
}

fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));

console.log(fruits);
