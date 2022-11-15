const MissionUtils = require('@woowacourse/mission-utils');
const Printer = require('./Printer');
const Validator = require('./Validator');
const { TYPE, PRIZE, PLACE } = require('./constants');
// const PLACE = {
// 	FIRST: 7,
// 	SECOND: 6,
// 	THIRD: 5,
// 	FOURTH: 4,
// 	FIFTH: 3,
// };

// const TYPE = {
// 	LOTTO: '로또',
// 	WINNINGNUM: '당첨',
// 	BONUS: '보너스',
// };

// const PRIZE = {
// 	FIRST: 2000000000,
// 	SECOND: 30000000,
// 	THIRD: 15000000,
// 	FOURTH: 50000,
// 	FIFTH: 5000,
// };

class Prize {
	constructor() {
		this.prizeMoney = 0;
		this.winningNums = [];
		this.winningBonusNum = 0;
		this.winningCount = [0, 0, 0, 0, 0, 0, 0, 0];
	}

	validate(nums, type) {
		let numbers = nums.split(',');

		Validator.isNum(numbers, type);
		Validator.isEnoughNumbers(numbers, type);
		Validator.isNumsInRange(numbers, type);
		Validator.isDuplicated(numbers, type);
	}
 
	isFirstPlace(count) {
		if (count === 6) {
			return true;
		}
		return false;
	}
	
	isSecondPlace(lotto, count) {
		if (count === 5 && lotto.includes(this.winningBonusNum)) {
			return true;
		}
		return false;
	}

	parseNums(nums, bonusNum) {
		let arr = nums.split(',');
		arr.forEach((num) => {
			this.winningNums.push(parseInt(num));
		})
		this.winningBonusNum = parseInt(bonusNum);
	}

	howManyCorrect(lotto) {
		let count = 0;
		for (let i = 0; i < 6; i++) {
			if (this.winningNums.includes(lotto[i])) {
				count += 1;
			}
		}
		if (this.isFirstPlace(count) || this.isSecondPlace(lotto, count)) {
			count += 1;
		}
		return count;
	}

	countingPrize(lottoBundle) {
		let correct = 0;
		for (let i = 0; i < lottoBundle.length; i++) {
			correct = this.howManyCorrect(lottoBundle[i]);
			this.winningCount[correct]++;
		}
	}

	calculateEarnings(user) {
		user.earnings += (this.winningCount[PLACE.FIFTH]) * PRIZE.FIFTH;
		user.earnings += (this.winningCount[PLACE.FOURTH]) * PRIZE.FOURTH;
		user.earnings += (this.winningCount[PLACE.THIRD]) * PRIZE.THIRD;
		user.earnings += (this.winningCount[PLACE.SECOND]) * PRIZE.SECOND;
		user.earnings += (this.winningCount[PLACE.FIRST]) * PRIZE.FIRST;
	}

	winningCheck(user) {
		MissionUtils.Console.print('');
		MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (nums) => {
			this.validate(nums, TYPE.WINNINGNUM);
			MissionUtils.Console.print('');
			MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNum) => {
				this.validate(nums + ',' + bonusNum, TYPE.BONUS);
				this.parseNums(nums, bonusNum);
				this.countingPrize(user.lottoBundle);
				this.calculateEarnings(user);

				const printer = new Printer();
				printer.result(user, this.winningCount);
				MissionUtils.Console.close();
			})
		})
	}
}

module.exports = Prize;
