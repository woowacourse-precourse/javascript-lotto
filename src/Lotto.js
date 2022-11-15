const Validation = require("./hooks/Validation");

class Lotto {
	numbers;

	constructor(numbers) {
		const validation = new Validation();
		validation.isValidLotto(numbers);
		this.numbers = numbers;
	}

	lottoNumbers() {
		return this.numbers;
	}
}

module.exports = Lotto;
