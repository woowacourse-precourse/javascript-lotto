const MissionUtils = require('@woowacourse/mission-utils');

const FIRST_PLACE = 7;
const SECOND_PLACE = 6;
const THIRD_PLACE = 5;
const FOURTH_PLACE = 4;
const FIFTH_PLACE = 3;


class Print {
	constructor() {

	}

	printResult(winningCount, place) {
		switch(place) {
			case FIFTH_PLACE:
				MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningCount[place]}개`);
				break;
			case FOURTH_PLACE:
				MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningCount[place]}개`);
				break;
			case THIRD_PLACE:
				MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningCount[place]}개`);
				break;
			case SECOND_PLACE:
				MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCount[place]}개`);
				break;
			case FIRST_PLACE:
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
}