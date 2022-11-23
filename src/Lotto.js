const MissionUtils = require('@woowacourse/mission-utils');
const { LOTTO, REGEX_NUM } = require('./constants');
const { checkIsNum } = require('./validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  validate(numbers) {
    Lotto.checkIsNum(numbers);
    this.checkNumRange(numbers);
    Lotto.checkSixNum(numbers);
    Lotto.checkDuplicatedNum(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
