// ! Submit -- event-listener
// ! Prevent default -- form submition
// ! How to get a value

///////////////////////////////////////////////////////////////

const form = document.getElementById('form');

// ! Adding the event-listener to the form variable
form.addEventListener('submit', function(event) {
	// ! Preventing a default form submition
	event.preventDefault();

	// ! Getting the values from the forms and console.logging them
	const name = document.getElementById('name').value;
	const password = document.getElementById('password').value;

	console.log(`Your name is ${name} and your password is ${password}`);
});
