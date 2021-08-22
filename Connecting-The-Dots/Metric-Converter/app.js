/*
1 inch === 2.54cm
1 foot === 12 inches


1 inch = 0.0254 meters
1 foot = 12 inches

1 inch = 0.0000254 Kilometers
1 foot = 12 inches
*/

/** 
 * @param toMetric This function takes to parameters first one is (feet) and second one is (inches),
 * then the function calculates it and converts it to centimeters & meters. 
 * If you input minus values you get an alert saying, 'Invalid parameters!'.
*/
function toMetric(feet, inches) {
	// Alert if you input minus values.
	if (feet < 0 || inches < 0) {
		alert('Invalid parameters!');
		return;
	}

	// Centimeter conversion
	let centimeters = feet * 12 * 2.54;
	centimeters += inches * 2.54;

	// Meter conversion
	let meters = feet * 12 * 0.0254;
	meters += inches * 0.0254;

	// Kilometer conversion
	let kilometers = feet * 12 * 0.0000254;
	kilometers += inches * 0.0000254;

	// Logging the result to the console.
	console.log(`${feet} feet and ${inches} inches is equal to ${meters.toFixed(2)} meters.`);
	console.log(`${feet} feet and ${inches} inches is equal to ${centimeters.toFixed(2)} centimeters.`);
	console.log(`${feet} feet and ${inches} inches is equal to ${kilometers.toFixed(3)} kilometers.`);
	return centimeters.toFixed(2);
}

// Input values that should be converted. FIRST (feet) THEN (inches).
toMetric(3422, 689);
