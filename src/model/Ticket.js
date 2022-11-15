const Random = require("@woowacourse/mission-utils").Random;

class Ticket {
	static #price = 1000;
	#numbers;
	constructor() {
		this.#numbers = this.#createRandomNumbers();
	}

	static price() {
		return Ticket.#price;
	}

	#createRandomNumbers() {
		return Random
			.pickUniqueNumbersInRange(1, 45, 6)
			.sort((a, b)=> a - b);
	}

	getNumbers() {
		return [...this.#numbers];
	}

	hasNumber(number) {
		return this.#numbers.includes(number);
	}

	correctCount(numbers) {
		return numbers.reduce((acc, cur) => 
			acc + (this.hasNumber(cur) ? 1 : 0), 0);
	}
}

module.exports = Ticket;