const MissionUtils = require('@woowacourse/mission-utils');

class Prize {
	constructor() {
		this.prizeMoney = 0;
		this.winningNums = [];
		this.winningBonusNum = 0;
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

	isNum(numbers) {
    const validNums = /[^0-9]/;

    numbers.forEach((num) => {
      if (validNums.test(num)) {
        throw new Error('[ERROR] 보너스 번호 포함 당첨 번호는 숫자여야 합니다.');
      }
    });
  }

  isSevenNumbers(numbers) {
    if (numbers.length !== 7) {
      throw new Error('[ERROR] 보너스 번호 포함 당첨 번호는 7개여야 합니다.');
    }
  }

  isNumsInRange(numbers) {
    numbers.forEach((num) => {
      if (parseInt(num) < 1 || parseInt(num) > 45) {
        throw new Error('[ERROR] 보너스 번호 포함 당첨 번호는 (1 ~ 45) 범위 내의 숫자여야 합니다.');
      }
    })
  }

  isDuplicated(numbers) {
    const duplicateCheck = new Set(numbers);
    if (duplicateCheck.size !== 7) {
      throw new Error('[ERROR] 보너스 번호 포함 당첨 번호는 중복되지 않아야 합니다.');
    }
  }

	winningCheck(lottoBundle) {
		Console.readLine('당첨 번호를 입력해 주세요.\n', (nums) => {
			Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNum) => {
				this.validate(nums, bonusNum);
				this.countingPrize();
				// print
				// Console.close();
			})
		})
	}
}

module.exports = Prize;
