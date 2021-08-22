// Continue and break statements

let john = [ 'John', 'Smith', 1990, 'designer', false, 'blue' ];

for (let i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

for (let i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}
