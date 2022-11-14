const MissionUtils = require('@woowacourse/mission-utils');
const Printer = require("./Printer");

const FIRST_PLACE = 7;
const SECOND_PLACE = 6;
const THIRD_PLACE = 5;
const FOURTH_PLACE = 4;
const FIFTH_PLACE = 3;

class Prize {
	constructor() {
		this.prizeMoney = 0;
		this.winningNums = [];
		this.winningBonusNum = 0;
		this.winningCount = [];
	}

	validate(nums, bonusNum) {
		let numsForValidCheck = nums.split(',');
		numsForValidCheck.push(bonusNum);

		Prize.isNum(numsForValidCheck);
		Prize.isSevenNumbers(numsForValidCheck);
		Prize.isNumsInRange(numsForValidCheck);
		Prize.isDuplicated(numsForValidCheck);

		this.winningNums = nums.split(',');
		this.winningBonusNum = bonusNum;
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

	static isFirstPlace(count) {
		if (count === 6) {
			return true;
		}
		return false;
	}
	
	static isSecondPlace(count) {
		if (count === 5 && lotto.indexOf(this.winningBonusNum) !== -1) {
			return true;
		}
		return false;
	}

	howManyCorrect(lotto) {
		let count = 0;
		for (let i = 0; i < 6; i++) {
			if (this.winningNums.indexOf(lotto[i]) !== -1) {
				count += 1;
			}
		}
		if (Prize.isFirstPlace(count) || Prize.isSecondPlace(count)) {
			count += 1;
		}
		return count;
	}

	countingPrize(lottoBundle) {
		let winningCount = 0;
		for (let i = 0; i < lottoBundle.length; i++) {
			winningCount = this.howManyCorrect(lottoBundle[i]);
			this.winningCount[winningCount] += 1;
		}
	}

	calculateEarnings(user) {
		user.earnings += (this.winningCount[FIFTH_PLACE]) * 5000;
		user.earnings += (this.winningCount[FOURTH_PLACE]) * 50000;
		user.earnings += (this.winningCount[THIRD_PLACE]) * 1500000;
		user.earnings += (this.winningCount[SECOND_PLACE]) * 30000000;
		user.earnings += (this.winningCount[FIRST_PLACE]) * 2000000000;
	}

	winningCheck(user) {
		MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (nums) => {
			MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNum) => {
				this.validate(nums, bonusNum);
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
