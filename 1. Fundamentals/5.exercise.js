// Address objects
// street
// zipcode
// showAddress(address)
const address = {
	street: 'Amerika',
	city: 'New York',
	zipCode: 46124,
	showAddress(address) {
		for (key in address) {
			console.log(key, address[key]);
		}
	},
};

address.showAddress(address);

// Factory and Constructor
const addressFactory = () => ({
	street: 'Amerika',
	city: 'New York',
	zipCode: 46124,
	showAddress(address) {
		for (key in address) {
			console.log(key, address[key]);
		}
	},
});

function Address() {
	this.street = 'Amerika';
	this.city = 'New York';
	this.zipCode = 46124;
	this.showAddress = function (address) {
		for (key in address) {
			console.log(key, address[key]);
		}
	};
}

// Object equality
const areEqual = (obj1, obj2) => {
	let [one, two] = [
		Object.keys(obj1)
			.sort((a, b) => (a > b ? 1 : -1))
			.join(''),
		Object.keys(obj2)
			.sort((a, b) => (a > b ? 1 : -1))
			.join(''),
	];

	return one === two;
};

const a = {
	street: 'Amerika',
	city: 'New York',
	zipCode: 46124,
	showAddress(address) {
		for (key in address) {
			console.log(key, address[key]);
		}
	},
};
const b = {
	street: 'Amerika',
	city: 'New York',
	zipCode: 46124,
	showAddress(address) {
		for (key in address) {
			console.log(key, address[key]);
		}
	},
};

console.log(areEqual(a, b));
