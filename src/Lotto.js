const MissionUtils = require("@woowacourse/mission-utils");
const CONSTANT = require("./constant");
const Validate = require("./Validate");
const Utils = require("./domain/Utils");

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

  // TODO: 추가 기능 구현 여기에 정답과 자신을 비교하는 메서드 .
}

module.exports = Lotto;
