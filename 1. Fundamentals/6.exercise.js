// Array from range
const arrayFromRange = (min, max) => {
	let arr = [];
	for (let i = min; i <= max; i++) {
		arr.push(i);
	}
	return arr;
};

// Includes
const include = (arr, include) => {
	for (let i = 0; i < include.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === include[i]) return true;
		}
	}
	return false;
};

// Except
const except = (arr, exclude) => {
	let result = [];
	for (let i = 0; i < exclude.length; i++) {
		let isIncluded = false;
		for (let j = 0; j < arr.length; j++) {
			if (exclude[i] === arr[j]) {
				isIncluded = true;
				break;
			}
		}
		if (!isIncluded) {
			result.push(exclude[i]);
		}
	}
	return result;
};

// Moving an element
const move = (arr, index, offset) => {
	if (offset + index > arr.length - 1 || offset < 0) {
		return console.error('Invalid offset');
	}
	let output = [];
	let m = arr[index];
	let isNull = false;
	arr[index] = null;
	index = arr.indexOf(arr[index]) + offset;

	console.log(arr);

	for (let i = 0; i < arr.length; i++) {
		if (i === index - 1) {
			output.push(m);
		}
		if (arr[i] === null) {
			isNull = true;
		}
		if (arr[i + 1] === undefined) break;
		output.push(isNull ? arr[i + 1] : arr[i]);
	}
	return output;
};
// Count occurrences
const countOccur = (arr, occ) => {
	let occur = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[0] === occ) occur++;
	}
	return occur;
};
// Get max
const getMax = (arr) => {
	let max = undefined;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] !== undefined) {
			let currMax = arr[i] > arr[i + 1] ? arr[i] : arr[i + 1];
			max = max == undefined ? 0 : max;
			max = currMax > max ? currMax : max;
		}
	}

	return max;
};

// Movies
const movies = [
	{ title: 'a', year: 2018, rating: 4.5 },
	{ title: 'b', year: 2018, rating: 4.7 },
	{ title: 'c', year: 2018, rating: 3 },
	{ title: 'd', year: 2018, rating: 4.5 },
];

let sortedByRating = movies
	.sort((a, b) => (a.rating > b.rating ? 1 : -1))
	.map((e) => ({ title: e.title }));

console.log(sortedByRating);
