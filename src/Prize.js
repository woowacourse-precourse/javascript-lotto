const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require("./Lotto");
const Print = require("./Print");

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

		this.isNum(numsForValidCheck);
		this.isSevenNumbers(numsForValidCheck);
		this.isNumsInRange(numsForValidCheck);
		this.isDuplicated(numsForValidCheck);

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
		if (isFirstPlace(count) || isSecondPlace(count)) {
			count += 1;
		}
		return count;
	}

	countingPrize(lottoBundle) {
		let winningCount = 0;
		for (let i = 0; i < lottoBundle.length(); i++) {
			winningCount = this.howManyCorrect(lottoBundle[i]);
			this.winningCount[winningCount] += 1;
		}
	}
	winningCheck(lottoBundle) {
		Console.readLine('당첨 번호를 입력해 주세요.\n', (nums) => {
			Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNum) => {
				this.validate(nums, bonusNum);
				this.countingPrize(lottoBundle);

				const print = new Print();
				print.winningResult(this.winningCount);
			})
		})
	}
}

module.exports = Prize;
