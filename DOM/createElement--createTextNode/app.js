// ! createElement('element')
// ! createTextNode('text content')
// ! element.appendChild(childElement)

const result = document.querySelector('#result');

// ! Create empty element in the HTML/DOM
const bodyDiv = document.createElement('div');

// ! Create a text node
const text = document.createTextNode('body div');

// ! Add text node
bodyDiv.appendChild(text);

document.body.appendChild(bodyDiv);

// ! Create empty element in the HTML/DOM
const resultLi = document.createElement('li');

// ! Create a text node
const textContent = document.createTextNode('result li');

// ! Add text node
resultLi.appendChild(textContent);
resultLi.classList.add('show');

// ! Add to result
result.appendChild(resultLi);

/////////////////////////////////////////////////////
console.log(result.children);
