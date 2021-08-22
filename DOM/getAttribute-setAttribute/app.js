// ! getAttribute();
// ! setAttribute();

const special = document.querySelector('#special');

// ! Gets an attribute and specificialy gets an class, beacuse we said ('class')
const showClass = special.getAttribute('class');
console.log(showClass);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

// ! Sets an attribute to what you would like in the DOM
const item = link.nextSibling.nextSibling;
item.setAttribute('class', 'second');
console.log(item);

// const links = document.querySelectorAll('.first');
// console.log(links);
