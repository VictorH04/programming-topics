// Array with student names & scores
const scores = [
	{ name: 'john', score: 87 },
	{ name: 'susy', score: 97 },
	{ name: 'bob', score: 67 },
	{ name: 'peter', score: 77 }
];

// Total score
let totalScores = 0;

// Looping over the array and adding the scores to the total score
for (let i = 0; i < scores.length; i++) {
	totalScores += scores[i].score;
}
console.log(totalScores);

// Calculating the average score
let average = totalScores / scores.length;
console.log(average);

// For loop that checks if the student's score is better or worse than the average
for (let i = 0; i < scores.length; i++) {
	if (scores[i].score > average) {
		scores[i].betterThanAverage = true;
	} else {
		scores[i].betterThanAverage = false;
	}
}
console.log(scores);
