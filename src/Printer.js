const MissionUtils = require('@woowacourse/mission-utils');
const { PLACE } = require('./constants');

class Printer {
	printLottoBundle(lottoBundle) {
		MissionUtils.Console.print('');
		MissionUtils.Console.print(`${lottoBundle.length}개를 구매했습니다.`);
		for (let i = 0; i < lottoBundle.length; i++) {
			let forPrint = '[' + lottoBundle[i].toString() + ']';
			forPrint = forPrint.replace(/,/g, ', ');
			MissionUtils.Console.print(forPrint);
		}
	}

	printWinningResult(winningCount, place) {
		let count = winningCount[place];
		switch(place) { 
			case PLACE.FIFTH:
				MissionUtils.Console.print(`3개 일치 (5,000원) - ${count}개`);
				break;
			case PLACE.FOURTH:
				MissionUtils.Console.print(`4개 일치 (50,000원) - ${count}개`);
				break;
			case PLACE.THIRD:
				MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${count}개`);
				break;
			case PLACE.SECOND:
				MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`);
				break;
			case PLACE.FIRST:
				MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${count}개`);
				break;
			default:
				break;
		}
	}

	winningResult(winningCount) {
		MissionUtils.Console.print('');
		MissionUtils.Console.print('당첨 통계');
		MissionUtils.Console.print('---');
		for (let correct = 3; correct < 8; correct++) {
			this.printWinningResult(winningCount, correct);
		}
	}

	earningsRate(seedMoney, earnings) {
		let rate = ((earnings / seedMoney) * 100).toFixed(1);
		MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
	}

	result(user, winningCount) {
		this.winningResult(winningCount);
		this.earningsRate(user.getSeedMoney(), user.earnings);
	}
}

module.exports = Printer;

