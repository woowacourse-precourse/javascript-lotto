const { LOTTOREQUIREMENT, WINNINGCONDITION } = require("./constant/Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  // 유효성 체크
  validate(numbers) {
    this.validateRange(numbers);
    if (numbers.length !== LOTTOREQUIREMENT.LENGTH) {
      throw new Error(WINNINGCONDITION.LENGTH);
    }
    if (new Set(numbers).size !== LOTTOREQUIREMENT.LENGTH) {
      throw new Error(WINNINGCONDITION.DUPLICATE);
    }
  }

  validateRange(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw new Error(WINNINGCONDITION.NaN);
      }
      if (number < LOTTOREQUIREMENT.MIN || number > LOTTOREQUIREMENT.MAX) {
        throw new Error(WINNINGCONDITION.RANGE);
      }
    });
  }

  comparisonNumbers(publishedlottos, bonusNumber) {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0];

    publishedlottos.forEach((lotto) => {
      const { cnt, bonusCnt } = this.comparisonEach(lotto, bonusNumber);
      const idx = this.sortRank(cnt, bonusCnt);
      arr[idx] += 1;
    });

    return {
      three: arr[3],
      four: arr[4],
      five: arr[5],
      bonus: arr[7],
      six: arr[6],
    };
  }

  comparisonEach(lotto, bonusNumber) {
    let cnt = 0;
    let bonusCnt = 0;

    this.#numbers.forEach((cur) => {
      if (lotto.includes(cur)) {
        cnt += 1;
      }
    });

    if (lotto.includes(bonusNumber)) {
      bonusCnt += 1;
    }

    return { cnt, bonusCnt };
  }

  sortRank(cnt, bonusCnt) {
    if (cnt === 5 && bonusCnt === 1) {
      return 7;
    }
    return cnt;
  }
}

module.exports = Lotto;
