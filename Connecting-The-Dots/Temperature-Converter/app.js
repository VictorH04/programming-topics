/*
*Celcius = (Fahrenheit-32)*5/9
*Fahrenheit = Celcius *9/5 +32
*/

/**
 * @param toFahrenheit Function that calculates the degrees in Celcius to Fahrenheit. 
 */
function toFahrenheit(temp) {
	let fahr = temp * 9 / 5 + 32;
	console.log(`${temp} degrees in Celsius is ${fahr} degrees in Fahrenheit`);
}
toFahrenheit(100);

/**
 * @param toCelcius Function that calculates the degrees in Fahrenheit to Celcius. 
 */
function toCelcius(temp) {
	let celcius = ((temp - 32) * 5 / 9).toFixed(2);
	console.log(`${temp} degrees in Fahrenheit is ${celcius} degrees in Celcius`);
}
toCelcius(212);
