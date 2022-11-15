const { Console } = require('@woowacourse/mission-utils');
const { EXCEPTION_MESSAGE } = require('./constants/constants');
const countIncludeNumber = require('./utils/count/countIncludeNumber');
const verifyValidBonusNumber = require('./utils/verify/verifyValidBonusNumber');
const verifyValidLottery = require('./utils/verify/verifyValidLottery');
const processLotteryRank = require('./utils/process/processLotteryRank');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const validCheck = verifyValidLottery(numbers);
    if (validCheck !== true) {
      throw new Error(EXCEPTION_MESSAGE[validCheck]);
    }
  }

  returnMyLottery() {
    return `[${String(this.#numbers).split(',').join(', ')}]`;
  }

  returnMyLotteryRank(answer, bonusNumber) {
    const countResult = countIncludeNumber(this.#numbers, answer);
    const bonusResult = verifyValidBonusNumber(bonusNumber, answer);
    const result = processLotteryRank(countResult, bonusResult);

    return result;
  }
}

module.exports = Lotto;
