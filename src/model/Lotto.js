const MissionUtils = require("@woowacourse/mission-utils");
const CONSTANT = require("../assets/constant");
const Validate = require("../domain/Validate");
const Utils = require("../assets/Utils");

class Lotto {
  #numbers;

  constructor(test = null) {
    if (test) {
      Validate.lottoNumber(test);
      this.#numbers = test;
    }

    if (!test) {
      const numbers = this.getRandomNumbers();
      Validate.lottoNumber(numbers);
      this.#numbers = numbers;
    }
  }

  get numbers() {
    return Utils.sort(this.#numbers);
  }

  set numbers(numbers) {
    this.#numbers = numbers;
  }

  getRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      CONSTANT.LOTTO_START,
      CONSTANT.LOTTO_END,
      CONSTANT.LOTTO_LENGTH
    );
  }
}

module.exports = Lotto;
