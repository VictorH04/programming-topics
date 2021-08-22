// ! Node-list, array-like objects
// ! Index based, lenght property but no array methods.

// ! Selected the special class from the list-items and assigned it to the special variable.
const special = document.getElementsByClassName('special');
console.log(special);

// ! Selecting the (banana) list item which has the special class and making it blue.
special[1].style.color = 'blue';
