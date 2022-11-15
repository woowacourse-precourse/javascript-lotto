const ErrorMessage = require('./constants/errorMessage');

class Lotto {
	#numbers;

	constructor(numbers) {
		this.validate(numbers);
		this.#numbers = numbers;
	}

	validate(numbers) {
		this.isNotSix(numbers);
		this.isNotUnique(numbers);
		numbers.forEach((v) => {
			this.isNotNumber(v);
			this.isNotInValidRange(v);
		});
	}

	getLotto() {
		return this.#numbers;
	}

	isNotSix(numbers) {
		if (numbers.length !== 6) throw new Error(ErrorMessage.LOTTO_NOT_SIX);
	}

	isNotUnique(numbers) {
		if (new Set(numbers).size !== 6) throw new Error(ErrorMessage.LOTTO_NOT_UNIQUE);
	}

	isNotNumber(num) {
		if (isNaN(num)) throw new Error(ErrorMessage.LOTTO_NOT_NUMBER);
	}

	isNotInValidRange(num) {
		if (!(1 <= num && num <= 45)) throw new Error(ErrorMessage.LOTTO_NOT_IN_VALID_RANGE);
	}

	getMatchedCnt(ticket) {
		return ticket.filter((v) => this.#numbers.includes(v)).length;
	}
}

module.exports = Lotto;
