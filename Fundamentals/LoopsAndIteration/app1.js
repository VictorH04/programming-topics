// i++ = add's 1 each time
// i = 0, (0 < 10) = true, log i to the console, i++
// i = 1, (1 < 10) = true, log i to the console, i++
// -||-
// i = 9, (9 < 10) = true, log i to the console, i++
// i = 10, (10 < 10) = false, exit's loop. Loop finished

// Simple For loop
for (let i = 1; i <= 20; i += 2) {
	console.log(i);
}

let john = [ 'John', 'Smith', 1990, 'designer', false, 'blue' ];
for (let i = 0; i < john.length; i++) {
	console.log(john[i]);
}

// While loop
let i = 0;
while (i < john.length) {
	console.log(john[i]);
	i++;
}
