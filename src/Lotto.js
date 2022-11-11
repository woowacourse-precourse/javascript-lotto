const { Random } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  // 메서드 안에서 this쓰면 static 지워도 됨
  static validate(numbers) {
    new Validator().isValidLotto(numbers);
  }

  static purchase(numberCount = 6, minNumber = 1, maxNumber = 45) {
    const lotto = [];

    while (lotto.length < numberCount) {
      const pickedNumber = Random.pickNumberInRange(minNumber, maxNumber);

      if (!lotto.includes(pickedNumber)) {
        lotto.push(pickedNumber);
      }
    }

    return lotto;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
