class User {
	#seedMoney

	constructor(money) {
		this.validate(money);
		this.profit = 0;
		this.#seedMoney = money;
	}

	validate(money) {
		this.isNum(money)
		this.isMoneyEnough(money);
		this.isThousands(money);
	}

	isNum(money) {
    const validNums = /[^0-9]/;
		if (validNums.test(money)) {
			throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
		}
  }

	isMoneyEnough(money) {
		if (money < 1000) {
			throw new Error('[ERROR] 구입 금액이 충분하지 않습니다.');
		}
	}

	isThousands(money) {
		if ((money % 1000) !== 0) {
			throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
		}
	}

	getSeedMoney(money) {
		return this.#seedMoney;
	}
	
	getRateOfReturn() {
		let rateOfReturn = ((this.profit / this.#seedMoney) * 100).toFixed(1);
		return (rateOfReturn + "%");
	}
}

module.exports = User;
