const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Print = require("./Print");

class User {
	#seedMoney
	
	constructor(money) {
		this.validate(money);
		this.earnings = 0;
		this.#seedMoney = money;
		this.lottoBundle = [];
	}
	
	getSeedMoney(money) {
		return this.#seedMoney;
	}

	validate(money) {
		User.isNum(money);
		User.isMoneyEnough(money);
		User.isThousands(money);
	}

	static isNum(money) {
    const validNums = /[^0-9]/;
		if (validNums.test(money)) {
			throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
		}
  }
	
	static isMoneyEnough(money) {
		if (money < 1000) {
			throw new Error('[ERROR] 구입 금액이 충분하지 않습니다.');
		}
	}
	
	static isThousands(money) {
		if ((money % 1000) !== 0) {
			throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
		}
	}

	buyLottos(count) {
    for (let i = 0; i < count; i++) {
			let randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
			randomNumbers.sort();
			let newLotto = new Lotto(randomNumbers);
			this.lottoBundle.push(newLotto.getLotto());
    }
	}
}	

module.exports = User;
