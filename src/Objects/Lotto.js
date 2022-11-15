const { Messages } = require('../Constants');

class Lotto {
	#numbers;

	constructor(numbers) {
		this.validate(numbers);
		this.#numbers = numbers;
	}

	validate(numbers) {
		if (numbers.split(',').every(this.checkNumber)) {
			throw new Error(Messages.ERROR.WINNING_NUMBERS.NOT_NUMBER);
		}
		if (numbers.split(',').every(this.checkBelongTo)) {
			throw new Error(Messages.ERROR.WINNING_NUMBERS.NOT_BELONG_NUMBER);
		}
		if (this.checkDuplicate(numbers.split(','))) {
			throw new Error(Messages.ERROR.WINNING_NUMBERS.DUPLICATED_NUMBER);
		}
		if (this.checkComma(numbers)) {
			throw new Error(Messages.ERROR.WINNING_NUMBERS.NOT_INSERT_COMMA);
		}
		if (numbers.split(',').length !== 6) {
			throw new Error(Messages.ERROR.WINNING_NUMBERS.DIFFERENT_LENGTH);
		}
	}

	checkNumber(number) {
		return typeof Number(number) !== 'number';
	}

	checkBelongTo(number) {
		return number < 1 && number > 45;
	}

	checkDuplicate(numbers) {
		return [...new Set(numbers)].length !== 6;
	}

	checkComma(numbers) {
		return numbers.match(/,/g).length !== 5;
	}

	getters() {
		return this.#numbers;
	}
}

module.exports = Lotto;
