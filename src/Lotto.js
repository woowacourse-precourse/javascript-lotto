const Validation = require("./Validation");

class Lotto {
	#numbers;

	constructor(numbers) {
		const validation = new Validation();
		validation.validateLotto(numbers);
		this.#numbers = numbers;
	}

	getNumbers() {
		return this.#numbers;
	}
}

module.exports = Lotto;
