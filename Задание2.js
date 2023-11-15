function have (string, obj) {
	if (string in obj) {
		return true
	} else {
      return false
    }
};


const street = 'street';
const floor = 'floor';

const address = {
	street: 'polyanka',
	house: 15,
	flat: 10,
};


console.log(have(street, address))
console.log(have(floor, address))