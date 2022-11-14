const { MESSAGE, ERROR } = require("./Message");

class Validation {
	inputMoney(input) {
		this.typeCheck(input);
		this.sizeCheck(input);
		this.zeroCheck(input);
	}
	inputWinLotto(input) {
		this.typeArrCheck(input);
		this.lenCheck(6, input);
		this.dupliCheck(input);
		this.insideNumCheck(input);
	}

	typeArrCheck(numbers) {
		numbers.forEach((num) => {
			if (isNaN(num)) this.error(ERROR.LEN_TYPE);
		});
	}

	lenCheck(len, data) {
		if (data.length > len) this.error(ERROR.NUM_TYPE);
	}
	dupliCheck(input) {
		const arr = new Set(input);
		if (input.length !== [...arr].length) this.error(ERROR.DUPLI_TYPE);
	}
	insideNumCheck(numbers) {
		numbers.forEach((num) => {
			if (num < 1 || num > 45) this.error(ERROR.RANGE_TYPE);
		});
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
