// ! Changing CSS

const item = document.getElementById('item');

// * Slower way v-v
// ! Applying CSS styles to the (item)
// item.style.backgroundColor = 'red';
// item.style.color = 'white';
// item.style.fontSize = 'white';
// item.style.display = 'none';
// item.style.display = 'block';

// * Faster way v-v
// ! Applying classes with already set CSS-Styles from the HTML.
item.classList.add('special');
item.classList.add('hide');
item.classList.remove('hide');
