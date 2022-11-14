const { MESSAGE, ERROR } = require("./Message");

class Validation {
	inputMoney(input) {
		this.typeCheck(input);
		this.sizeCheck(input);
		this.zeroCheck(input);
	}

	typeCheck(money) {
		if (isNaN(money)) this.error(ERROR.NUM_TYPE);
	}
	sizeCheck(money) {
		if (money % 1000 !== 0) {
			this.error(ERROR.MIN_SIZE_TYPE);
		}
	}
	zeroCheck(money) {
		if (money === 0) {
			this.error(ERROR.ZERO_TYPE);
		}
	}
	error(msg) {
		throw new Error(msg);
	}
}

module.exports = Validation;
