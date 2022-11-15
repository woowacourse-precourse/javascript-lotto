class Ticket {
	static #price = 1000;
	#numbers;
	constructor(numbers) {
		this.#numbers = numbers.sort((a, b) => a - b);
	}

	static price() {
		return Ticket.#price;
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