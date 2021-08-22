// ! className
// ! classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.querySelector('#third');

// ! className

// ! gets the class values in that element
const className = first.className;

// ! Sets a class for the element, CAN ONLY HAVE 1 CLASS !
second.className = 'colors';
second.className = 'text';

///////////////////////////////////////////////////

// ! classList
const classes = third.classList;
console.log(classes);

// ! Adding a class to that element, CAN ADD AS MANY AS YOU WANT WITHOUT IT OVERWRITING.
third.classList.add('colors');
third.classList.add('text');

// ! Shorter syntax, its the same.
third.classList.add('colors', 'text');

///////////////////////////////////////////////////

// ! Removing a class with classList
third.classList.remove('text');

///////////////////////////////////////////////////

// ! Checking for classes, returns either true or false, depending if it has it or not
let result = third.classList.contains('text');

///////////////////////////////////////////////////
console.log(classes);
