const Random = require("@woowacourse/mission-utils").Random;

class Ticket {
	static #price = 1000;
	#numbers;
	constructor(builder) {
		this.#numbers = builder.getNumbers();
	}

	static price() {
		return Ticket.#price;
	}

	hasNumber(number) {
		return this.#numbers.includes(number);
	}

	correctCount(numbers) {
		return numbers.reduce((acc, cur) => 
			acc + (this.hasNumber(cur) ? 1 : 0), 0);
	}

	static Builder = class {
		getNumbers() {
			console.log("hello");
			return Random.pickUniqueNumbersInRange(1, 45, 6);
		}
    build() {
      return new Ticket(this);
    }
  }
}

module.exports = Ticket;