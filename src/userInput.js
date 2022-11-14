class UserInput {
	payment;

	isPaymentValidation(payment) {
		if (payment % 1000 !== 0) {
			throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
		}
		if (isNaN(payment)) {
			throw new Error("[ERROR] 숫자만 입력해주세요.");
		}
	}
}

module.exports = UserInput;
