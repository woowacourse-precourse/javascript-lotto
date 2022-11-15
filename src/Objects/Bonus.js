const { Messages } = require('../Constants');

class Bonus {
	#bonus;

	constructor(bonus, winningNumbers) {
		this.validate(bonus, winningNumbers);
		this.#bonus = bonus;
	}

	validate(bonus, winningNumbers) {
		if (bonus.split(',').length !== 1) {
			throw new Error(Messages.ERROR.BONUS_NUMBER.NOT_ONE_NUMBER);
		}
		if (this.checkNumber(bonus)) {
			throw new Error(Messages.ERROR.BONUS_NUMBER.NOT_NUMBER);
		}
		if (!this.checkBelongTo(bonus)) {
			throw new Error(Messages.ERROR.BONUS_NUMBER.NOT_BELONG_NUMBER);
		}
		if (winningNumbers.includes(bonus)) {
			throw new Error(Messages.ERROR.BONUS_NUMBER.DUPLICATED_NUMBER);
		}
	}

	checkNumber(bonus) {
		return !Number(bonus);
	}

	checkBelongTo(bonus) {
		return bonus >= 1 && bonus <= 45;
	}

	getters() {
		return this.#bonus;
	}
}

module.exports = Bonus;
