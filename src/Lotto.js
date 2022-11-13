const { Random } = require('@woowacourse/mission-utils');
const {
  ERR_MSG,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_LENGTH
} = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  static makeLotto() {
    const newLotto = [];
    while (newLotto.length < LOTTO_LENGTH) {
      const randomNum = Random.pickNumberInRange(
        MIN_LOTTO_NUMBER,
        MAX_LOTTO_NUMBER
      );
      if (!newLotto.includes(randomNum)) {
        newLotto.push(randomNum);
      }
    }
    newLotto.sort((a, b) => a - b);
    return newLotto;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERR_MSG.invalidLottoNumber);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
