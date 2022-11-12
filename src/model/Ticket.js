class Ticket {
	#numbers;
	#price;
	constructor(numbers) {
		this.#numbers = numbers;
		this.#price = 1000;
	}

	price() {
		return this.#price;
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