// ! Changing the background color of the (body to blue
document.body.style.backgroundColor = 'cornflowerblue';

// ! Changing the text color to darkBlue
document.body.style.color = 'Gold';

// ! Changing the color of the (btn) ID to red.
document.getElementById('btn').style.color = 'red';

// ! Assigning it to a variable
const element = document.getElementById('element'); // code

document.querySelector('.element'); // code

// ! Window object is the whole page
const win = window;
console.log(win);

// ! Return a node object or a node list, which is an array-like object
const btn = document.getElementById('btn');
const name = btn.nodeName;

console.log(typeof btn);
console.log(name);
