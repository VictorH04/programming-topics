// ! nodeValue
// ! textContent

const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
console.log(item.childNodes);

console.log(value);
console.log(item);

// ! textContent gets the value from the special ID, right away
const best = item.textContent;
console.log(best);
