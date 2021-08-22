// ! IF IT STARTS WITH A "#" IT SELECTS AN ID.
document.querySelector('#result');

// ! IF IT STARTS WITH A "." IT SELECTS A CLASS.
document.querySelector('.special');

// ! Write any css selector
document.querySelector('css selector'); //! Selects single
document.querySelector('css selector'); //! Selects all

// ! Selecting the ID of result and assigning it to a variable and making the background blue.
const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
console.log(item);

// ! Selecting the list-item and it's last-child.
const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

// ! Selecting all of the classes with the class of (special).
const list = document.querySelectorAll('.special');
console.log(list);

// ! Looping is possible with querySelector
list.forEach(function(item) {
	console.log(item);
	item.style.color = 'yellow';
});
