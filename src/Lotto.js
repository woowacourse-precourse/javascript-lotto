const { Console } = require('@woowacourse/mission-utils');
const isBonusNumberCorrect = require('./utils/isBonusNumberCorrect');
const returnMyRank = require('./utils/returnMyRank');

class Lotto {
  #numbers;

  constructor(numbers) {
    // 문자열
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
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
