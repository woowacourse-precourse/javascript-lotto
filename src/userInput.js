const { Console } = require("@woowacourse/mission-utils");

class UserInput {
	payment;
	lottoCnt;

	isPaymentValidation(payment) {
		if (payment % 1000 !== 0) {
			throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
		}
		if (isNaN(payment)) {
			throw new Error("[ERROR] 숫자만 입력해주세요.");
		}
	}

	useLottoPayment() {
		Console.readLine("", payment => {
			this.isPaymentValidation(payment);
			this.payment = payment;
		});
	}
}

module.exports = UserInput;
