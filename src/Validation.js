class Validation {
	validateInput(price) {
		this.validateNumber(price);
		this.validateUnit(price);
	}

	validateNumber(price) {
		const checkNumber = /^[0-9]+$/;
		if (checkNumber.test(price))
			throw new Error("[ERROR] 금액은 숫자만 입력해야 됩니다.");
	}

	validateUnit(price) {
		if (parseInt(price, 10) === 0 || parseInt(price, 10) % 1000 !== 0)
			throw new Error("[ERROR] 금액은 1,000원 단위로만 가능합니다.");
	}

	validateLotto(numbers) {
		this.validateLottoLength(numbers);
		this.validateDuplicate(numbers);
	}

	validateLottoLength(numbers) {
		if (numbers.length !== 6) {
			throw new Error("[ERROR] 로또 번호는 6개를 입력해야 합니다.\n");
		}
	}

	validateDuplicate(numbers) {
		const newNumbers = Array.from(new Set(numbers));

		if (numbers.length !== newNumbers.length)
			throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.\n");
	}
}

module.exports = Validation;
