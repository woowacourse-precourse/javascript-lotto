const { Console } = require('@woowacourse/mission-utils');
const { RULES, ERROR_MESSAGE } = require('./constants/index.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== RULES.LOTTO_NUMS) {
      Console.close();
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
    }

    if (new Set(numbers).size !== RULES.LOTTO_NUMS) {
      Console.close();
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }

  checkHowManyCorrect(winningNumber, bonusNumber) {
    const { length: matchCount } = this.#numbers.filter((number) => winningNumber.includes(number));

    if (matchCount === 5 && this.#numbers.includes(bonusNumber)) {
      return '5+bonus';
    }

    return matchCount;
  }
}

module.exports = Lotto;
