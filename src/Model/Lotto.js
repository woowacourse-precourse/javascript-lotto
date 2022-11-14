const MissionUtils = require('@woowacourse/mission-utils');
const Validation = require('../Utilities/Validation');

const { Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers = Random.pickUniqueNumbersInRange(1, 45, 6)) {
    this.validation = new Validation();
    this.validation.isValidLottoNumber(numbers);
    this.#numbers = numbers;
  }

  get genLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
