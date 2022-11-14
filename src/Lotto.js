const { ANSWER, ERROR_MESSAGE, PRIZE_KEY } = require("./util/constants");
const { isDuplicateNumber, isNumberLength } = require("./util/validate/lotto");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (isDuplicateNumber(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_COUNT);
    if (isNumberLength(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_COUNT);
  }

  calculateWin(lottoList, bonusNumber) {
    const resultObject = { THREE: 0, FOUR: 0, FIVE: 0, FIVE_BONUS: 0, SIX: 0 };
    const resultCnt = lottoList.reduce((acc, curLotto) => {
      if (this.#numbers.includes(curLotto)) {
        return (acc += 1);
      }
      return acc;
    }, 0);
    if (this.#numbers.includes(bonusNumber) && resultCnt == 5) resultCnt += 1;
    if (resultCnt == 6) resultCnt += 1;

    if (resultCnt >= 3) resultObject[PRIZE_KEY[resultCnt - 3]] += 1;

    return resultObject;
  }
}

module.exports = Lotto;
