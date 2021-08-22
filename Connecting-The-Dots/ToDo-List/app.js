//  Empty array to store the answers
let toDoList = [];

//  Function that add's the item's to the array
function addItem(arr) {
	let answer = prompt('What would you like to do today ?');
	let correct = answer.toLowerCase().trim();
	// let index = arr.indexOf(correct);
	if (checkDuplicate(arr, correct)) {
		arr.push(correct);
		showItems(arr);
	} else {
		alert('Item wont be added to the list. Item already exists, do not work so hard');
	}
}

// Check's if it's duplicating
function checkDuplicate(arr, item) {
	let isUnique = false;
	let index = arr.indexOf(item); // (If it is -1, it is unique.) (If there is anything else than -1 it's not unique.)
	// Checks if it is unique
	if (index != -1) {
		isUnique = false;
	} else {
		isUnique = true;
	}
	return isUnique;
}

// Removes the item's from the list
function removeItem(list) {
	let answer = prompt('Which item would you like to DELETE from the list?');
	let correct = answer.trim().toLowerCase();

	let index = list.indexOf(correct);

	if (!checkDuplicate(list, correct)) {
		let removedItem = list.splice(index, 1);
		console.log(`REMOVED ITEM: "${removedItem}".`);
		alert(`You removed "${removedItem}" from your list`);
	} else {
		console.log('No such value exists.');
	}
}

// Function that shows all items
function showItems(list) {
	let listValues = 'Your list items are : ';

	for (let i = 0; i < list.length; i++) {
		listValues += `"List item Nr ${i + 1} : ${list[i]}". `;
	}
	alert(listValues);
}

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
removeItem(toDoList);
showItems(toDoList);

console.log(toDoList);
