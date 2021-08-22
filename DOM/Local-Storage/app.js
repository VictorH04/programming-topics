// localStorage.setItem('job', 'developer');
// sessionStorage.setItem('job', 'developer');

// ! Set items in local storage
localStorage.setItem('name', 'john');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street123');

// ! Getting items in local storage
const name = localStorage.getItem('name');
console.log(name);

// ! Removing ONE item from the local storage
// localStorage.removeItem('name');

// ! Removing ALL the items from the local storage
localStorage.clear();
