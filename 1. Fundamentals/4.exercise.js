// Write a function that takes two numbers and returns the maximum of the two
const max = (a, b) => (a > b ? a : b);

console.log(max(2, 9));

// Landscape or Potrait
const isLandscape = (width, height) => (width > height ? true : false);

console.log(isLandscape(200, 312));

// FizzBuzz
const fizzbuzz = (input) => {
	if (typeof input !== 'number') return 'Not a number';
	return !(input % 5) && !(input % 3)
		? 'FizzBuzz'
		: !(input % 3)
		? 'Fizz'
		: !(input % 5)
		? 'Buzz'
		: input;
};

console.log(fizzbuzz(15));

// Demerit Points
// Speed Limit 70, 5 -> 1 point, Math.floor(), 12 point -> suspended
const checkSpeed = (speed) => {
	if (typeof speed !== 'number') return console.log('Not a number');
	let limit = 70;
	let point = 0;
	let checkpoint = 5;
	speed = Math.floor(speed);

	if (speed > limit) {
		while (speed >= limit + checkpoint) {
			point++;
			checkpoint += 5;
		}

		if (point > 12) return console.log('suspended');
	}
	return point > 0 ? console.log(point + ' point') : console.log('ok');
};

checkSpeed(130);

// Event and odd numbers
const showNumbers = (limit) => {
	let number = 0;
	while (number < limit) {
		console.log(number++, number % 2 ? 'EVEN' : 'ODD');
	}
};

showNumbers(10);

// Count Truthy
const countTruthy = (array) => {
	let count = 0;
	array.forEach((i) => i && count++);
	console.log(count);
};

countTruthy([1, 2, 3, 0, false, null, undefined]);

// String Properties
const showProperties = (obj) => {
	for (key in obj) {
		console.log(key, obj[key]);
	}
};

showProperties({
	title: 'Avatar',
	release: 2022,
	rating: 4.5,
	director: 'Christoper Nolan',
});

// Sum of Multiples 3 and 5
const sum = (limit) => {
	let multiple3 = 0;
	let multiple5 = 0;
	let arr = [];
	while (limit > multiple3 || limit > multiple5) {
		if (limit > multiple3) {
			multiple3 += 3;
			if (limit > multiple3) arr.push(multiple3);
		}
		if (limit > multiple5) {
			multiple5 += 5;
			if (limit > multiple3) arr.push(multiple5);
		}
	}

	console.log(arr.reduce((p, c) => p + c));
};

sum(100);

// Grade
const calculateGrade = (marks) => {
	let total = marks.reduce((a) => a + a);
	let average = total / marks.length;

	if (average >= 90) return 'Grade A';
	if (average >= 80) return 'Grade B';
	if (average >= 70) return 'Grade C';
	if (average >= 60) return 'Grade D';
	if (average >= 50) return 'Grade D';
	return 'Grade F';
};
console.log(calculateGrade([90, 90, 40, 50]));

// Stars
const showStars = (number) => {
	let stars = '';
	for (let i = 0; i < number; i++) {
		stars += '*';
		console.log(stars);
	}
};
showStars(5);
