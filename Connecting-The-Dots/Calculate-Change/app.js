/*
Quarters = 25 cents
 Dime = 10 cents
 Nickel = 5 cents
 Penny = 1 cent
*/

function returnChange(amount) {
	// Using the Math.floor to round up the amount.
	let quarters = Math.floor(amount / 25);
	console.log(`There are ${quarters} quarters in your change`);
	amount = amount % 25;
	console.log(`And your change is : ${amount} cents`);

	console.log('================================================================');

	// Using the Math.floor to round up the amount.
	let dimes = Math.floor(amount / 10);
	console.log(`There are ${dimes} dimes in your change`);
	amount = amount % 10;
	console.log(`And your change is : ${amount} cents.`);

	console.log('================================================================');

	// Using the Math.floor to round up the amount.
	let nickels = Math.floor(amount / 5);
	console.log(`There are ${nickels} nickels in your change.`);
	amount = amount % 5;
	console.log(`And your change is : ${amount} cents.`);

	console.log('================================================================');

	// Using the Math.floor to round up the amount.
	let pennies = Math.floor(amount / 1);
	console.log(`There are ${pennies} pennies in your change.`);
}

// Runs the function with an amount as an argument.
returnChange(4376);
