// const { Console } = require("@woowacourse/mission-utils");
const MakeLottos = require('./MakeLottos');

class Price {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000단위여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Price;
