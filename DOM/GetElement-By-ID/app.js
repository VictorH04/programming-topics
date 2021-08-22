// Select the element or group of elements that we want to affect.
// Decide the effect we want to apply to the selection.

// ! Assigning the (title) ID from the document(HTML/DOM) to the H1 VARIABLE!
const h1 = document.getElementById('title');

// ! Changed the h1 to the color red
h1.style.color = 'red';

// ! Selected the 'btn' ID from the DOM and gave it the backgroundColor of blue.
document.getElementById('btn').style.backgroundColor = 'cornflowerblue';

// ! Getting the style object
const style = document.getElementById('btn').style;
console.log(style);
