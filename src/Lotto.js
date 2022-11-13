const { getPrizeByResultCnt } = require("./util/calculate");

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
  }

  calculateResult(userNumbers, userBonusNumber) {
    const numberSet = new Set(this.#numbers);

    const cnt = userNumbers.reduce((acc, currentNumber) => {
      if (numberSet.has(currentNumber)) {
        return (acc += 1);
      }
      return acc;
    }, 0);

    return getPrizeByResultCnt(cnt, numberSet.has(userBonusNumber));
  }
}

module.exports = Lotto;
