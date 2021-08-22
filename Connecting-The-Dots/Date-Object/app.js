const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

// Returns the current time,day,month year
const date = new Date();

// Gets the current month
let month = date.getMonth();

// Gets the current day
let day = date.getDay();

// Gets current seconds
// let seconds = date.getSeconds();

console.log(`Month is : ${months[month]}, and the date is : ${days[day]}`);
