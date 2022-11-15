const MissionUtils = require('@woowacourse/mission-utils');
const Validation = require('../Utilities/Validation');
const { LOTTO_SPEC } = require('../Constants');

const { Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(
    numbers = Random.pickUniqueNumbersInRange(
      LOTTO_SPEC.MIN_NUMBER,
      LOTTO_SPEC.MAX_NUMBER,
      LOTTO_SPEC.PROPER_LENGTH,
    ),
  ) {
    this.validation = new Validation();
    this.validation.isValidWinningNumbers(numbers);
    this.#numbers = numbers;
  }

  get genWinningNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
