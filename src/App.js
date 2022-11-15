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
	}

	lottoPublish(count) {
		for (let number = 0; number < count; number++) {
			this.lottos.push(this.createRandomLottoNumbers());
		}
	}

	createRandomLottoNumbers() {
		return Random.pickUniqueNumbersInRange(1, 45, 6);
	}
}

module.exports = App;
