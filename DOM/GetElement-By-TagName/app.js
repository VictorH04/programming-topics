// ! Index based, lenght property, BUT NO ARRAY METHODS.

// ! Getting the elements of the document(HTML/DOM) which is in this case the li(list-item)
// ! AND ASSIGING IT TO THE VARIABLE.
const list = document.getElementsByTagName('li');
console.log(list);

// ! Styling the FIRST list-item
list[0].style.color = 'red';

// * Actually using the array methods, but transforming the list-item a little bit
const betterList = [ ...list ];
betterList.forEach(function(item) {
	console.log(item);
});

// ! Styling all the list-items :P
// list[1].style.color = 'blue';
// list[2].style.color = 'deepPink';
// list[3].style.color = 'gold';
// list[4].style.color = 'yellowgreen';
