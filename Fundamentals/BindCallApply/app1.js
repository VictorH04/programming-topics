// Bind, call and apply

let john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log(
				'Good ' +
					timeOfDay +
					", Ladies and gentlemen! I'm " +
					this.name +
					". I'm a " +
					this.job +
					" and I'm " +
					this.age +
					' years old.'
			);
		} else if (style === 'friendly') {
			console.log(
				"Hey! What's up? I'm " +
					this.name +
					", I'm a " +
					this.job +
					" and I'm " +
					this.age +
					' years old. Have a nice ' +
					timeOfDay +
					'.'
			);
		}
	}
};

let emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

let johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
