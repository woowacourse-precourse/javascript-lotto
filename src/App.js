const { getPayout, getWinningNumbers, getBonusNumber } = require('./MissionUtils/ReadLine');
const { printCount, printLottos, printResults, printProfitPercent } = require('./MissionUtils/Print');
const { Random } = require('@woowacourse/mission-utils');
const { BENEFIT } = require('./Constants');
const Pay = require('./Objects/Pay');
const Lotto = require('./Objects/Lotto');
const Bonus = require('./Objects/Bonus');
class App {
	pay = 0;
	lottos = [];
	winningNumbers = '';
	bonusNumber = '';
	#result = {
		3: 0,
		4: 0,
		5: 0,
		bonus: 0,
		6: 0,
	};

	play() {
		getPayout((pay) => {
			const payout = new Pay(pay);
			this.pay = payout.getters();
			const count = this.pay / 1000;

			printCount(count);

			this.lottoPublish(count);

			printLottos(this.lottos);
		});

		getWinningNumbers((numbers) => {
			const lotto = new Lotto(numbers);
			this.winningNumbers = lotto.getters();
		});

		getBonusNumber((number) => {
			const bonus = new Bonus(number, this.winningNumbers);
			this.bonusNumber = bonus.getters();
		});

		this.showResult();
		this.showProfitPercent();
	}

	lottoPublish(count) {
		for (let number = 0; number < count; number++) {
			this.lottos.push(this.createRandomLottoNumbers());
		}
	}

	createRandomLottoNumbers() {
		return Random.pickUniqueNumbersInRange(1, 45, 6);
	}

	showResult() {
		this.getResult();
		printResults(this.#result);
	}

	getResult() {
		this.lottos.forEach((lotto) => {
			this.checkWinning(lotto);
		});
	}

	checkWinning(lotto) {
		let count = 0;

		lotto.forEach((number) => {
			if (this.winningNumbers.includes(number)) count++;
		});

		if (count === 5) {
			this.checkBonus(lotto);
			return;
		}

		if (count > 2) {
			this.#result[count] += 1;
		}
	}

	checkBonus(lotto) {
		if (lotto.includes(this.bonusNumber)) {
			this.#result.bonus += 1;
		}
	}

	showProfitPercent() {
		const profitPercent = this.calculate(this.pay, this.#result);
		printProfitPercent(profitPercent);
	}

	calculate(pay, result) {
		let profit = 0;

		for (let rank in result) {
			profit += result[rank] * BENEFIT[rank];
		}

		return Math.round((profit / pay) * 1000) / 10;
	}
}

module.exports = App;
