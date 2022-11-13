const { getRankByResultCnt } = require("./util/calculate");
const { ERROR_MESSAGE } = require("./util/message");
const { isDuplicate, isIncludeNaN } = require("./util/validate");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (isDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGE.Duplicate);
    }

    if (isIncludeNaN(numbers)) {
      throw new Error(ERROR_MESSAGE.NaN);
    }
  }

  calculateResult(userNumbers, userBonusNumber) {
    const numberSet = new Set(this.#numbers);

    const cnt = userNumbers.reduce((acc, currentNumber) => {
      if (numberSet.has(currentNumber)) {
        return (acc += 1);
      }
      return acc;
    }, 0);

    return getRankByResultCnt(cnt, numberSet.has(userBonusNumber));
  }
}

module.exports = Lotto;
