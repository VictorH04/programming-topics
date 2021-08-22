// Questions and answers for the quiz
const quiz = [
	[ 'Best state to live in?', 'California' ],
	[ 'Capital of California?', 'Sacramento' ],
	[ 'Best beach city?', 'Huntington beach' ]
];

let score = 0;

// Looping over the quiz array and prompting the question.
for (let i = 0; i < quiz.length; i++) {
	let answer = prompt(quiz[i][0]);
	let answerCorrect = answer.trim();

	if (answerCorrect === quiz[i][1]) {
		score++;
	} else {
		alert(`Wrong answer! The correct answer is: ${quiz[i][1]}`);
	}
}

// Accessing the score and displaying the percent of correct answers.
let correctPercent = (score / quiz.length * 100).toFixed(2);
alert(`You answered ${score} questions correctly
and your correct percent is ${correctPercent} %
`);
