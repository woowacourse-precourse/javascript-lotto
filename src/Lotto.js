const MissionUtils = require('@woowacourse/mission-utils');
const {LOTTO, ERROR} = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ERROR.LOTTO_LENGTH);
    }
    if (new Set(numbers).size !== LOTTO.LENGTH) {
      throw new Error(ERROR.LOTTO_OVERLAP);
    }
    numbers.map((number) => {
      this.constructor.validateScope(number);
    });
  }

  static validateScope(number) {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR.LOTTO_SCPOE);
    }
  }

  static getRandomNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.LENGTH)
      .sort((a, b) => a - b);
      
    return randomNumber;
  }
}

module.exports = Lotto;
