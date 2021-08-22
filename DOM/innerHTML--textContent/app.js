// ! innerHTML
// ! textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

// ! The textContent returns the text-content of that element that you specify
console.log(div.textContent);

// ! The innerHTML is actually going to return HTML tags
console.log(list.innerHTML);

console.log(list.textContent);

// ! Creates an ul
const ul = document.createElement('ul');

// ! Inserts the HTML tags
ul.innerHTML = `<li class="item">list item</li> <li>list item</li>`;
document.body.appendChild(ul);

// ! Created a div-element and gave it the textContent of "im second div".
const secondDiv = document.createElement('div');
secondDiv.textContent = `i'm second div`;

// ! Inserts the secondDiv variable before the item.
list.insertBefore(secondDiv, item);
