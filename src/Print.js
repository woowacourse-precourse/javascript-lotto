const MissionUtils = require('@woowacourse/mission-utils');
const Print = require("./Prize");

class Print {
	printResult(winningCount, place) {
		switch(place) {
			case Prize.FIFTH_PLACE:
				MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningCount[place]}개`);
				break;
			case Prize.FOURTH_PLACE:
				MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningCount[place]}개`);
				break;
			case Prize.THIRD_PLACE:
				MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningCount[place]}개`);
				break;
			case Prize.SECOND_PLACE:
				MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCount[place]}개`);
				break;
			case Prize.FIRST_PLACE:
				MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningCount[place]}개`);
				break;
			default:
				break;
		}
	}

	winningResult(winningCount) {
		MissionUtils.Console.print('당첨 통계');
		MissionUtils.Console.print('---');
		for (let correct = 3; correct < 8; correct++) {
			this.printResult(winningCount, correct);
		}
	}

	earningsRate(seedMoney, earnings) {
		let earningsRate = ((earnings / seedMoney) * 100).toFixed(1);
		MissionUtils.Console.print(`총 수익률은 ${earningsRate}%입니다.`);
	}

	result(user, winningCount) {
		this.winningResult(winningCount);
		this.earningsRates(user.getSeedMoney(), user.earnings);
	}
}

module.exports = Print;
