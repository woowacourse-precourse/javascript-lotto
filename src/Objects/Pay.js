const { Messages } = require('../Constants');

class Pay {
	#pay;

	constructor(pay) {
		this.validate(pay);
		this.#pay = pay;
	}

	validate(pay) {
		if (this.checkNumber(pay)) {
			throw new Error(Messages.ERROR.BUY_PRICE.NOT_NUMBER);
		}
		if (pay < 1000) {
			throw new Error(Messages.ERROR.BUY_PRICE.LESS_THAN_THOUSAND);
		}
		if (pay % 1000 !== 0) {
			throw new Error(Messages.ERROR.BUY_PRICE.NOT_ZERO_REMAIN);
		}
	}

	checkNumber(pay) {
		return !Number(pay);
	}

	getters() {
		return this.#pay;
	}
}

module.exports = Pay;
