const MissionUtils = require('@woowacourse/mission-utils');
const Printer = require("./Printer");

const FIRST_PLACE = 7;
const SECOND_PLACE = 6;
const THIRD_PLACE = 5;
const FOURTH_PLACE = 4;
const FIFTH_PLACE = 3;
const FIRST_PRIZE = 2000000000;
const SECOND_PRIZE = 30000000;
const THIRD_PRIZE = 15000000;
const FOURTH_PRIZE = 50000;
const FIFTH_PRIZE = 5000;

class Prize {
	constructor() {
		this.prizeMoney = 0;
		this.winningNums = [];
		this.winningBonusNum = 0;
		this.winningCount = [0, 0, 0, 0, 0, 0, 0, 0];
	}

	validate(nums, bonusNum) {
		let numsForValidCheck = nums.split(',');
		numsForValidCheck.push(bonusNum);

		Prize.isNum(numsForValidCheck);
		Prize.isSevenNumbers(numsForValidCheck);
		Prize.isNumsInRange(numsForValidCheck);
		Prize.isDuplicated(numsForValidCheck);
	}

	static isNum(numbers) {
    const validNums = /[^0-9]/;

    numbers.forEach((num) => {
      if (validNums.test(num)) {
        throw new Error('[ERROR] 보너스 번호 포함 당첨 번호는 숫자여야 합니다.');
      }
    });
  }

  static isSevenNumbers(numbers) {
    if (numbers.length !== 7) {
      throw new Error('[ERROR] 보너스 번호 포함 당첨 번호는 7개여야 합니다.');
    }
  }

  static isNumsInRange(numbers) {
    numbers.forEach((num) => {
      if (parseInt(num) < 1 || parseInt(num) > 45) {
        throw new Error('[ERROR] 보너스 번호 포함 당첨 번호는 (1 ~ 45) 범위 내의 숫자여야 합니다.');
      }
    })
  }

  static isDuplicated(numbers) {
    const duplicateCheck = new Set(numbers);
    if (duplicateCheck.size !== 7) {
      throw new Error('[ERROR] 보너스 번호 포함 당첨 번호는 중복되지 않아야 합니다.');
    }
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
		user.earnings += (this.winningCount[FIFTH_PLACE]) * FIFTH_PRIZE;
		user.earnings += (this.winningCount[FOURTH_PLACE]) * FOURTH_PRIZE;
		user.earnings += (this.winningCount[THIRD_PLACE]) * THIRD_PRIZE;
		user.earnings += (this.winningCount[SECOND_PLACE]) * SECOND_PRIZE;
		user.earnings += (this.winningCount[FIRST_PLACE]) * FIRST_PRIZE;
	}

	winningCheck(user) {
		MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (nums) => {
			MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNum) => {
				this.validate(nums, bonusNum);
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
