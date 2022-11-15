const { Random } = require('@woowacourse/mission-utils');
const checkLottoValidation = require('./checkValid/checkLottoValidation');

class LottoBuilder {
  constructor() {
    this.lottoList = [];
    this.WinningNumber = [];
    this.bonusNumber = null;
  }

  createLottoNumber() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumber.sort((a, b) => a - b);
  }
  countAmountLotto(input) {
    return Number(input.slice(0, input.length - 3));
  }
}

class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    checkLottoValidation(numbers);
  }

  // TODO: 추가 기능 구현
}
module.exports = { LottoBuilder, Lotto };
