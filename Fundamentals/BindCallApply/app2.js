let years = [ 1990, 1965, 1937, 2005, 1998 ];

function arrayCalc(arr, fn) {
	let arrRes = [];
	for (let i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
