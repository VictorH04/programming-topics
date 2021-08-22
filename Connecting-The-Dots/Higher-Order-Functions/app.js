let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let even = numbers.filter(function(number) {
	if (number % 2 === 0) {
		return number;
	}
});
console.log(even);

// const mainBtn = document.getElementById('mainBtn');
// mainBtn.addEventListener('click', function() {
// 	alert('You just clicked a button');
// });

const mainBtn = document.getElementById('mainBtn');
mainBtn.addEventListener('click', showAlert);
function showAlert() {
	alert('You just clicked a button');
}
