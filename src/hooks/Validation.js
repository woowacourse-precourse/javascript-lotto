const { ERROR } = require("../utils/constants");

class Validation {
	isValidNumber(input) {
		const check = /^[0-9]+$/;

		if (!check.test(input)) {
			throw new Error(ERROR.TYPE);
		}
	}

	isValidUnit(input) {
		if (input % 1000 !== 0) {
			throw new Error(ERROR.UNIT);
		}
	}

	isValidInput(input) {
		this.isValidNumber(input);
		this.isValidUnit(input);
	}

	isValidCount(numbers) {
		if (numbers.length !== 6) {
			throw new Error(ERROR.COUNT);
		}
	}

	isValidOverlap(numbers) {
		let check = Array.from(new Set(numbers));

		if (numbers.length !== check.length) {
			throw new Error(ERROR.OVERLAP);
		}
	}

	isValidLotto(numbers) {
		this.isValidCount(numbers);
		this.isValidOverlap(numbers);
	}
}

module.exports = Validation;
