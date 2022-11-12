// const { Console } = require("@woowacourse/mission-utils");
// const MakeLottos = require('../MakeLottos');
const { ERROR } = require('../utils/Constants');

class Price {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_PRICE}`);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Price;
