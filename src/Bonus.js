const ErrorMessage = require('./constants/errorMessage');

class Bonus {
	#bonus;

	constructor(bonus, lotto) {
		this.validate(bonus, lotto);
		this.#bonus = bonus;
	}

	getBonus() {
		return this.#bonus;
	}

	validate(bonus, lotto) {
		this.isNotNumber(bonus);
		this.isNotInValidRange(bonus);
		this.isDuplicate(bonus, lotto);
	}

	isNotNumber(bonus) {
		if (isNaN(bonus)) throw new Error(ErrorMessage.BONUS_NOT_NUMBER);
	}

	isNotInValidRange(bonus) {
		if (!(1 <= bonus && bonus <= 45)) throw new Error(ErrorMessage.BONUS_NOT_IN_VALID_RANGE);
	}

	isDuplicate(bonus, lotto) {
		if (lotto.getLotto().includes(bonus)) throw new Error(ErrorMessage.BONUS_DUPLICATE);
	}
}

module.exports = Bonus;
