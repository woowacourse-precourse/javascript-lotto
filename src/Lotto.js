const { Console } = require('@woowacourse/mission-utils');
const {
  EXCEPTION_MESSAGE,
  EXCEPTION_REASON,
} = require('./constants/constants');
const countCorrectNumber = require('./utils/countCorrectNumber');
const isBonusNumberCorrect = require('./utils/isBonusNumberCorrect');
const isValidLottery = require('./utils/isValidLottery');
const returnMyRank = require('./utils/returnMyRank');

class Lotto {
  #numbers;

  constructor(numbers) {
    // 문자열
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const validCheck = isValidLottery(numbers);
    if (validCheck === EXCEPTION_REASON.INPUT_LENGTH_ERROR) {
      throw new Error(EXCEPTION_MESSAGE.INPUT_LENGTH_ERROR);
    }
    if (validCheck === EXCEPTION_REASON.INPUT_OVERLAPPED) {
      throw new Error(EXCEPTION_MESSAGE.INPUT_OVERLAPPED);
    }
  }

  printMyLottery() {
    Console.print(this.#numbers);
  }

  returnMyLotteryRank(answer, bonusNumber) {
    const countResult = countCorrectNumber(this.#numbers, answer);
    const bonusResult = isBonusNumberCorrect(bonusNumber, answer);
    const result = returnMyRank(countResult, bonusResult);

    return result;
  }
}

module.exports = Lotto;
